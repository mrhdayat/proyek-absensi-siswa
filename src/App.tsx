import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/sonner';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { LandingPage } from '@/pages/LandingPage';
import { LoginPage } from '@/pages/LoginPage';
import { DashboardHome } from '@/pages/dashboard/DashboardHome';
import { useAuthStore } from '@/store/authStore';

function App() {
  const { isAuthenticated } = useAuthStore();

  return (
    <Router>
      <div className="min-h-screen bg-background">
        <AnimatePresence mode="wait">
          <motion.div
            key="app-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Routes>
              {/* Public Routes */}
              <Route
                path="/"
                element={
                  isAuthenticated ? (
                    <Navigate to="/dashboard" replace />
                  ) : (
                    <LandingPage />
                  )
                }
              />
              <Route
                path="/login"
                element={
                  isAuthenticated ? (
                    <Navigate to="/dashboard" replace />
                  ) : (
                    <LoginPage />
                  )
                }
              />

              {/* Protected Dashboard Routes */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <DashboardLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<DashboardHome />} />
                {/* Add more dashboard routes here as we build them */}
              </Route>

              {/* Unauthorized Route */}
              <Route
                path="/unauthorized"
                element={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <h1 className="text-2xl font-bold">Akses Ditolak</h1>
                      <p className="text-muted-foreground">
                        Anda tidak memiliki izin untuk mengakses halaman ini.
                      </p>
                      <button
                        onClick={() => window.history.back()}
                        className="text-primary hover:underline"
                      >
                        Kembali
                      </button>
                    </div>
                  </div>
                }
              />

              {/* Catch all route */}
              <Route
                path="*"
                element={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <h1 className="text-2xl font-bold">404 - Halaman Tidak Ditemukan</h1>
                      <p className="text-muted-foreground">
                        Halaman yang Anda cari tidak tersedia.
                      </p>
                      <a href="/" className="text-primary hover:underline">
                        Kembali ke Beranda
                      </a>
                    </div>
                  </div>
                }
              />
            </Routes>
          </motion.div>
        </AnimatePresence>

        <Toaster />
      </div>
    </Router>
  );
}

export default App;