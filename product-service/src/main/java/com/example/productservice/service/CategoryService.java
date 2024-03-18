package com.example.productservice.service;

import java.util.List;

import com.example.productservice.model.Category;
import com.example.productservice.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    @Autowired
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getAllCategory() {
        return categoryRepository.findAll();
    }
    
    public Category getCategoryById(long id) {
    	return categoryRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("Category Not Found with id: " + id));
    }

    public Category getCategoryByName(String name) {
        return categoryRepository.findByCategoryName(name);
    }
}