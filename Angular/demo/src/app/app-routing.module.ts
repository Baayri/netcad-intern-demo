import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDashboardComponent } from './category-dashboard/category-dashboard.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsByCategoryComponent } from './products-by-category/products-by-category.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: "products", component: ProductsComponent},
  {path: "products/:productId", component: ProductDetailsComponent},
  {path: "productDashboard", component: ProductDashboardComponent},
  {path: "categories", component: CategoriesComponent},
  {path: "categories/:categoryId", component: ProductsByCategoryComponent},
  {path: "categoryDashboard", component: CategoryDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
