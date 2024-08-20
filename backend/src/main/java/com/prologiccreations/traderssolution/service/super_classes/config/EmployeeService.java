package com.prologiccreations.traderssolution.service.super_classes.config;

import com.prologiccreations.traderssolution.dto.Response;
import com.prologiccreations.traderssolution.dto.config.ManagerDto;
import com.prologiccreations.traderssolution.model.config.Employee;
import com.prologiccreations.traderssolution.service.super_classes.CrudService;

import java.util.List;

public interface EmployeeService extends CrudService<Employee, Long> {

    Response<List<ManagerDto>> findAllManagers();

}
