package com.prologiccreations.traderssolution.service.super_classes.config;

import com.prologiccreations.traderssolution.dto.Response;
import com.prologiccreations.traderssolution.dto.config.ManagerDto;
import com.prologiccreations.traderssolution.model.config.Department;
import com.prologiccreations.traderssolution.service.super_classes.CrudService;

import java.util.List;

public interface DepartmentsService extends CrudService<Department, Long> {

    Response<List<ManagerDto>> findAllManagers();

}
