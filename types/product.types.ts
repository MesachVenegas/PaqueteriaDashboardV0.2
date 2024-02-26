export interface ProductProps {
  id: string;
  name: string;
  description: string;
  delivery_type: 'land' | 'air';
  cost: number;
  created_at: Date;
  updated_at: Date;
}