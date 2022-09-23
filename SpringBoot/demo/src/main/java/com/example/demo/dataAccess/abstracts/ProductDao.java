package com.example.demo.dataAccess.abstracts;

import com.example.demo.entities.concretes.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductDao extends JpaRepository<Product,Integer> {
    Product getById(int id);
    List<Product> getByCategory_Id(int id);
}
