import { motion } from 'framer-motion';
import { 
  Users, 
  BookOpen, 
  Calendar, 
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  UserCheck
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuthStore } from '@/store/authStore';

export function DashboardHome() {
  const { user } = useAuthStore();

  const stats = [
    {
      title: 'Total Siswa',
      value: '1,247',
      change: '+12',
      changeType: 'increase' as const,
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20'
    },
    {
      title: 'Hadir Hari Ini',
      value: '1,156',
      change: '92.7%',
      changeType: 'neutral' as const,
      icon: UserCheck,
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/20'
    },
    {
      title: 'Tidak Hadir',
      value: '91',
      change: '7.3%',
      changeType: 'decrease' as const,
      icon: AlertCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-100 dark:bg-red-900/20'
    },
    {
      title: 'Kelas Aktif',
      value: '36',
      change: '+2',
      changeType: 'increase' as const,
      icon: BookOpen,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      activity: 'Absensi kelas XII RPL 1 telah diinput',
      teacher: 'Ahmad Susanto, S.Pd',
      time: '10 menit yang lalu',
      type: 'attendance'
    },
    {
      id: 2,
      activity: 'Laporan bulanan Oktober telah digenerate',
      teacher: 'Siti Nurhaliza, S.Pd',
      time: '25 menit yang lalu',
      type: 'report'
    },
    {
      id: 3,
      activity: 'Data siswa baru telah ditambahkan',
      teacher: 'Administrator',
      time: '1 jam yang lalu',
      type: 'data'
    },
    {
      id: 4,
      activity: 'Jadwal pelajaran semester genap telah diupdate',
      teacher: 'Wakil Kepala Sekolah',
      time: '2 jam yang lalu',
      type: 'schedule'
    }
  ];

  const getRoleSpecificMessage = () => {
    switch (user?.role) {
      case 'admin':
        return {
          title: 'Dashboard Administrator',
          description: 'Kelola seluruh sistem dan monitor aktivitas sekolah'
        };
      case 'teacher':
        return {
          title: 'Dashboard Guru',
          description: 'Input absensi dan kelola data kelas Anda'
        };
      case 'homeroom':
        return {
          title: 'Dashboard Wali Kelas',
          description: 'Monitor kehadiran siswa di kelas yang Anda bimbing'
        };
      case 'principal':
        return {
          title: 'Dashboard Kepala Sekolah',
          description: 'Overview statistik dan kinerja sekolah secara keseluruhan'
        };
      default:
        return {
          title: 'Dashboard',
          description: 'Selamat datang di sistem absensi digital'
        };
    }
  };

  const roleMessage = getRoleSpecificMessage();

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              {roleMessage.title}
            </h1>
            <p className="text-muted-foreground">
              {roleMessage.description}
            </p>
          </div>
          <Badge variant="secondary" className="text-sm">
            {new Date().toLocaleDateString('id-ID', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </Badge>
        </div>
      </motion.div>

      {/* Welcome Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-200 dark:border-green-800">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Selamat datang, {user?.name}!
                </h3>
                <p className="text-muted-foreground">
                  Semoga hari Anda menyenangkan. Mari mulai mengelola kehadiran siswa.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
                <div className="mt-4 flex items-center space-x-2">
                  <TrendingUp className={`h-4 w-4 ${
                    stat.changeType === 'increase' ? 'text-green-600' :
                    stat.changeType === 'decrease' ? 'text-red-600' :
                    'text-gray-600'
                  }`} />
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'increase' ? 'text-green-600' :
                    stat.changeType === 'decrease' ? 'text-red-600' :
                    'text-gray-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    dari kemarin
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Recent Activities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Aktivitas Terbaru</span>
            </CardTitle>
            <CardDescription>
              Pantau aktivitas terbaru dalam sistem
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors"
                >
                  <div className={`p-2 rounded-full ${
                    activity.type === 'attendance' ? 'bg-green-100 dark:bg-green-900/20' :
                    activity.type === 'report' ? 'bg-blue-100 dark:bg-blue-900/20' :
                    activity.type === 'data' ? 'bg-purple-100 dark:bg-purple-900/20' :
                    'bg-orange-100 dark:bg-orange-900/20'
                  }`}>
                    {activity.type === 'attendance' && <UserCheck className="h-4 w-4 text-green-600" />}
                    {activity.type === 'report' && <BookOpen className="h-4 w-4 text-blue-600" />}
                    {activity.type === 'data' && <Users className="h-4 w-4 text-purple-600" />}
                    {activity.type === 'schedule' && <Calendar className="h-4 w-4 text-orange-600" />}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">
                      {activity.activity}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      oleh {activity.teacher}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {activity.time}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}