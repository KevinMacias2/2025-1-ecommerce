import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    
    // Actualiza el stock del producto 
    const updatedProduct = this.products.find(p => p.id === product.id);
    if (updatedProduct && updatedProduct.stock > 0) {
      updatedProduct.stock -= 1;
    }
  }

}
