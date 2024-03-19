package com.example.productservice.controller;

import com.example.productservice.model.Product;
import com.example.productservice.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping(path = "/products")
    public ResponseEntity<?> getAllProduct(@RequestParam(defaultValue = "10") int size,
                                           @RequestParam(defaultValue = "1") int page) {
        Sort sort = Sort.by("id").descending();
        Pageable pageable = PageRequest.of(page-1, size, sort);
        return ResponseEntity.ok(productService.getAllProduct(pageable));
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
