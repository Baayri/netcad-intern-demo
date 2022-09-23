package com.example.demo.dataAccess.abstracts;

import com.example.demo.entities.concretes.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryDao extends JpaRepository<Category,Integer> {
    Category getById(int id);
}
