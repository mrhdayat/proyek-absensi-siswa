import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Home,
  Users,
  BookOpen,
  Calendar,
  BarChart3,
  Settings,
  LogOut,
  GraduationCap,
  UserCheck,
  FileText,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useAuthStore } from '@/store/authStore';
import { cn } from '@/lib/utils';

export function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  const getMenuItems = () => {
    const baseItems = [
      { icon: Home, label: 'Dashboard', path: '/dashboard', roles: ['admin', 'teacher', 'homeroom', 'principal'] },
    ];

    const roleSpecificItems = {
      admin: [
        { icon: Users, label: 'Manajemen Siswa', path: '/dashboard/students' },
        { icon: BookOpen, label: 'Manajemen Guru', path: '/dashboard/teachers' },
        { icon: Shield, label: 'Manajemen Kelas', path: '/dashboard/classes' },
        { icon: Calendar, label: 'Jadwal Pelajaran', path: '/dashboard/schedules' },
        { icon: BarChart3, label: 'Laporan', path: '/dashboard/reports' },
        { icon: Settings, label: 'Pengaturan', path: '/dashboard/settings' },
      ],
      teacher: [
        { icon: UserCheck, label: 'Input Absensi', path: '/dashboard/attendance' },
        { icon: Calendar, label: 'Jadwal Mengajar', path: '/dashboard/my-schedule' },
        { icon: FileText, label: 'Rekap Kelas', path: '/dashboard/class-recap' },
      ],
      homeroom: [
        { icon: Users, label: 'Siswa Kelas', path: '/dashboard/my-students' },
        { icon: UserCheck, label: 'Absensi Kelas', path: '/dashboard/class-attendance' },
        { icon: BarChart3, label: 'Laporan Kelas', path: '/dashboard/class-reports' },
      ],
      principal: [
        { icon: BarChart3, label: 'Statistik Sekolah', path: '/dashboard/school-stats' },
        { icon: FileText, label: 'Laporan Keseluruhan', path: '/dashboard/overall-reports' },
        { icon: Users, label: 'Manajemen SDM', path: '/dashboard/hr-management' },
        { icon: Settings, label: 'Pengaturan Sekolah', path: '/dashboard/school-settings' },
      ],
    };

    return [
      ...baseItems,
      ...(roleSpecificItems[user?.role as keyof typeof roleSpecificItems] || []),
    ];
  };

  const menuItems = getMenuItems();

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar backdrop */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: sidebarOpen ? 0 : -320,
        }}
        className="fixed top-0 left-0 z-50 h-full w-80 bg-white dark:bg-gray-900 border-r border-border shadow-lg lg:translate-x-0 lg:static lg:h-screen"
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-6 border-b border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold">SMKS Muhammadiyah</h2>
                  <p className="text-sm text-muted-foreground">Satui</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Button
                  variant={isActivePath(item.path) ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start h-12 text-left font-medium",
                    isActivePath(item.path) && "bg-gradient-to-r from-green-500 to-blue-600 text-white"
                  )}
                  onClick={() => {
                    navigate(item.path);
                    setSidebarOpen(false);
                  }}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.label}
                </Button>
              </motion.div>
            ))}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center space-x-3 mb-4">
              <Avatar>
                <AvatarImage src={user?.avatar} />
                <AvatarFallback className="bg-gradient-to-br from-green-500 to-blue-600 text-white">
                  {user?.name?.split(' ').map(n => n[0]).join('').toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{user?.name}</p>
                <p className="text-xs text-muted-foreground capitalize">
                  {user?.role === 'admin' ? 'Administrator' :
                   user?.role === 'teacher' ? 'Guru' :
                   user?.role === 'homeroom' ? 'Wali Kelas' :
                   user?.role === 'principal' ? 'Kepala Sekolah' : user?.role}
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Keluar
            </Button>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="lg:pl-80">
        {/* Top Header */}
        <header className="sticky top-0 z-30 h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-border">
          <div className="flex items-center justify-between h-full px-4 lg:px-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 lg:p-6">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </main>
      </div>
    </div>
  );
}