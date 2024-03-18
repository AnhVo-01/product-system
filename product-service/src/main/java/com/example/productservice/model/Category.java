package com.example.productservice.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@Table(name = "category")
public class Category implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, name = "category_name")
    private String categoryName;

    @Column(nullable = false)
    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Product> productSet;

    public Set<Product> getProduct() {
        return productSet;
    }

    public void setProduct(Product product) {
        if (productSet.size() == 0) {
            productSet = new HashSet<>();
        }
        productSet.add(product);
    }
}
