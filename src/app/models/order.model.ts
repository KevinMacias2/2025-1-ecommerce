import { CartItem } from "./cart-item";

export interface Order {
    id: string;
    items: CartItem[];
    customerName: string;
    email: string;
    address: string;
    phone: string;
    total: number;
    date: Date;
  }