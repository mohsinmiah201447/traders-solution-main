package com.prologiccreations.traderssolution.model.data;

import com.prologiccreations.traderssolution.model.config.Customer;
import com.prologiccreations.traderssolution.model.config.Employee;
import com.prologiccreations.traderssolution.model.super_classes.AuditableEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "orders")
public class Order extends AuditableEntity {
    private LocalDate orderDate; //
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
    private Customer customer;
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
    private Employee employee; //
    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<OrderItem> orderItems;
    private String paymentMethod; //
    private LocalDate paymentDate;
    private String shippingAddress; //
    private String billingAddress;
    private String orderStatus; //
    private double grandTotal;
    private double discountAmount;
    private double paymentAmount;
    private double dueAmount;
    private double invoiceReceiptNumber; //
    private String notesComments;
    private LocalDate deliveryDate;
    private String returnExchangeRequest;
    private LocalDate returnExchangeDate;
}
