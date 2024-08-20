package com.prologiccreations.traderssolution.model.config;

import com.prologiccreations.traderssolution.model.super_classes.AuditableEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "products")
public class Product extends AuditableEntity {
    private String name;
    private String sku;
    private String category;
    private String brand;
    private double unitPrice;
    private double costPrice;
    private long quantityInStock;
    private String reorderPoint;
    private long supplierID;
    private LocalDate purchaseDate;
    private LocalDate expirationDate;
    private String location;
    private String barcode;
    private long serialNumber;
    @Column(name = "conditions", columnDefinition = "TEXT")
    private String condition;
    private double weight;
    private long dimensions;
    private double taxRate;
    private long minimumOrderQuantity;
    private double discounts;
    private String images;
    private String attachments;
}
