import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

function loadUser() {
  try {
    const stored = sessionStorage.getItem('air_user');
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(loadUser);

  function persist(u) {
    if (u) sessionStorage.setItem('air_user', JSON.stringify(u));
    else sessionStorage.removeItem('air_user');
    setUser(u);
  }

  function login(email, password) {
    // Demo credentials
    if (email === 'admin@aresearch.lk' && password === 'admin123') {
      persist({ id: 'admin1', name: 'Admin User', email, role: 'admin' });
      return true;
    }
    if (email === 'student@university.lk' && password === 'student123') {
      persist({ id: 'student1', name: 'Kasun Perera', email, role: 'student' });
      return true;
    }
    return false;
  }

  function register(name, email) {
    persist({ id: `user_${Date.now()}`, name, email, role: 'student' });
    return true;
  }

  function logout() {
    persist(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}
