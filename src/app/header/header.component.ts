import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  itemCount = 0;

  constructor(private cartService:CartService) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe(cart => {
      this.itemCount = this.cartService.getItemCount();
    });
  }

}

