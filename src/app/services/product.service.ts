import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Picafresas',
      description: 'Gomitas suaves con forma de fresa, cubiertas de chile en polvo, ofreciendo un equilibrio entre dulce, ácido y picante',
      price: 1.50,
      imageUrl: 'assets/picafresas.webp',
      category: 'Gomitas',
      stock: 15
    },
    {
      id: 2,
      name: 'Cerezitas Karla',
      description: 'Gomitas con forma de cereza, de textura suave y sabor dulce a cereza y centro picosito', 
      price: 1.50,
      imageUrl: 'assets/karlas.webp',
      category: 'Gomitas',
      stock: 20
    },
    {
      id: 3,
      name: 'Aciduladitos',
      description: 'Caramelos duros con un intenso sabor ácido y frutal, ideales para quienes disfrutan de sensaciones fuertes',
      price: 1.00,
      imageUrl: 'assets/aciduladitos.jpg',
      category: 'Dulce Suave',
      stock: 50
    },
    {
      id: 4,
      name: 'Tamborines',
      description: 'Caramelos duros y redondos con un intenso sabor a tamarindo, populares en México.',
      price: 1.50,
      imageUrl: 'assets/tamborcitos.webp',
      category: 'Dulce Suave',
      stock: 50
    },
    {
      id: 5,
      name: 'ICEE',
      description: ' Caramelos masticables con sabor a frutas, suaves y deliciosos, que se deshacen lentamente en la boca',
      price: 5.00,
      imageUrl: 'assets/icee.webp',
      category: 'Dulce Suave',
      stock: 12
    },
    {
      id: 6,
      name: 'Jolly Rancher',
      description: 'Caramelos duros con sabores frutales intensos y duraderos, conocidos por su variedad de sabores',
      price: 11.00,
      imageUrl: 'assets/jollyRancher.jpeg',
      category: 'Dulce Masizo',
      stock: 8
    },
    {
      id: 7,
      name: 'Frutaffy',
      description: 'Dulce suave con gran variedad de sabores frutales',
      price: 2.00,
      imageUrl: 'assets/fruttafy.webp',
      category: 'Dulce Suave',
      stock: 10
    },
    {
      id: 8,
      name: 'Zumba Gomas',
      description: 'Gomitas masticables con formas variadas y sabores frutales, con una textura suave y divertida',
      price: 5.00,
      imageUrl: 'assets/zumbagomas.jpg',
      category: 'Gomitas',
      stock: 30
    },

    {
      id: 9,
      name: 'Chocolates Carlos V',
      description: 'Clásico chocolate con leche mexicano, conocido por su sabor suave y cremoso.',
      price: 4.00,
      imageUrl: 'assets/chocolates.webp',
      category: 'Chocolates',
      stock: 30
    },

    {
      id: 10,
      name: 'Chocolates Crunch',
      description: 'Barras de chocolate con leche que contienen trozos crujientes de arroz inflado, aportando una textura única.',
      price: 4.00,
      imageUrl: 'assets/crunch.webp',
      category: 'Chocolates',
      stock: 30
    },

    {
      id: 11,
      name: 'Wafer Sticks Chocolate',
      description: ' Barquillos crujientes rellenos de crema dulce, disponibles en varios sabores, como chocolate, vainilla y fresa',
      price: 1.00,
      imageUrl: 'assets/wafer.jpg',
      category: 'Chocolates',
      stock: 30
    },

    {
      id: 12,
      name: 'Paletas de Tarritos',
      description: 'Paletas de caramelo duro con forma de tarro de cerveza, rellenas de polvo acidito y sabor piña',
      price: 3.00,
      imageUrl: 'assets/paleta.webp',
      category: 'Paletas',
      stock: 30
    },

    {
      id: 13,
      name: 'Chicles Orbit',
      description: 'Goma de mascar sin azúcar, disponible en diversos sabores, conocida por su capacidad para refrescar el aliento',
      price: 3.00,
      imageUrl: 'assets/orbit.png',
      category: 'Chicles',
      stock: 30
    },

    {
      id: 14,
      name: 'Cacahuates',
      description: 'Bolsita de cacahuates de diferentes sabores como habanero, queso y flamin hot',
      price: 15.00,
      imageUrl: 'assets/cacahuates.webp',
      category: 'Cacahuates',
      stock: 30
    },

    {
      id: 15,
      name: 'Galletas Gamesa ',
      description: 'Galletas Dulces,con amplia variedad de marcas',
      price: 7.00,
      imageUrl: 'assets/galletas.webp',
      category: 'Galletas',
      stock: 30
    },













  ];

  constructor() { }

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}