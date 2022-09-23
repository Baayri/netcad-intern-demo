import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from 'src/models/category';
import { Product } from 'src/models/product';
import { CategoryService } from 'src/services/category.service';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  constructor(private productService: ProductService,private categorySerice: CategoryService,private formBuilder:FormBuilder) { }

  @Input() updateProductForm !: FormGroup

  @Output() updateProductNotify = new EventEmitter

  @Output() idNotify = new EventEmitter

  addId(value: string) {
    this.idNotify.emit(value);
  }

  categories !: Observable<Category[]>
  products !: Observable<Product[]>

  selectedProduct!:Product


  ngOnInit(): void {
    this.categories = this.categorySerice.getAll()
    this.products = this.productService.getAll()
  }

  onChange(value:string){
    this.productService.getById(parseInt(value)).subscribe(result => this.selectedProduct = result)
  }

}
