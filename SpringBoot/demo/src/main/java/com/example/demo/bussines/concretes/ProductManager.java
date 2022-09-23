package com.example.demo.bussines.concretes;

import com.example.demo.bussines.abstracts.ProductService;
import com.example.demo.dataAccess.abstracts.ProductDao;
import com.example.demo.entities.concretes.Product;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductManager implements ProductService {

    private final ProductDao productDao;

    public ProductManager(ProductDao productDao) {
        this.productDao = productDao;
    }

    @Override
    public ResponseEntity<Product> add(Product product) {
        this.productDao.save(product);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<Product>> getAll() {
        return new ResponseEntity<>(this.productDao.findAll(),HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Product> update(int id, Product product) {
        Product _product = this.productDao.getById(id);
        _product.setProductName(product.getProductName());
        _product.setUnitPrice(product.getUnitPrice());
        _product.setUnitsInStock(product.getUnitsInStock());
        _product.setCategory(product.getCategory());
        this.productDao.save(_product);
        return new ResponseEntity<>(this.productDao.getById(id),HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Product> delete(int id) {
        Product _product = this.productDao.getById(id);
        this.productDao.delete(_product);
        return new ResponseEntity<>(this.productDao.getById(id),HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Product> getById(int id) {
        return new ResponseEntity<>(this.productDao.getById(id),HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<Product>> getByCategoryId(int id) {
        return new ResponseEntity<>(this.productDao.getByCategory_Id(id),HttpStatus.OK);
    }
}
