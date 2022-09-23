package com.example.demo.bussines.abstracts;

import com.example.demo.entities.concretes.Category;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface CategoryService {
    ResponseEntity<Category> add(Category category);
    ResponseEntity<List<Category>> getAll();
    ResponseEntity<Category> update(int id,Category category);
    ResponseEntity<Category> delete(int id);

    ResponseEntity<Category> getById(int id);
}
