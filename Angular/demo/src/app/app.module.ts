import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './categories/categories.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsByCategoryComponent } from './products-by-category/products-by-category.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { CategoryDashboardComponent } from './category-dashboard/category-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductsComponent,
    CategoriesComponent,
    AddCategoryComponent,
    AddProductComponent,
    ProductDetailsComponent,
    ProductsByCategoryComponent,
    UpdateProductComponent,
    ProductDashboardComponent,
    UpdateCategoryComponent,
    CategoryDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
