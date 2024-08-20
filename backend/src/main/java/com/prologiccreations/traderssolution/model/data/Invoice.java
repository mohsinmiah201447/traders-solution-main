package com.prologiccreations.traderssolution.model.data;

import com.prologiccreations.traderssolution.model.super_classes.AuditableEntity;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Invoice extends AuditableEntity{
    private String invoiceId;
    private String salesOrderId;
    private String customerId;
    private String customerName;
    private String invoiceDate;
    private String dueDate;
    private String productId;
    private String productName;
    private String quantity;
    private String unitPrice;
    private String totalPrice;
    private String discountApplied;
    private String taxesApplied;
    private String shippingCharges;
    private String invoiceStatus;
    private String paymentMethod;
    private String billingAddress;
    private String shippingAddress;
    private String specialInstructions;


}
