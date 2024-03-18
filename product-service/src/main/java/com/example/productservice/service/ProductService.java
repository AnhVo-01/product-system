package com.example.productservice.service;

import com.example.productservice.exception.ResourceNotFoundException;
import com.example.productservice.model.Category;
import com.example.productservice.model.Product;
import com.example.productservice.model.User;
import com.example.productservice.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final CategoryService categoryService;
    private final UserService userService;

    @Autowired
    public ProductService(ProductRepository productRepository,
                          CategoryService categoryService,
                          UserService userService) {
        this.productRepository = productRepository;
        this.categoryService = categoryService;
        this.userService = userService;
    }

    public Page<Product> getAllProduct(Pageable pageable) {
        return productRepository.findAll(pageable);
    }
    
    public List<Product> getAllProduct(String username) {
        User user = userService.getUserByUsername(username);
        List<Product> products = productRepository.findByUser(user);

        return products;
    }

    public Product saveProduct(Product product, String username) {
        Category category = categoryService.getCategoryByName(product.getCategory().getCategoryName());
        product.setCategory(category);
        if (username != null) {
           User user = userService.getUserByUsername(username);
           product.setUser(user);
        }
        productRepository.save(product);
        
        return product;
    }
    
    public Product updateProduct(Integer id, Product updateProduct, String username) {
       Product product = getProductById(id);
  	   product.setName(updateProduct.getName());
  	   product.setPrice(updateProduct.getPrice());
  	   product.setQuantity(updateProduct.getQuantity());
  	   product.setCategory(updateProduct.getCategory());
  	   Product savedProduct = saveProduct(product, username);
  	   
  	   return savedProduct;
    }

    public void deleteProductById(int id) {
        productRepository.deleteById(id);
    }

    public Product getProductById(Integer id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found."));
    }
}
