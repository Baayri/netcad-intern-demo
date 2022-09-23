package com.example.demo.api.controller;

import com.example.demo.bussines.abstracts.ProductService;
import com.example.demo.entities.concretes.Product;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/products/")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping("add")
    public ResponseEntity<Product> add(@RequestBody Product product){
        return this.productService.add(product);
    }

    @GetMapping("getAll")
    public ResponseEntity<List<Product>> getAll(){
        return this.productService.getAll();
    }

    @PostMapping("update")
    public ResponseEntity<Product> update(@RequestParam int id,@RequestBody Product product){
        return this.productService.update(id,product);
    }

    @DeleteMapping("delete")
    public ResponseEntity<Product> delete(@RequestParam int id){
        return this.productService.delete(id);
    }

    @GetMapping("getById")
    public ResponseEntity<Product> getById(@RequestParam int id){
        return this.productService.getById(id);
    }

    @GetMapping("getByCategoryId")
    public ResponseEntity<List<Product>> getByCategoryId(@RequestParam int id){
        return this.productService.getByCategoryId(id);
    }
}
