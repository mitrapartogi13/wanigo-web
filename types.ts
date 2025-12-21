export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  instagram?: string;
  category: 'leader' | 'executive';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'web' | 'mobile' | 'branding';
  description: string;
  imageUrl: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}

export enum PageRoute {
  HOME = '/',
  ABOUT = '/about',
  MEMBERS = '/members',
  GALLERY = '/gallery',
  CONTACT = '/contact'
}