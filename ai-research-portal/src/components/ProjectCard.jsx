import { Link } from 'react-router-dom';
import { Calendar, User, Tag, ExternalLink } from 'lucide-react';
import { CATEGORIES } from '../data/projects';

const CATEGORY_COLORS = {
  ml: 'bg-blue-100 text-blue-700',
  dl: 'bg-purple-100 text-purple-700',
  nlp: 'bg-green-100 text-green-700',
  cv: 'bg-orange-100 text-orange-700',
  da: 'bg-yellow-100 text-yellow-700',
  rl: 'bg-red-100 text-red-700',
};

export default function ProjectCard({ project }) {
  const category = CATEGORIES.find((c) => c.id === project.category);
  const colorClass = CATEGORY_COLORS[project.category] || 'bg-gray-100 text-gray-700';

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col overflow-hidden group">
      {/* Category badge + icon */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 h-32 flex items-center justify-center relative overflow-hidden">
        <span className="text-5xl opacity-80 group-hover:scale-110 transition-transform duration-300">
          {category?.icon || '🔬'}
        </span>
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
      </div>

      <div className="p-4 flex flex-col flex-1">
        {/* Category */}
        <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full w-fit mb-2 ${colorClass}`}>
          {category?.label || project.category}
        </span>

        {/* Title */}
        <h3 className="font-semibold text-gray-900 text-base leading-snug mb-1.5 line-clamp-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm line-clamp-2 flex-1 mb-3">
          {project.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
              <Tag size={10} />
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs text-gray-400">+{project.tags.length - 3}</span>
          )}
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-3 mt-auto">
          <span className="flex items-center gap-1">
            <User size={11} />
            {project.author}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={11} />
            {project.year}
          </span>
        </div>

        {/* View button */}
        <Link
          to={`/projects/${project.id}`}
          className="mt-3 block text-center bg-primary-50 hover:bg-primary-600 text-primary-600 hover:text-white text-sm font-medium py-2 rounded-lg transition-colors flex items-center justify-center gap-1.5"
        >
          <ExternalLink size={14} />
          View Project
        </Link>
      </div>
    </div>
  );
}
