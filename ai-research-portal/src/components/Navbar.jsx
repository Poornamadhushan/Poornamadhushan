import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Search, Brain } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Browse' },
    { to: '/submit', label: 'Submit' },
    { to: '/about', label: 'About' },
  ];

  function handleSearch(e) {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/projects?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setOpen(false);
    }
  }

  function isActive(to) {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to);
  }

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="bg-primary-600 p-1.5 rounded-lg">
              <Brain size={22} className="text-white" />
            </span>
            <span className="hidden sm:block">AI Research Portal</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary-400 ${
                  isActive(link.to) ? 'text-primary-400' : 'text-gray-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Search + Auth */}
          <div className="hidden md:flex items-center gap-3">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects..."
                className="bg-gray-800 text-white placeholder-gray-400 text-sm px-4 py-1.5 pr-9 rounded-full border border-gray-700 focus:outline-none focus:border-primary-500 w-48"
              />
              <button type="submit" className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                <Search size={15} />
              </button>
            </form>

            {user ? (
              <div className="flex items-center gap-2">
                {user.role === 'admin' && (
                  <Link to="/admin" className="text-sm bg-accent-500 hover:bg-accent-600 px-3 py-1.5 rounded-full font-medium transition-colors">
                    Admin
                  </Link>
                )}
                <span className="text-sm text-gray-300">{user.name.split(' ')[0]}</span>
                <button
                  onClick={logout}
                  className="text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-full transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-sm bg-primary-600 hover:bg-primary-700 px-4 py-1.5 rounded-full font-medium transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 px-4 py-4 space-y-3">
          <form onSubmit={handleSearch} className="relative mb-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full bg-gray-700 text-white placeholder-gray-400 text-sm px-4 py-2 pr-9 rounded-full border border-gray-600 focus:outline-none focus:border-primary-500"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Search size={15} />
            </button>
          </form>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block text-sm font-medium py-2 border-b border-gray-700 ${
                isActive(link.to) ? 'text-primary-400' : 'text-gray-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
          {user ? (
            <div className="pt-2 space-y-2">
              {user.role === 'admin' && (
                <Link to="/admin" onClick={() => setOpen(false)} className="block text-sm text-accent-400 font-medium">
                  Admin Dashboard
                </Link>
              )}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">{user.name}</span>
                <button onClick={() => { logout(); setOpen(false); }} className="text-sm text-red-400 hover:text-red-300">
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="block text-center bg-primary-600 text-white py-2 rounded-lg text-sm font-medium mt-2"
            >
              Sign In
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
