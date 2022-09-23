package com.example.demo.entities.concretes;

import com.sun.istack.NotNull;
import lombok.*;


import javax.persistence.*;
import java.util.List;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int id;

    @Column(name = "product_name", nullable = false)
    private String productName;

    @Column(name = "unit_price", nullable = false)
    private int unitPrice;

    @Column(name = "units_in_stock", nullable = false)
    private int unitsInStock;

    @ManyToOne()
    @JoinColumn(name = "category_id")
    private Category category;

}
