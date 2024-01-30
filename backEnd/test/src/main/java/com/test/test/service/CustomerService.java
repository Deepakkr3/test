package com.test.test.service;

import com.test.test.model.CustomerC;
import com.test.test.repo.CustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {
    @Autowired
    CustomerRepo customerRepo;

    public List<CustomerC> getAllCustomer() {
        return customerRepo.findAll();
    }

    public String addUser(CustomerC customerC) {
        customerRepo.save(customerC);
        return " item has been saved";
    }
}
