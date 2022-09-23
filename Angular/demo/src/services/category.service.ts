import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Category[]>("http://localhost:8080/api/categories/getAll")
  }

  getById(id: number){
    return this.http.get<Category>("http://localhost:8080/api/categories/getById?id=" + id)
  }

  add(value: Object){
    this.http.post("http://localhost:8080/api/categories/add",value).subscribe((result)=>{
      console.log(JSON.stringify(result))
    })
  }

  update(id: number,value:Object){
    this.http.post("http://localhost:8080/api/categories/update?id=" + id,value).subscribe((result)=>{
      console.log(JSON.stringify(result))
    })
  }

  delete(id: number){
    return this.http.delete("http://localhost:8080/api/categories/delete?id=" + id);
  }
}
