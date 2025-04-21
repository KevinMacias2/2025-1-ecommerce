import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { CartItem } from '../models/cart-item';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderKey = 'candy-orders';
  private currentOrderKey = 'candy-current-order';

  constructor(private cartService: CartService) { }

  createOrder(customerDetails: {
    customerName: string;
    email: string;
    address: string;
    phone: string;
  }, items: CartItem[], total: number): Order {
    const order: Order = {
      id: this.generateOrderId(),
      items: [...items],
      customerName: customerDetails.customerName,
      email: customerDetails.email,
      address: customerDetails.address,
      phone: customerDetails.phone,
      total: total,
      date: new Date()
    };

    this.saveCurrentOrder(order);
    this.saveOrder(order);
    this.cartService.clearCart();

    return order;
  }

  private generateOrderId(): string {
    return 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  }

  private saveOrder(order: Order): void {
    const orders = this.getOrders();
    orders.push(order);
    localStorage.setItem(this.orderKey, JSON.stringify(orders));
  }

  getOrders(): Order[] {
    const ordersData = localStorage.getItem(this.orderKey);
    return ordersData ? JSON.parse(ordersData) : [];
  }

  saveCurrentOrder(order: Order): void {
    localStorage.setItem(this.currentOrderKey, JSON.stringify(order));
  }

  getCurrentOrder(): Order | null {
    const orderData = localStorage.getItem(this.currentOrderKey);
    return orderData ? JSON.parse(orderData) : null;
  }

  clearCurrentOrder(): void {
    localStorage.removeItem(this.currentOrderKey);
  }
}