import { Search } from 'lucide-react';

export default function SearchBar({ value, onChange, onSubmit, placeholder = 'Search projects, authors, tags...' }) {
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); onSubmit && onSubmit(value); }}
      className="relative w-full"
    >
      <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      />
    </form>
  );
}
