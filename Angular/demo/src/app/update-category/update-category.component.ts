import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from 'src/models/category';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {

  id!: number

  constructor(private categoryService: CategoryService) { }

  @Input() updateCategoryForm!: FormGroup
  @Output() onSubmit = new EventEmitter()
  @Output() getId = new EventEmitter()

  categories!: any;

  selectedCategory!: Category


  ngOnInit(): void {
     this.categories = this.categoryService.getAll()
     //this.categoryService.getAll().subscribe(res => console.log(res))
    this.categoryService.getAll().subscribe(
      categoryList => this.categories = categoryList
    )
  }

  onChange(value: string){
    console.log(parseInt(value))
    this.categoryService.getById(parseInt(value)).subscribe(result => this.selectedCategory = result)
  }

}
