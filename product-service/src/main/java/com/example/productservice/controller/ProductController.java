package com.example.productservice.controller;

import com.example.productservice.model.Product;
import com.example.productservice.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping(path = "/products", produces = "application/json")
    public ResponseEntity<?> getAllProduct(Authentication authentication) {
        String username = authentication.getName();

        return ResponseEntity.ok(productService.getAllProduct(username));
    }

    @GetMapping(path = "/products/{id}")
    public ResponseEntity<?> getProduct(@PathVariable Integer id) {
        return ResponseEntity.ok(productService.getProductById(id));
    }

    @PostMapping("/products")
    public ResponseEntity<?> saveProduct(@RequestBody Product newProduct, Authentication authentication) {
        String username = authentication.getName();
        return ResponseEntity.ok(productService.saveProduct(newProduct, username));
    }

    @DeleteMapping(path = "/products/{id}")
    public void deleteProduct(@PathVariable Integer id) {
        productService.deleteProductById(id);
    }

    @PutMapping("/products/{id}")
    public void updateProduct(@PathVariable Integer id, @RequestBody Product updateProduct, Authentication authentication) {
        Product product = productService.getProductById(id);
        product.setName(updateProduct.getName());
        product.setPrice(updateProduct.getPrice());
        product.setQuantity(updateProduct.getQuantity());
        product.setCategory(updateProduct.getCategory());

        String username = authentication.getName();
        productService.saveProduct(product, username);
    }
}
