import { X } from 'lucide-react';
import { CATEGORIES, YEARS, DEPARTMENTS } from '../data/projects';

export default function FilterPanel({ filters, onChange, onClear }) {
  const hasActiveFilters = filters.category || filters.year || filters.department;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-semibold text-gray-800">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={onClear}
            className="text-xs text-primary-600 hover:text-primary-700 flex items-center gap-1"
          >
            <X size={12} /> Clear all
          </button>
        )}
      </div>

      {/* Research Area */}
      <div className="mb-5">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Research Area</p>
        <div className="space-y-1.5">
          {CATEGORIES.map((cat) => (
            <label key={cat.id} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="radio"
                name="category"
                value={cat.id}
                checked={filters.category === cat.id}
                onChange={() => onChange({ ...filters, category: cat.id })}
                className="text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm text-gray-700 group-hover:text-primary-600 transition-colors">
                {cat.icon} {cat.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Year */}
      <div className="mb-5">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Year</p>
        <select
          value={filters.year || ''}
          onChange={(e) => onChange({ ...filters, year: e.target.value || '' })}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="">All Years</option>
          {YEARS.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>

      {/* Department */}
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Department</p>
        <select
          value={filters.department || ''}
          onChange={(e) => onChange({ ...filters, department: e.target.value || '' })}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="">All Departments</option>
          {DEPARTMENTS.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
