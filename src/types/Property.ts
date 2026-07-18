export interface Property {
  slug: string;
  name: string;

  neighborhood: string;
  location: string;

  price: string;
  delivery: string;

  bedrooms?: number;
  bathrooms?: number;
  garages?: number;
  area?: string;

  category?: string;
  builder?: string;

  investmentScore?: number;
  investmentTag?: string;

  description: string;

  cover: string;
  images: string[];
}