import { motion } from 'framer-motion';
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Globe
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">SMK Muhammadiyah Satui</h3>
                <p className="text-gray-400">Sekolah Menengah Kejuruan</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              SMK Muhammadiyah Satui adalah institusi pendidikan kejuruan yang berkomitmen 
              mencetak lulusan yang kompeten, berakhlak mulia, dan siap bersaing di era digital. 
              Dengan sistem absensi digital modern, kami terus berinovasi untuk memberikan 
              pelayanan terbaik bagi siswa, guru, dan orang tua.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Jl. Pendidikan No. 123<br />
                    Satui, Tanah Bumbu<br />
                    Kalimantan Selatan 72271
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <p className="text-gray-300">(0518) 123-4567</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <p className="text-gray-300">info@smkmuhsatui.sch.id</p>
              </div>
            </div>
          </motion.div>

          {/* Operating Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4">Jam Operasional</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-green-400" />
                <div>
                  <p className="text-gray-300 font-medium">Senin - Jumat</p>
                  <p className="text-gray-400 text-sm">07:00 - 16:00 WIB</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-green-400" />
                <div>
                  <p className="text-gray-300 font-medium">Sabtu</p>
                  <p className="text-gray-400 text-sm">07:00 - 12:00 WIB</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-red-400" />
                <div>
                  <p className="text-gray-300 font-medium">Minggu</p>
                  <p className="text-gray-400 text-sm">Tutup</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-700 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">
            © {currentYear} SMK Muhammadiyah Satui. Hak Cipta Dilindungi.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Dikembangkan dengan ❤️ untuk masa depan pendidikan yang lebih baik
          </p>
        </motion.div>
      </div>
    </footer>
  );
}