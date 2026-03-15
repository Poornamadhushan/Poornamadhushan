import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useProjects } from '../context/ProjectContext';
import { CATEGORIES } from '../data/projects';
import {
  LayoutDashboard, BookOpen, Users, Clock, CheckCircle, XCircle,
  Trash2, TrendingUp, Lock, Eye
} from 'lucide-react';

function StatWidget({ icon, label, value, color }) {
  const WidgetIcon = icon;
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex items-center gap-4">
      <div className={`${color} p-3 rounded-xl`}>
        <WidgetIcon size={20} className="text-white" />
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    </div>
  );
}

export default function AdminDashboardPage() {
  const { user } = useAuth();
  const { projects, pending, approveProject, rejectProject, deleteProject } = useProjects();
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  if (!user || user.role !== 'admin') {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <Lock size={40} className="text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">Access Denied</h2>
          <p className="text-gray-500 mb-6">Admin access only. Please sign in with an admin account.</p>
          <Link to="/login" className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-xl font-medium transition-colors inline-block">
            Sign In as Admin
          </Link>
        </div>
      </div>
    );
  }

  const categoryCounts = CATEGORIES.map((c) => ({
    ...c,
    count: projects.filter((p) => p.category === c.id).length,
  }));

  const tabs = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'pending', label: `Pending (${pending.length})`, icon: Clock },
    { id: 'projects', label: 'Projects', icon: BookOpen },
    { id: 'users', label: 'Users', icon: Users },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back, {user.name}</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 rounded-xl p-1 mb-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab.id ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <tab.icon size={16} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Overview */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatWidget icon={BookOpen} label="Total Projects" value={projects.length} color="bg-primary-600" />
            <StatWidget icon={Clock} label="Pending Review" value={pending.length} color="bg-yellow-500" />
            <StatWidget icon={Users} label="Students" value="48" color="bg-purple-600" />
            <StatWidget icon={TrendingUp} label="Categories" value={CATEGORIES.length} color="bg-accent-500" />
          </div>

          {/* Category breakdown */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h2 className="font-semibold text-gray-900 mb-5">Projects by Category</h2>
            <div className="space-y-3">
              {categoryCounts.map((cat) => (
                <div key={cat.id} className="flex items-center gap-3">
                  <span className="text-xl w-8">{cat.icon}</span>
                  <span className="text-sm text-gray-700 w-36">{cat.label}</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-2.5">
                    <div
                      className="bg-primary-500 h-2.5 rounded-full"
                      style={{ width: `${projects.length ? (cat.count / projects.length) * 100 : 0}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-600 w-6">{cat.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent pending */}
          {pending.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h2 className="font-semibold text-gray-900 mb-4">⚡ Pending Submissions</h2>
              <div className="space-y-3">
                {pending.slice(0, 3).map((p) => (
                  <div key={p.id} className="flex items-center justify-between gap-4 p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                    <div>
                      <p className="font-medium text-sm text-gray-800">{p.title}</p>
                      <p className="text-xs text-gray-500">{p.author} · {p.submittedAt}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => approveProject(p.id)}
                        className="p-1.5 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
                        title="Approve"
                      >
                        <CheckCircle size={16} />
                      </button>
                      <button
                        onClick={() => rejectProject(p.id)}
                        className="p-1.5 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                        title="Reject"
                      >
                        <XCircle size={16} />
                      </button>
                    </div>
                  </div>
                ))}
                {pending.length > 3 && (
                  <button onClick={() => setActiveTab('pending')} className="text-sm text-primary-600 hover:underline">
                    View all {pending.length} pending submissions →
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Pending submissions */}
      {activeTab === 'pending' && (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-100">
            <h2 className="font-semibold text-gray-900">Pending Submissions ({pending.length})</h2>
          </div>
          {pending.length === 0 ? (
            <div className="p-10 text-center text-gray-500">
              <CheckCircle size={40} className="text-accent-400 mx-auto mb-3" />
              <p className="font-medium">All caught up! No pending submissions.</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {pending.map((p) => (
                <div key={p.id} className="p-5 flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900">{p.title}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{p.shortDescription}</p>
                    <div className="flex gap-3 mt-2 text-xs text-gray-400">
                      <span>By: {p.author}</span>
                      <span>Category: {CATEGORIES.find((c) => c.id === p.category)?.label || p.category}</span>
                      <span>Submitted: {p.submittedAt}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      onClick={() => approveProject(p.id)}
                      className="flex items-center gap-1.5 bg-green-100 hover:bg-green-200 text-green-700 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <CheckCircle size={14} /> Approve
                    </button>
                    <button
                      onClick={() => rejectProject(p.id)}
                      className="flex items-center gap-1.5 bg-red-100 hover:bg-red-200 text-red-700 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <XCircle size={14} /> Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* All projects */}
      {activeTab === 'projects' && (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-100">
            <h2 className="font-semibold text-gray-900">Published Projects ({projects.length})</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  <th className="px-5 py-3">Title</th>
                  <th className="px-5 py-3">Author</th>
                  <th className="px-5 py-3">Category</th>
                  <th className="px-5 py-3">Year</th>
                  <th className="px-5 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {projects.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3">
                      <p className="font-medium text-sm text-gray-900 max-w-xs truncate">{p.title}</p>
                    </td>
                    <td className="px-5 py-3 text-sm text-gray-600">{p.author}</td>
                    <td className="px-5 py-3">
                      <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full">
                        {CATEGORIES.find((c) => c.id === p.category)?.label || p.category}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-sm text-gray-600">{p.year}</td>
                    <td className="px-5 py-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => navigate(`/projects/${p.id}`)}
                          className="p-1.5 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                          title="View"
                        >
                          <Eye size={15} />
                        </button>
                        <button
                          onClick={() => deleteProject(p.id)}
                          className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Users */}
      {activeTab === 'users' && (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-100">
            <h2 className="font-semibold text-gray-900">Registered Users</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  <th className="px-5 py-3">Name</th>
                  <th className="px-5 py-3">Email</th>
                  <th className="px-5 py-3">Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { id: 'admin1', name: 'Admin User', email: 'admin@aresearch.lk', role: 'admin' },
                  { id: 's1', name: 'Kasun Perera', email: 'kasun@university.lk', role: 'student' },
                  { id: 's2', name: 'Naduni Silva', email: 'naduni@university.lk', role: 'student' },
                  { id: 's3', name: 'Dinesh Jayawardena', email: 'dinesh@university.lk', role: 'student' },
                  { id: 's4', name: 'Amali Fernando', email: 'amali@university.lk', role: 'student' },
                ].map((u) => (
                  <tr key={u.id} className="hover:bg-gray-50">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-sm font-bold">
                          {u.name.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-gray-900">{u.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-sm text-gray-600">{u.email}</td>
                    <td className="px-5 py-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${u.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'}`}>
                        {u.role}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
