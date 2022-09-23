import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {

  id!: number

  addId(id: string) {
    this.id = parseInt(id)
  }

    addProductForm = this.formBuilder.group({
    productName: [null],
    unitPrice: [null],
    unitsInStock: [null],
    category: this.formBuilder.group({
      id: [null],
    }),
  })

  updateProductForm = this.formBuilder.group({
    productName: [null],
    unitPrice: [null],
    unitsInStock: [null],
    category: this.formBuilder.group({
      id: [null],
    }),
  })

  onSubmitForAdd(){
    //window.alert(JSON.stringify(this.addProductForm.value))
    this.productService.add(this.addProductForm.value)
    this.addProductForm.reset()
  }

  onSubmitForUpdate(){
    //console.log(this.id)
    //window.alert(JSON.stringify(this.updateProductForm.value))
    this.productService.update(this.id,this.updateProductForm.value)
    this.updateProductForm.reset()
  }

  constructor(private formBuilder: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {
  }

}
