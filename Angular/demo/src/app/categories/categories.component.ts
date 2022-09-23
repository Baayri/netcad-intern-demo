import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from 'src/models/category';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories !: Observable<Category[]>

  constructor(private categoryService: CategoryService, private router:Router) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  onDelete(id: number){
    this.categoryService.delete(id).subscribe(
      res => {
        this.loadCategories();
      }
    )
//   this.router.navigate([''], { skipLocationChange: true }).then(() => {
//     this.router.navigate(['categories']);
// });
  }

  loadCategories() {
    this.categories = this.categoryService.getAll();
  }
}
