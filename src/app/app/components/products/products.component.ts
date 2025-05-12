import { Component, OnInit, signal } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from './producCard/product-card.component';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-products',
  imports: [ProductCardComponent, CommonModule, MatProgressSpinnerModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  loading = signal(false);
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loading.set(true);
    this.productService.getProducts().subscribe((response) => {
      this.products = response.products;
    });
    this.loading.set(false);
  }
}
