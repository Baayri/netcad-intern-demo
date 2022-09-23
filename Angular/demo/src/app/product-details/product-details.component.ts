import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/models/product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product!: Product

  products !: Observable<Product[]>;

  constructor(private route: ActivatedRoute, private productService: ProductService,private router:Router,private cdf: ChangeDetectorRef) { }

  ngOnInit(): void {

    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.productService.getById(productIdFromRoute).subscribe(result => this.product = result);
  }

  deleteProduct(id: number){
     this.productService.delete(id).subscribe(res => {
      this.router.navigate(['products'])
     })

  //   this.router.navigate(['products'], { skipLocationChange: true }).then(() => {
  //     this.router.navigate(['Your actualComponent']);
  // });
  }

}
