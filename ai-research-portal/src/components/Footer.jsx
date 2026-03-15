import { Link } from 'react-router-dom';
import { Brain, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl text-white mb-3">
              <span className="bg-primary-600 p-1.5 rounded-lg">
                <Brain size={20} className="text-white" />
              </span>
              AI Research Portal
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Discover, share, and explore AI/ML research projects from university students.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors"><Github size={18} /></a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors"><Twitter size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={18} /></a>
              <a href="#" aria-label="Email" className="text-gray-400 hover:text-white transition-colors"><Mail size={18} /></a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/projects" className="hover:text-white transition-colors">Browse Projects</Link></li>
              <li><Link to="/projects?category=ml" className="hover:text-white transition-colors">Machine Learning</Link></li>
              <li><Link to="/projects?category=dl" className="hover:text-white transition-colors">Deep Learning</Link></li>
              <li><Link to="/projects?category=nlp" className="hover:text-white transition-colors">NLP</Link></li>
              <li><Link to="/projects?category=cv" className="hover:text-white transition-colors">Computer Vision</Link></li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold text-white mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/submit" className="hover:text-white transition-colors">Submit Project</Link></li>
              <li><Link to="/login" className="hover:text-white transition-colors">Login</Link></li>
              <li><Link to="/register" className="hover:text-white transition-colors">Register</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-3">Get notified about new AI research projects.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-gray-800 border border-gray-700 text-sm text-white px-3 py-2 rounded-lg focus:outline-none focus:border-primary-500 min-w-0"
              />
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white text-sm px-3 py-2 rounded-lg transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <span>© {new Date().getFullYear()} AI Research Portal. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
