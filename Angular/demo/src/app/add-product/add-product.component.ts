import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from 'src/models/category';
import { CategoryService } from 'src/services/category.service';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(private productService: ProductService,private categorySerice: CategoryService,private formBuilder:FormBuilder) { }

  @Input() addProductForm !: FormGroup

  @Output() notify = new EventEmitter();

  categories !: Observable<Category[]>

  ngOnInit(): void {
    this.categories = this.categorySerice.getAll()
  }

}
