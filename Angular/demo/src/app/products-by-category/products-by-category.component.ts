import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/models/product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.scss']
})
export class ProductsByCategoryComponent implements OnInit {

  products!: Product[]

  constructor(private route:ActivatedRoute,private productService: ProductService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const categoryId = Number(routeParams.get('categoryId'));

    this.productService.getByCategoryId(categoryId).subscribe(result => this.products = result)
  }

}
