package com.prologiccreations.traderssolution.model.config;

import com.prologiccreations.traderssolution.model.super_classes.AuditableEntity;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
public class Customer extends AuditableEntity {
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String address;
    private String billingAddress;
    private String companyName;
    private String tin;
    private LocalDate dateOfRegistration;
    private String customerCategory;
    private String creditLimit;
}
