export interface Inquiry {
  id: number;
  name: string;
  phone: string;
  spaceType: string;
  size: number;
  wallpaper: string;
  flooring: string;
  status: string;
  createdAt: string;
  message: string;
}

export interface ConsultingPreferences {
  spaceType: string;
  size: number;
  wallpaper: 'silk' | 'paper';
  flooring: 'basic' | 'thick' | 'decotile';
  taste: string;
  budget: string;
}
