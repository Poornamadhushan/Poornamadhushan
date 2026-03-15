import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, TrendingUp, Star } from 'lucide-react';
import { useProjects } from '../context/ProjectContext';
import { CATEGORIES } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

function StatCard({ icon, label, value, color }) {
  const CardIcon = icon;
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
      <div className={`${color} p-3 rounded-xl`}>
        <CardIcon size={22} className="text-white" />
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  const { projects } = useProjects();
  const featured = projects.filter((p) => p.featured).slice(0, 4);
  const latest = projects.slice(-3).reverse();

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary-600/30 border border-primary-500/40 text-primary-300 text-sm px-4 py-1.5 rounded-full mb-6">
            <Star size={14} />
            Discover AI/ML Research Projects
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            AI Research Portal
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Explore, share, and discover cutting-edge AI and machine learning research
            projects from talented university students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              Browse Projects
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/submit"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
            >
              Submit Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon={BookOpen} label="Published Projects" value={projects.length} color="bg-primary-600" />
          <StatCard icon={Users} label="Student Researchers" value="48+" color="bg-purple-600" />
          <StatCard icon={TrendingUp} label="Research Areas" value={CATEGORIES.length} color="bg-accent-500" />
          <StatCard icon={Star} label="Featured Projects" value={featured.length} color="bg-orange-500" />
        </div>
      </section>

      {/* Featured */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">⭐ Featured Projects</h2>
            <p className="text-gray-500 text-sm mt-1">Highlighted research by our best students</p>
          </div>
          <Link to="/projects" className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center gap-1">
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">🗂️ Browse by Category</h2>
          <p className="text-gray-500 text-sm mt-1">Filter projects by research area</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => {
            const count = projects.filter((p) => p.category === cat.id).length;
            return (
              <Link
                key={cat.id}
                to={`/projects?category=${cat.id}`}
                className="bg-white border border-gray-100 rounded-xl p-4 text-center shadow-sm hover:shadow-md hover:border-primary-200 transition-all group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{cat.icon}</div>
                <p className="font-medium text-sm text-gray-800">{cat.label}</p>
                <p className="text-xs text-gray-400 mt-1">{count} project{count !== 1 ? 's' : ''}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Latest */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">🆕 Latest Projects</h2>
            <p className="text-gray-500 text-sm mt-1">Recently published research</p>
          </div>
          <Link to="/projects?sort=newest" className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center gap-1">
            See more <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {latest.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-14 px-4 mt-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Share Your Research</h2>
          <p className="text-primary-100 mb-8 leading-relaxed">
            Are you a student with an AI/ML project? Submit it to the portal and let the world discover your work.
          </p>
          <Link
            to="/submit"
            className="bg-white text-primary-700 hover:bg-primary-50 px-8 py-3 rounded-xl font-semibold transition-colors inline-flex items-center gap-2"
          >
            Submit a Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
