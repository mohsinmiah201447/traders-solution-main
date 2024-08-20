package com.prologiccreations.traderssolution.dto.config;

import com.prologiccreations.traderssolution.model.config.Employee;
import lombok.Data;
import org.springframework.beans.BeanUtils;

import java.time.LocalDate;

@Data
public class EmployeeDto {
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
    private ManagerDto managerInfo;
    private String employeeStatus;
    private double salary;
    private long payFrequency;
    private double payRate;
    private String healthInsurance;
    private String retirementPlans;
    private String otherBenefits;
    private String performanceReview;
    private String trainingRecords;
    private String certifications;
    private LocalDate terminationDate;
    private String reasonForTermination;

    public EmployeeDto() {
    }

    public EmployeeDto(Employee employee) {
        BeanUtils.copyProperties(employee, this);
        if (employee.getManager() != null) {
            managerInfo = new ManagerDto(employee.getManager());
        }
    }
}
