import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Globe, Lightbulb } from 'lucide-react';

const TEAM = [
  { name: 'Poorna Madhushan', role: 'Founder & Lead Developer', initials: 'PM' },
  { name: 'Research Team', role: 'Content Curators', initials: 'RT' },
  { name: 'Admin Team', role: 'Platform Management', initials: 'AT' },
];

const TECHNOLOGIES = [
  { name: 'React.js', desc: 'Frontend framework' },
  { name: 'Tailwind CSS', desc: 'Utility-first CSS' },
  { name: 'React Router', desc: 'Client-side routing' },
  { name: 'Vite', desc: 'Build tool' },
  { name: 'Django REST', desc: 'Backend API (planned)' },
  { name: 'PostgreSQL', desc: 'Database (planned)' },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">About AI Research Portal</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          A platform built to celebrate and showcase innovative AI/ML research by university students.
        </p>
      </section>

      {/* Mission */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Target,
              color: 'bg-primary-100 text-primary-600',
              title: 'Our Mission',
              body: 'To bridge the gap between academic research and industry by creating a searchable, accessible repository of student AI projects.',
            },
            {
              icon: Eye,
              color: 'bg-accent-100 text-accent-600',
              title: 'Our Vision',
              body: 'To become the leading platform for AI research discovery in South Asia, inspiring the next generation of AI engineers.',
            },
            {
              icon: Globe,
              color: 'bg-purple-100 text-purple-600',
              title: 'Open Access',
              body: 'We believe research should be accessible to everyone. All published projects include links to code, datasets, and reports.',
            },
          ].map((card) => (
            <div key={card.title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
              <div className={`${card.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <card.icon size={22} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What we offer */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: '🔍 Searchable Research Database',
                desc: 'Find projects by keyword, author, category, year, or department instantly.',
              },
              {
                title: '📤 Easy Project Submission',
                desc: 'Students can submit projects with descriptions, GitHub links, datasets, and reports.',
              },
              {
                title: '🔗 Related Project Discovery',
                desc: 'Explore related projects in the same research area to build on existing work.',
              },
              {
                title: '🛡️ Quality Control',
                desc: 'Admin review ensures all published projects meet quality and academic standards.',
              },
              {
                title: '📊 Research Analytics',
                desc: 'Track trending research areas and see what topics are most actively explored.',
              },
              {
                title: '🌐 Open Source',
                desc: 'All projects include GitHub links encouraging collaboration and open-source culture.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          <Lightbulb size={22} className="text-primary-600" />
          <h2 className="text-2xl font-bold text-gray-900">Technology Stack</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {TECHNOLOGIES.map((tech) => (
            <div key={tech.name} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center">
              <p className="font-semibold text-sm text-gray-900">{tech.name}</p>
              <p className="text-xs text-gray-500 mt-1">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <div className="w-14 h-14 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {member.initials}
                </div>
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Share Your Research?</h2>
          <p className="text-primary-100 mb-8">Join our growing community of AI researchers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/submit"
              className="bg-white text-primary-700 hover:bg-primary-50 px-8 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
            >
              Submit a Project <ArrowRight size={18} />
            </Link>
            <Link
              to="/projects"
              className="border border-white/40 text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold transition-colors"
            >
              Browse Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
