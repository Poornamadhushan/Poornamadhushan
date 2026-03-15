import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProjectProvider } from './context/ProjectContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BrowseProjectsPage from './pages/BrowseProjectsPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import SubmitProjectPage from './pages/SubmitProjectPage';
import LoginPage from './pages/LoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AboutPage from './pages/AboutPage';

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProjectProvider>
          <Routes>
            {/* Login page has its own layout (no nav/footer) */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<LoginPage />} />
            <Route
              path="/*"
              element={
                <Layout>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects" element={<BrowseProjectsPage />} />
                    <Route path="/projects/:id" element={<ProjectDetailsPage />} />
                    <Route path="/submit" element={<SubmitProjectPage />} />
                    <Route path="/admin" element={<AdminDashboardPage />} />
                    <Route path="/about" element={<AboutPage />} />
                  </Routes>
                </Layout>
              }
            />
          </Routes>
        </ProjectProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
