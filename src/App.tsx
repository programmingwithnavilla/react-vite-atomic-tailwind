// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider as JotaiProvider } from 'jotai';
import { DevTools } from 'jotai-devtools';
import { AuthProvider } from './hooks/use-auth/use-auth.hook';
import { PrivateRoute } from './routes/private.route';
import { ProtectedRoute } from './routes/protected.route';
import { PublicRoute } from './routes/public.route';
import { AdminPanelPage } from './pages/admin-panel.page';
import { DashboardPage } from './pages/dashboard.page';
import { LandingPage } from './pages/landing.page';
import { LoginPage } from './pages/login.page';
import { SignupPage } from './pages/signup.page';
import { ProfilePage } from './pages/profile.page';
import { jotaiStore } from './store/store';

const App = () => (
  <JotaiProvider store={jotaiStore}>
    <DevTools />
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <SignupPage />
              </PublicRoute>
            }
          />
          <Route
            path="/landing"
            element={
              <PublicRoute>
                <LandingPage />
              </PublicRoute>
            }
          />

          {/* Protected routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />

          {/* Private routes with roles */}
          <Route
            path="/admin"
            element={
              <PrivateRoute roles={['admin', 'manager']}>
                <AdminPanelPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </JotaiProvider>
);

export default App;
