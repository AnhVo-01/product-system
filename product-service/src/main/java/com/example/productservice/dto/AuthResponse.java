package com.example.productservice.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class AuthResponse {
    private String type = "Bearer";
    private Long id;
    private String username;

    private String email;
    private String accessToken;
    private List<String> roles;

    public AuthResponse(String accessToken, Long id, String username, String email, List<String> roles) {
        this.id = id;
        this.username = username;
        this.accessToken = accessToken;
        this.roles = roles;
        this.email = email;
    }
}