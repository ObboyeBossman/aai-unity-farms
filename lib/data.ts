import { MEDIA } from './media';

export interface Product {
  id: string;
  name: string;
  category: 'Eggs' | 'Poultry' | 'Feeds' | 'Ghanaian Foods';
  price: number | null;
  unit: string;
  image: string;
}

export const products: Product[] = [
  { id: 'fresh-eggs', name: 'Fresh Eggs', category: 'Eggs', price: 25, unit: 'tray (30 eggs)', image: MEDIA.freshEggs },
  { id: 'crate-eggs', name: 'Crate of Eggs', category: 'Eggs', price: null, unit: 'crate', image: MEDIA.crateEggs },
  { id: 'live-broiler', name: 'Live Broiler Chickens', category: 'Poultry', price: 45, unit: 'bird', image: MEDIA.broilerChicken },
  { id: 'dressed-broiler', name: 'Dressed Broiler Chickens', category: 'Poultry', price: 60, unit: 'bird', image: MEDIA.dressedChicken },
  { id: 'layer-chickens', name: 'Layer Chickens', category: 'Poultry', price: 35, unit: 'bird', image: MEDIA.layerChickens },
  { id: 'day-old-chicks', name: 'Day-Old Chicks', category: 'Poultry', price: 8, unit: 'chick', image: MEDIA.dayOldChicks },
  { id: 'layer-starter', name: 'Layer Starter Feed', category: 'Feeds', price: 180, unit: '50kg bag', image: MEDIA.layerStarter },
  { id: 'broiler-starter', name: 'Broiler Starter Feed', category: 'Feeds', price: 195, unit: '50kg bag', image: MEDIA.broilerStarter },
  { id: 'grower-mash', name: 'Grower Mash', category: 'Feeds', price: 170, unit: '50kg bag', image: MEDIA.growerMash },
  { id: 'ghanaian-yam', name: 'Premium Ghanaian Yams', category: 'Ghanaian Foods', price: null, unit: 'tuber/bulk', image: MEDIA.ghanaianYam },
  { id: 'sweet-corn', name: 'Sweet Corn', category: 'Ghanaian Foods', price: null, unit: 'bulk', image: MEDIA.sweetCorn },
  { id: 'soybeans', name: 'Soybeans', category: 'Ghanaian Foods', price: null, unit: 'bulk', image: MEDIA.soybeans },
];
