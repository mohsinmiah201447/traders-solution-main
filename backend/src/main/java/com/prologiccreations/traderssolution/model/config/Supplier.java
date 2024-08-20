package com.prologiccreations.traderssolution.model.config;

import com.prologiccreations.traderssolution.model.super_classes.AuditableEntity;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Supplier extends AuditableEntity {

    private String name;
    private String contactName;
    private String contactTitle;
    private long phoneNumber;
    private String emailAddress;
    private String address;
    private String billingAddress;
    private String paymentTerms;
    private String paymentMethod;
    private long tin;
    private String website;
    private String productCategories;
    private String supplierRating;
    private String agreements;
    private String preferredSupplier;
    private String leadTime;
    private String minimumOrderQuantity;
}
