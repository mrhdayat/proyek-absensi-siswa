export interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  role: 'admin' | 'teacher' | 'homeroom' | 'principal';
  avatar?: string;
  createdAt: string;
}

export interface Student {
  id: string;
  nis: string;
  name: string;
  classId: string;
  className?: string;
  gender: 'male' | 'female';
  birthDate: string;
  address: string;
  phone?: string;
  parentPhone: string;
  createdAt: string;
}

export interface Teacher {
  id: string;
  nip: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  subjects: string[];
  isHomeroom: boolean;
  homeroomClass?: string;
  createdAt: string;
}

export interface Class {
  id: string;
  name: string;
  level: '10' | '11' | '12';
  major: string;
  homeroomTeacherId?: string;
  homeroomTeacherName?: string;
  studentCount: number;
  createdAt: string;
}

export interface Subject {
  id: string;
  code: string;
  name: string;
  description?: string;
  createdAt: string;
}

export interface Schedule {
  id: string;
  classId: string;
  className?: string;
  subjectId: string;
  subjectName?: string;
  teacherId: string;
  teacherName?: string;
  dayOfWeek: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';
  startTime: string;
  endTime: string;
  academicYear: string;
  semester: '1' | '2';
  isActive: boolean;
  createdAt: string;
}

export interface Attendance {
  id: string;
  scheduleId: string;
  studentId: string;
  studentName?: string;
  date: string;
  status: 'present' | 'late' | 'absent' | 'sick' | 'permission';
  notes?: string;
  markedAt: string;
  markedBy: string;
  teacherName?: string;
}

export interface AttendanceStats {
  totalStudents: number;
  presentCount: number;
  lateCount: number;
  absentCount: number;
  sickCount: number;
  permissionCount: number;
  attendanceRate: number;
}

export interface DashboardStats {
  totalStudents: number;
  totalTeachers: number;
  totalClasses: number;
  todayAttendance: AttendanceStats;
  weeklyStats: AttendanceStats[];
  monthlyStats: AttendanceStats[];
}