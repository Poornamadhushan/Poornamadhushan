import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useProjects } from '../context/ProjectContext';
import { CATEGORIES } from '../data/projects';
import { Upload, CheckCircle, Lock } from 'lucide-react';

const TAGS_OPTIONS = ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Data Analysis',
  'Reinforcement Learning', 'PyTorch', 'TensorFlow', 'Python', 'BERT', 'GAN', 'CNN', 'LSTM', 'GRU',
  'Transformer', 'Edge AI', 'Mobile AI', 'Healthcare', 'Agriculture'];

export default function SubmitProjectPage() {
  const { user } = useAuth();
  const { submitProject } = useProjects();

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    title: '',
    shortDescription: '',
    description: '',
    category: '',
    author: user?.name || '',
    department: '',
    year: new Date().getFullYear(),
    githubUrl: '',
    datasetUrl: '',
    reportUrl: '',
    tags: [],
  });
  const [errors, setErrors] = useState({});

  if (!user) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <Lock size={40} className="text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">Sign In Required</h2>
          <p className="text-gray-500 mb-6">You need to be logged in to submit a project.</p>
          <Link
            to="/login"
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-xl font-medium transition-colors inline-block"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: '' });
  }

  function toggleTag(tag) {
    setForm((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag) ? prev.tags.filter((t) => t !== tag) : [...prev.tags, tag],
    }));
  }

  function validate() {
    const e = {};
    if (!form.title.trim()) e.title = 'Title is required.';
    if (!form.shortDescription.trim()) e.shortDescription = 'Short description is required.';
    if (!form.description.trim()) e.description = 'Full description is required.';
    if (!form.category) e.category = 'Please select a category.';
    if (!form.author.trim()) e.author = 'Author name is required.';
    if (!form.department.trim()) e.department = 'Department is required.';
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) {
      setErrors(e2);
      return;
    }
    submitProject({ ...form, submittedBy: user.id });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <CheckCircle size={52} className="text-accent-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Project Submitted!</h2>
          <p className="text-gray-500 mb-6">
            Your project has been submitted for review. It will be published after admin approval.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/projects" className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-xl font-medium transition-colors">
              Browse Projects
            </Link>
            <button onClick={() => setSubmitted(false)} className="border border-gray-200 text-gray-700 px-6 py-2.5 rounded-xl font-medium hover:bg-gray-50 transition-colors">
              Submit Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Submit a Project</h1>
        <p className="text-gray-500 mt-1">Share your AI/ML research with the community. Projects are reviewed before publishing.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
        {/* Basic Info */}
        <section>
          <h2 className="text-base font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-100">Basic Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Title *</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="e.g., Sentiment Analysis using BERT"
                className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.title ? 'border-red-400' : 'border-gray-200'}`}
              />
              {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Short Description *</label>
              <textarea
                name="shortDescription"
                value={form.shortDescription}
                onChange={handleChange}
                rows={2}
                placeholder="One or two sentences summarizing the project..."
                className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none ${errors.shortDescription ? 'border-red-400' : 'border-gray-200'}`}
              />
              {errors.shortDescription && <p className="text-red-500 text-xs mt-1">{errors.shortDescription}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Description *</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={5}
                placeholder="Detailed description of your project, methodology, results..."
                className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none ${errors.description ? 'border-red-400' : 'border-gray-200'}`}
              />
              {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
            </div>
          </div>
        </section>

        {/* Classification */}
        <section>
          <h2 className="text-base font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-100">Classification</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.category ? 'border-red-400' : 'border-gray-200'}`}
              >
                <option value="">Select category...</option>
                {CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>{c.icon} {c.label}</option>
                ))}
              </select>
              {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Year *</label>
              <select
                name="year"
                value={form.year}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {[2025, 2024, 2023, 2022, 2021, 2020].map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Author/Student Name *</label>
              <input
                type="text"
                name="author"
                value={form.author}
                onChange={handleChange}
                placeholder="Full name"
                className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.author ? 'border-red-400' : 'border-gray-200'}`}
              />
              {errors.author && <p className="text-red-500 text-xs mt-1">{errors.author}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Department *</label>
              <input
                type="text"
                name="department"
                value={form.department}
                onChange={handleChange}
                placeholder="e.g., Computer Science"
                className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.department ? 'border-red-400' : 'border-gray-200'}`}
              />
              {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department}</p>}
            </div>
          </div>

          {/* Tags */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
            <div className="flex flex-wrap gap-2">
              {TAGS_OPTIONS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                    form.tags.includes(tag)
                      ? 'bg-primary-600 text-white border-primary-600'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-primary-400'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Links */}
        <section>
          <h2 className="text-base font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-100">Links & Files</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">GitHub Repository URL</label>
              <input
                type="url"
                name="githubUrl"
                value={form.githubUrl}
                onChange={handleChange}
                placeholder="https://github.com/username/repo"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Dataset URL</label>
              <input
                type="url"
                name="datasetUrl"
                value={form.datasetUrl}
                onChange={handleChange}
                placeholder="https://kaggle.com/..."
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Research Report/Paper URL</label>
              <input
                type="url"
                name="reportUrl"
                value={form.reportUrl}
                onChange={handleChange}
                placeholder="https://..."
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* File upload placeholder */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Images</label>
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-primary-400 transition-colors cursor-pointer">
                <Upload size={24} className="text-gray-300 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Drag & drop images or <span className="text-primary-600 font-medium">browse</span></p>
                <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB each</p>
              </div>
            </div>
          </div>
        </section>

        {/* Notice */}
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm px-4 py-3 rounded-lg flex gap-2">
          <span>⚠️</span>
          <span>Your project will be reviewed by an admin before being published on the portal.</span>
        </div>

        <button
          type="submit"
          className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
        >
          <Upload size={18} />
          Submit Project for Review
        </button>
      </form>
    </div>
  );
}
