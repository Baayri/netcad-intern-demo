package com.example.demo.bussines.abstracts;

import com.example.demo.entities.concretes.Product;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ProductService {
    ResponseEntity<Product> add(Product product);
    ResponseEntity<List<Product>> getAll();
    ResponseEntity<Product> update(int id,Product product);
    ResponseEntity<Product> delete(int id);

    ResponseEntity<Product> getById(int id);

    ResponseEntity<List<Product>> getByCategoryId(int id);
}
