package com.example.productservice.controller;

import java.util.Date;

import com.example.productservice.exception.ExceptionResponse;
import com.example.productservice.exception.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.ServletWebRequest;
import org.springframework.web.context.request.WebRequest;


@ControllerAdvice
@RestController
public class ApiExceptionHandler {
	
	@ExceptionHandler(ResourceNotFoundException.class)
	public final ResponseEntity<ExceptionResponse> handleNotFoundException(ResourceNotFoundException ex, WebRequest req) {
		String path = ((ServletWebRequest)req).getRequest().getRequestURI();
		ExceptionResponse exceptionResponse = new ExceptionResponse(
				new Date(), ex.getMessage(), path, HttpStatus.NOT_FOUND.value());
		
		return new ResponseEntity<>(exceptionResponse, HttpStatus.NOT_FOUND);
	}
	
	
	@ExceptionHandler(HttpMessageNotReadableException.class)
	public final ResponseEntity<ExceptionResponse> handleBadRequestException(HttpMessageNotReadableException ex, WebRequest req) {
		String path = ((ServletWebRequest)req).getRequest().getRequestURI();
		ExceptionResponse exceptionResponse = new ExceptionResponse(
				new Date(), "Invalid request", path, HttpStatus.BAD_REQUEST.value());
	    return new ResponseEntity<>(exceptionResponse, HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(BadCredentialsException.class)
	public final ResponseEntity<ExceptionResponse> handleInvalidCredentialsException(BadCredentialsException ex, WebRequest req) {
		String path = ((ServletWebRequest)req).getRequest().getRequestURI();
		ExceptionResponse exceptionResponse = new ExceptionResponse(
				new Date(), "Username or password invalid", path, HttpStatus.BAD_REQUEST.value());
	    return new ResponseEntity<>(exceptionResponse, HttpStatus.BAD_REQUEST);
	}
}
