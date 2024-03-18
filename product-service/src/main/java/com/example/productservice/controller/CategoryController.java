package com.example.productservice.controller;

import java.util.List;

import com.example.productservice.model.Category;
import com.example.productservice.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CategoryController {

	@Autowired
	private CategoryService categoryService;
	
	@GetMapping(path="/category", produces = "application/json")
	public ResponseEntity<?> getAllCategory() {

        return ResponseEntity.ok(categoryService.getAllCategory());
	}
	
	@GetMapping(path="/category/{id}", produces = "application/json")
	public ResponseEntity<?> getCategoryById(@PathVariable int id) {
		return ResponseEntity.ok(categoryService.getCategoryById(id));
	}
	
}
