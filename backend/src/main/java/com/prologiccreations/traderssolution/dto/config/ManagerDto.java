package com.prologiccreations.traderssolution.dto.config;

import com.prologiccreations.traderssolution.model.config.Employee;
import lombok.Data;

@Data
public class ManagerDto {
    private long id;
    private String name;

    public ManagerDto(Employee employee) {
        this.id = employee.getId();
        this.name = employee.getFirstName() + " " + employee.getLastName();
    }
}
