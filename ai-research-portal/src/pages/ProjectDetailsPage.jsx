import { useParams, Link } from 'react-router-dom';
import { useProjects } from '../context/ProjectContext';
import { CATEGORIES } from '../data/projects';
import { Github, Database, FileText, ArrowLeft, Calendar, User, Tag, ExternalLink } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const { projects } = useProjects();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <p className="text-5xl mb-4">😕</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Project Not Found</h1>
        <p className="text-gray-500 mb-6">This project doesn't exist or has been removed.</p>
        <Link to="/projects" className="text-primary-600 hover:underline flex items-center gap-1 justify-center">
          <ArrowLeft size={16} /> Back to Browse
        </Link>
      </div>
    );
  }

  const category = CATEGORIES.find((c) => c.id === project.category);
  const related = projects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-primary-600">Home</Link>
        <span>/</span>
        <Link to="/projects" className="hover:text-primary-600">Browse</Link>
        <span>/</span>
        <span className="text-gray-800 font-medium truncate max-w-xs">{project.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2">
          {/* Title + meta */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <span className="text-4xl">{category?.icon || '🔬'}</span>
              <Link
                to={`/projects?category=${project.category}`}
                className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full"
              >
                {category?.label}
              </Link>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{project.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1.5"><User size={14} /> {project.author}</span>
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {project.year}</span>
              <span className="flex items-center gap-1.5 capitalize">{project.department}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Tag size={10} /> {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">📋 Project Description</h2>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line text-sm">
              {project.description}
            </div>
          </div>

          {/* Screenshots */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">📸 Screenshots</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.screenshots.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Screenshot ${i + 1}`}
                    className="rounded-lg border border-gray-200 w-full h-48 object-cover"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Resources */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="font-semibold text-gray-900 mb-4">🔗 Resources</h3>
            <div className="space-y-3">
              {project.githubUrl && project.githubUrl !== '#' && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm text-gray-700 transition-colors"
                >
                  <Github size={18} className="text-gray-700" />
                  <span className="flex-1">GitHub Repository</span>
                  <ExternalLink size={13} className="text-gray-400" />
                </a>
              )}
              {project.datasetUrl && project.datasetUrl !== '#' && (
                <a
                  href={project.datasetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm text-gray-700 transition-colors"
                >
                  <Database size={18} className="text-blue-600" />
                  <span className="flex-1">Dataset</span>
                  <ExternalLink size={13} className="text-gray-400" />
                </a>
              )}
              {project.reportUrl && project.reportUrl !== '#' && (
                <a
                  href={project.reportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm text-gray-700 transition-colors"
                >
                  <FileText size={18} className="text-red-500" />
                  <span className="flex-1">Research Report</span>
                  <ExternalLink size={13} className="text-gray-400" />
                </a>
              )}
            </div>
          </div>

          {/* Authors */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="font-semibold text-gray-900 mb-4">👤 Authors</h3>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-sm">
                {project.author.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-sm text-gray-900">{project.author}</p>
                <p className="text-xs text-gray-500">{project.department}</p>
              </div>
            </div>
          </div>

          {/* Project info */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="font-semibold text-gray-900 mb-4">ℹ️ Project Info</h3>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-gray-500">Year</dt>
                <dd className="font-medium text-gray-800">{project.year}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Category</dt>
                <dd className="font-medium text-gray-800">{category?.label}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Department</dt>
                <dd className="font-medium text-gray-800 text-right max-w-[160px]">{project.department}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">🔗 Related Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {related.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
