package com.example.demo.bussines.concretes;

import com.example.demo.bussines.abstracts.CategoryService;
import com.example.demo.dataAccess.abstracts.CategoryDao;
import com.example.demo.entities.concretes.Category;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryManager implements CategoryService {

    private final CategoryDao categoryDao;

    public CategoryManager(CategoryDao categoryDao) {
        this.categoryDao = categoryDao;
    }

    @Override
    public ResponseEntity<Category> add(Category category) {
        this.categoryDao.save(category);
        return new ResponseEntity<>(category, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<Category>> getAll() {
        return new ResponseEntity<>(this.categoryDao.findAll(),HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Category> update(int id, Category category) {
        Category _category = this.categoryDao.getById(id);
        _category.setCategoryName(category.getCategoryName());
        this.categoryDao.save(_category);
        return new ResponseEntity<>(this.categoryDao.getById(id),HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Category> delete(int id) {
        Category _category = this.categoryDao.getById(id);
        this.categoryDao.delete(_category);
        return new ResponseEntity<>(this.categoryDao.getById(id),HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Category> getById(int id) {
        return new ResponseEntity<>(this.categoryDao.getById(id),HttpStatus.OK);
    }
}
