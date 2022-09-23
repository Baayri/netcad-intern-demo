import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Product[]>("http://localhost:8080/api/products/getAll")
  }

  getById(id: number){
    return this.http.get<Product>("http://localhost:8080/api/products/getById?id="+ id)
  }

  getByCategoryId(id:number){
    return this.http.get<Product[]>("http://localhost:8080/api/products/getByCategoryId?id="+ id)
  }

  add(value: Object){
    this.http.post("http://localhost:8080/api/products/add",value).subscribe((result)=>{
      console.log(JSON.stringify(result))
    })
  }

  update(id:number, value:Object){
    this.http.post("http://localhost:8080/api/products/update?id="+id,value).subscribe((result)=>{
      console.log(JSON.stringify(result))
    })
  }

  delete(id: number){
    return this.http.delete("http://localhost:8080/api/products/delete?id="+id)
  }
}

