import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  CheckCircle,
  Clock,
  Users,
  BarChart3,
  Shield,
  Smartphone,
  ArrowRight,
  Star,
  BookOpen,
  Award,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export function LandingPage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Clock,
      title: 'Absensi Real-time',
      description: 'Pencatatan kehadiran siswa secara langsung sesuai jadwal pelajaran yang aktif.',
      color: 'text-green-500'
    },
    {
      icon: Users,
      title: 'Multi-Role Access',
      description: 'Akses berbeda untuk Admin, Guru, Wali Kelas, dan Kepala Sekolah sesuai kebutuhan.',
      color: 'text-blue-500'
    },
    {
      icon: BarChart3,
      title: 'Laporan & Statistik',
      description: 'Dashboard analitik dengan grafik dan laporan kehadiran yang komprehensif.',
      color: 'text-purple-500'
    },
    {
      icon: Shield,
      title: 'Keamanan Terjamin',
      description: 'Sistem autentikasi JWT dengan enkripsi data untuk menjaga privasi informasi.',
      color: 'text-red-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Tampilan responsif yang optimal di semua perangkat, dari mobile hingga desktop.',
      color: 'text-indigo-500'
    },
    {
      icon: Zap,
      title: 'Performa Cepat',
      description: 'Loading yang cepat dengan teknologi modern untuk pengalaman pengguna terbaik.',
      color: 'text-yellow-500'
    }
  ];

  const stats = [
    { label: 'Total Siswa', value: '1,250+', icon: Users },
    { label: 'Guru & Staff', value: '75+', icon: BookOpen },
    { label: 'Tingkat Kehadiran', value: '94%', icon: CheckCircle },
    { label: 'Penghargaan', value: '15+', icon: Award }
  ];

  const roles = [
    {
      title: 'Administrator',
      description: 'Kelola seluruh data sistem, pengguna, dan konfigurasi aplikasi',
      features: ['Manajemen Data Master', 'Kelola Pengguna', 'Konfigurasi Sistem', 'Laporan Lengkap'],
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Guru Mata Pelajaran',
      description: 'Input absensi siswa sesuai jadwal mengajar dan mata pelajaran',
      features: ['Input Absensi', 'Jadwal Mengajar', 'Rekap Kelas', 'Catatan Siswa'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Wali Kelas',
      description: 'Monitor kehadiran siswa dalam kelas yang diasuh',
      features: ['Monitor Kelas', 'Rekap Bulanan', 'Export Laporan', 'Komunikasi Ortu'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Kepala Sekolah',
      description: 'Dashboard eksekutif dengan overview statistik sekolah',
      features: ['Dashboard Eksekutif', 'Statistik Sekolah', 'Trend Analysis', 'Broadcast Info'],
      color: 'from-purple-500 to-violet-500'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section id="beranda" className="relative pt-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
                🎓 Sistem Absensi Digital Terdepan
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ABSENSI DIGITAL
                </span>
                <br />
                <span className="text-foreground">SMK Muhammadiyah Satui</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl mx-auto text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              Revolusi sistem kehadiran sekolah dengan teknologi modern. Tingkatkan efisiensi, 
              akurasi, dan transparansi dalam pencatatan kehadiran siswa dengan platform digital 
              yang user-friendly dan terintegrasi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                onClick={() => navigate('/login')}
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-lg px-8 py-4 h-auto"
              >
                Mulai Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('tentang')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg px-8 py-4 h-auto"
              >
                Pelajari Lebih Lanjut
              </Button>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="mb-4">Tentang Sistem</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Transformasi Digital untuk 
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Pendidikan Modern</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Sistem Absensi Digital SMK Muhammadiyah Satui hadir sebagai solusi modern 
                menggantikan sistem manual yang memakan waktu dan rentan kesalahan. Dengan 
                teknologi web terdepan, kami menyediakan platform yang memungkinkan seluruh 
                stakeholder sekolah untuk berkolaborasi dalam menciptakan lingkungan belajar 
                yang lebih efisien dan terorganisir.
              </p>
              
              <div className="space-y-4">
                {[
                  'Interface yang intuitif dan mudah digunakan',
                  'Data real-time dan sinkronisasi otomatis', 
                  'Laporan komprehensif dengan visualisasi data',
                  'Keamanan tingkat enterprise dengan enkripsi'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-green-500/20 to-blue-600/20 rounded-3xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Uptime', value: '99.9%' },
                    { label: 'Response Time', value: '<100ms' },
                    { label: 'Data Accuracy', value: '99.8%' },
                    { label: 'User Satisfaction', value: '4.9/5' }
                  ].map((metric, index) => (
                    <div key={index} className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fitur" className="py-20 lg:py-32 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">Fitur Unggulan</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Fitur Lengkap untuk 
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Semua Kebutuhan</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Dilengkapi dengan berbagai fitur canggih yang dirancang khusus untuk 
              memenuhi kebutuhan sistem absensi sekolah modern.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.color} bg-current/10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">Akses Multi-Role</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Dashboard Khusus untuk 
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Setiap Peran</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Setiap pengguna mendapatkan akses dan tampilan yang sesuai dengan 
              peran dan tanggung jawab mereka di sekolah.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <CardHeader className="relative">
                    <CardTitle className="text-xl font-bold">{role.title}</CardTitle>
                    <CardDescription className="text-base">
                      {role.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative">
                    <ul className="space-y-3">
                      {role.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <Star className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button
                      className="w-full mt-6 group-hover:shadow-md transition-shadow duration-300"
                      variant="outline"
                      onClick={() => navigate('/login')}
                    >
                      Akses {role.title}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Siap Menggunakan Sistem Absensi Digital?
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Bergabunglah dengan revolusi digital dalam dunia pendidikan. 
              Mulai gunakan sistem absensi modern yang akan mengubah cara 
              sekolah mengelola kehadiran siswa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => navigate('/login')}
                className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-4 h-auto font-medium"
              >
                Mulai Gratis Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-4 h-auto"
              >
                Hubungi Tim Kami
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}