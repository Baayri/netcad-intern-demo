import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products !: Observable<Product[]>;

  constructor(private productService: ProductService, private cdr: ChangeDetectorRef) {
  }



  ngOnInit(): void {
    this.products = this.productService.getAll()
  }
}
