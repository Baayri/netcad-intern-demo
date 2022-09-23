import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-category-dashboard',
  templateUrl: './category-dashboard.component.html',
  styleUrls: ['./category-dashboard.component.scss']
})
export class CategoryDashboardComponent implements OnInit {

  id!: number

  getId(id: string){
    this.id = parseInt(id)
  }

  constructor(private formBuilder:FormBuilder, private categoryService: CategoryService) { }

  addCategoryForm = this.formBuilder.group({
    categoryName: []
  })

  updateCategoryForm = this.formBuilder.group({
    categoryName: []
  })

  addEvent(){
    this.categoryService.add(this.addCategoryForm.value)
    this.addCategoryForm.reset()
  }

  updateEvent(){
    this.categoryService.update(this.id,this.updateCategoryForm.value)
    this.updateCategoryForm.reset()
  }

  ngOnInit(): void {
  }

}
