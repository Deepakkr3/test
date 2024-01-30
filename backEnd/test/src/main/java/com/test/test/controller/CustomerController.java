package com.test.test.controller;

import com.test.test.model.CustomerC;
import com.test.test.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CustomerController {
    @Autowired
    CustomerService customerService;
    @GetMapping("/customer")
    public List<CustomerC> getAllCustomer(){
        return customerService.getAllCustomer();

    }
    @PostMapping("/customer")
    public String addUser(@RequestBody CustomerC customerC){
        return customerService.addUser(customerC);
    }

}
