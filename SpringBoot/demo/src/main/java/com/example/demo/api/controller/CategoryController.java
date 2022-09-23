package com.example.demo.api.controller;

import com.example.demo.bussines.abstracts.CategoryService;
import com.example.demo.entities.concretes.Category;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/categories")
public class CategoryController {
    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @PostMapping("add")
    public ResponseEntity<Category> add(@RequestBody Category category){
        return this.categoryService.add(category);
    }

    @GetMapping("getAll")
    public ResponseEntity<List<Category>> getAll(){
        return this.categoryService.getAll();
    }

    @PostMapping("update")
    public ResponseEntity<Category> update(@RequestParam int id,@RequestBody Category category){
        return this.categoryService.update(id,category);
    }

    @DeleteMapping("delete")
    public ResponseEntity<Category> delete(@RequestParam int id){
        return this.categoryService.delete(id);
    }

    @GetMapping("getById")
    public ResponseEntity<Category> getById(@RequestParam int id){
        return this.categoryService.getById(id);
    }
}
