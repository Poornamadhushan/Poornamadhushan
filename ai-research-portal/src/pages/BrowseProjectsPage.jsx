import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { useProjects } from '../context/ProjectContext';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import ProjectGrid from '../components/ProjectGrid';
import Pagination from '../components/Pagination';

const PAGE_SIZE = 9;

export default function BrowseProjectsPage() {
  const { projects } = useProjects();
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Derive state from URL params
  const query = searchParams.get('q') || '';
  const filterCategory = searchParams.get('category') || '';
  const filterYear = searchParams.get('year') || '';
  const filterDepartment = searchParams.get('department') || '';
  const filters = { category: filterCategory, year: filterYear, department: filterDepartment };

  // Local draft for search input
  const [draftQuery, setDraftQuery] = useState(query);

  const filtered = useMemo(() => {
    let result = projects;
    if (query) {
      const q = query.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.author.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    if (filterCategory) result = result.filter((p) => p.category === filterCategory);
    if (filterYear) result = result.filter((p) => String(p.year) === String(filterYear));
    if (filterDepartment) result = result.filter((p) => p.department === filterDepartment);
    return result;
  }, [projects, query, filterCategory, filterYear, filterDepartment]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  function handleFilterChange(newFilters) {
    setCurrentPage(1);
    const params = {};
    if (query) params.q = query;
    if (newFilters.category) params.category = newFilters.category;
    if (newFilters.year) params.year = newFilters.year;
    if (newFilters.department) params.department = newFilters.department;
    setSearchParams(params);
  }

  function handleSearch(q) {
    setCurrentPage(1);
    const params = {};
    if (q) params.q = q;
    if (filters.category) params.category = filters.category;
    if (filters.year) params.year = filters.year;
    if (filters.department) params.department = filters.department;
    setSearchParams(params);
  }

  function clearFilters() {
    const params = {};
    if (query) params.q = query;
    setSearchParams(params);
    setCurrentPage(1);
  }

  const activeFilterCount = [filters.category, filters.year, filters.department].filter(Boolean).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Projects</h1>
        <p className="text-gray-500">
          {filtered.length} project{filtered.length !== 1 ? 's' : ''} found
          {query ? ` for "${query}"` : ''}
        </p>
      </div>

      {/* Search */}
      <div className="flex gap-3 mb-6">
        <div className="flex-1">
          <SearchBar
            value={draftQuery}
            onChange={setDraftQuery}
            onSubmit={handleSearch}
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors ${
            showFilters || activeFilterCount > 0
              ? 'bg-primary-600 text-white border-primary-600'
              : 'bg-white border-gray-200 text-gray-700'
          }`}
        >
          <SlidersHorizontal size={16} />
          Filters
          {activeFilterCount > 0 && (
            <span className="bg-white text-primary-600 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </button>
      </div>

      {/* Active filter chips */}
      {activeFilterCount > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {filters.category && (
            <span className="inline-flex items-center gap-1.5 bg-primary-100 text-primary-700 text-xs font-medium px-3 py-1 rounded-full">
              Category: {filters.category}
              <button onClick={() => handleFilterChange({ ...filters, category: '' })}><X size={12} /></button>
            </span>
          )}
          {filters.year && (
            <span className="inline-flex items-center gap-1.5 bg-primary-100 text-primary-700 text-xs font-medium px-3 py-1 rounded-full">
              Year: {filters.year}
              <button onClick={() => handleFilterChange({ ...filters, year: '' })}><X size={12} /></button>
            </span>
          )}
          {filters.department && (
            <span className="inline-flex items-center gap-1.5 bg-primary-100 text-primary-700 text-xs font-medium px-3 py-1 rounded-full">
              Dept: {filters.department}
              <button onClick={() => handleFilterChange({ ...filters, department: '' })}><X size={12} /></button>
            </span>
          )}
          <button onClick={clearFilters} className="text-xs text-gray-500 hover:text-gray-700 underline">
            Clear all
          </button>
        </div>
      )}

      <div className="flex gap-6">
        {/* Sidebar filters – desktop */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <FilterPanel filters={filters} onChange={handleFilterChange} onClear={clearFilters} />
        </aside>

        {/* Mobile filters */}
        {showFilters && (
          <div className="lg:hidden fixed inset-0 z-40 flex">
            <div className="absolute inset-0 bg-black/40" onClick={() => setShowFilters(false)} />
            <div className="relative ml-auto w-72 bg-white h-full overflow-y-auto p-5 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Filters</h2>
                <button onClick={() => setShowFilters(false)}><X size={20} /></button>
              </div>
              <FilterPanel filters={filters} onChange={(f) => { handleFilterChange(f); setShowFilters(false); }} onClear={() => { clearFilters(); setShowFilters(false); }} />
            </div>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 min-w-0">
          <ProjectGrid projects={paginated} />
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </main>
      </div>
    </div>
  );
}
