import { TeamMember, GalleryItem, StatItem } from './types';
import { Smartphone, Building2, Cpu, Users, Handshake, ShieldCheck } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Members', path: '/members' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contacts', path: '/contact' },
];

export const SERVICES = [
  {
    icon: Smartphone,
    title: 'WANIGO NASABAH',
    description: 'Aplikasi mobile intuitif untuk request penjemputan sampah terpilah, tracking real-time, dan sistem redeem poin yang menguntungkan.'
  },
  {
    icon: Building2,
    title: 'WANIGO BANK SAMPAH',
    description: 'Dashboard manajemen komprehensif untuk BSU, dilengkapi fitur optimasi rute penjemputan dan laporan digital otomatis.'
  },
  {
    icon: Cpu,
    title: 'AI OPTIMIZATION',
    description: 'Sistem cerdas berbasis Artificial Intelligence untuk prediksi volume sampah dan penentuan rute kurir yang paling efisien dan hemat biaya.'
  }
];

export const VALUES = [
  {
    icon: Users,
    title: 'Tim Ahli',
    description: 'Didukung oleh profesional di bidang teknologi, lingkungan, dan manajemen logistik yang berdedikasi.'
  },
  {
    icon: Handshake,
    title: 'Kolaboratif',
    description: 'Bermitra erat dengan pemerintah lokal, komunitas, dan industri daur ulang untuk dampak maksimal.'
  },
  {
    icon: ShieldCheck,
    title: 'Kualitas Terjamin',
    description: 'Platform yang andal, aman, dan terus dikembangkan berdasarkan data akurat dan umpan balik pengguna.'
  }
];

export const STATS: StatItem[] = [
  { label: 'Bank Sampah Mitra', value: 100, suffix: '+' },
  { label: 'Kecamatan Terjangkau', value: 50, suffix: '+' },
  { label: 'Ton Sampah Terkelola', value: 10, suffix: ' Ton' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Akthar Ibrahim',
    role: 'CEO & Founder',
    category: 'leader',
    image: 'https://picsum.photos/400/400?random=1',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  },
  {
    id: '2',
    name: 'Putu Gde Ariastita, S.T., M.T.',
    role: 'Advisor',
    category: 'leader',
    image: 'https://picsum.photos/400/400?random=2'
  },
  {
    id: '3',
    name: 'Kayla Riza Putri Irjayanto',
    role: 'Chief Operating Officer (COO)',
    category: 'executive',
    image: 'https://picsum.photos/400/400?random=3',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  },
  {
    id: '4',
    name: 'Nathanael Oliver A. Y.',
    role: 'Chief Technology Officer (CTO)',
    category: 'executive',
    image: 'https://picsum.photos/400/400?random=4',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  },
  {
    id: '5',
    name: 'Mitra Partogi',
    role: 'Chief Product Officer (CPO)',
    category: 'executive',
    image: 'https://picsum.photos/400/400?random=5',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  },
  {
    id: '6',
    name: 'Tavasya Alia Anjani',
    role: 'Chief Marketing Officer (CMO)',
    category: 'executive',
    image: 'https://picsum.photos/400/400?random=6',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Aplikasi Mobile Nasabah',
    category: 'mobile',
    description: 'Desain UI/UX modern untuk kemudahan pengguna.',
    imageUrl: 'https://picsum.photos/600/400?random=10'
  },
  {
    id: 'g2',
    title: 'Dashboard Admin BSU',
    category: 'web',
    description: 'Platform manajemen operasional bank sampah.',
    imageUrl: 'https://picsum.photos/600/400?random=11'
  },
  {
    id: 'g3',
    title: 'Branding Kit WANIGO!',
    category: 'branding',
    description: 'Identitas visual yang ramah lingkungan.',
    imageUrl: 'https://picsum.photos/600/400?random=12'
  },
  {
    id: 'g4',
    title: 'Aplikasi Mobile Kurir',
    category: 'mobile',
    description: 'Fitur optimasi rute dan bukti penjemputan.',
    imageUrl: 'https://picsum.photos/600/400?random=13'
  },
  {
    id: 'g5',
    title: 'Landing Page v1',
    category: 'web',
    description: 'Desain awal landing page korporasi.',
    imageUrl: 'https://picsum.photos/600/400?random=14'
  }
];

export const IMPACT_DATA = [
  { name: 'Jan', tons: 2.5 },
  { name: 'Feb', tons: 3.2 },
  { name: 'Mar', tons: 4.1 },
  { name: 'Apr', tons: 5.8 },
  { name: 'May', tons: 7.2 },
  { name: 'Jun', tons: 10.0 },
];