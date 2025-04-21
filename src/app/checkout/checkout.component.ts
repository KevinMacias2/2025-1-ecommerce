import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';
import { CartItem } from '../models/cart-item';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-checkout',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit{
  cartItems: CartItem[] = [];
  total = 0;
  
  customerDetails = {
    customerName: '',
    email: '',
    phone: '',
    address: ''
  };

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe(items => {
      this.cartItems = items;
      this.total = this.cartService.getTotal();
      
      // Redireccionar si el carrito está vacío
      if (this.cartItems.length === 0) {
        this.router.navigate(['/productos']);
      }
    });
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.orderService.createOrder(
        this.customerDetails,
        this.cartItems,
        this.total
      );
      
      this.router.navigate(['/confirmacion']);
    }
  }

}
