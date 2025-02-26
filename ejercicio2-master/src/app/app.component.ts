import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { producto } from './interfaces/product.interface';
import { NgFor } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  imports: [ProductListComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
