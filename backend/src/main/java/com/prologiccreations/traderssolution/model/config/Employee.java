package com.prologiccreations.traderssolution.model.config;

import com.prologiccreations.traderssolution.model.super_classes.AuditableEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
public class Employee extends AuditableEntity {
    private String firstName;
    private String lastName;
    private LocalDate dateOfBirth;
    private String gender;
    private long nationalId;
    private String email;
    private long phone;
    private String address;
    private String emergencyContactName;
    private long emergencyContactPhone;
    private LocalDate hireDate;
    private String designation;
    private String department;
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
    private Employee manager;
//    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
//    private User user;
    private String employeeStatus;
    private double salary;
    private String payFrequency;
    private double payRate;
    private String healthInsurance;
    private String retirementPlans;
    private String otherBenefits;
    private String performanceReview;
    private String trainingRecords;
    private String certifications;
    private LocalDate terminationDate;
    private String reasonForTermination;
    @Transient
    private Team team;
}
