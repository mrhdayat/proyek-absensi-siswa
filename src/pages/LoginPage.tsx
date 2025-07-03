import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, GraduationCap, Eye, EyeOff, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useAuthStore } from '@/store/authStore';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuthStore();
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || '/dashboard';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login({ username, password });
      toast({
        title: 'Login Berhasil',
        description: 'Selamat datang di sistem absensi digital!',
      });
      navigate(from, { replace: true });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Login Gagal',
        description: 'Username atau password salah. Silakan coba lagi.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const demoAccounts = [
    { role: 'Admin', username: 'admin', description: 'Kelola seluruh sistem' },
    { role: 'Guru', username: 'guru1', description: 'Input absensi siswa' },
    { role: 'Wali Kelas', username: 'wali1', description: 'Monitor kelas' },
    { role: 'Kepala Sekolah', username: 'kepsek', description: 'Dashboard eksekutif' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute top-4 left-4"
      >
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali
        </Button>
      </motion.div>

      {/* Theme Toggle */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start space-x-3">
            <div className="p-3 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl">
              <GraduationCap className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">SMK Muhammadiyah Satui</h1>
              <p className="text-muted-foreground">Sistem Absensi Digital</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Selamat Datang di
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                {' '}Portal Digital
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Masuk ke sistem absensi digital untuk mengakses dashboard sesuai 
              dengan peran Anda di sekolah. Sistem yang aman, cepat, dan mudah digunakan.
            </p>
          </div>

          {/* Demo Accounts */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Akun Demo Tersedia:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {demoAccounts.map((account, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <Badge variant="secondary" className="mb-1">{account.role}</Badge>
                      <p className="text-sm font-mono">{account.username}</p>
                      <p className="text-xs text-muted-foreground">{account.description}</p>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => {
                        setUsername(account.username);
                        setPassword('password123');
                      }}
                      className="text-xs"
                    >
                      Gunakan
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Password untuk semua akun demo: <code className="bg-muted px-2 py-1 rounded">password123</code>
            </p>
          </div>
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <Card className="w-full max-w-md bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Masuk</CardTitle>
              <CardDescription className="text-center">
                Masukkan username dan password Anda
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Masukkan username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Masukkan password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="h-11 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-11 w-11"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-11 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Memproses...
                    </>
                  ) : (
                    <>
                      <LogIn className="h-4 w-4 mr-2" />
                      Masuk
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                <p>Butuh bantuan? Hubungi administrator sekolah</p>
                <p className="mt-1 font-medium">admin@smkmuhsatui.sch.id</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}