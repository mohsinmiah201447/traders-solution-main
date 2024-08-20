package com.prologiccreations.traderssolution.controller.config;

import com.prologiccreations.traderssolution.controller.super_classes.CrudController;
import com.prologiccreations.traderssolution.dto.Response;
import com.prologiccreations.traderssolution.dto.config.ManagerDto;
import com.prologiccreations.traderssolution.model.config.Department;
import com.prologiccreations.traderssolution.service.super_classes.config.DepartmentsService;
import com.prologiccreations.traderssolution.utils.PageUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("departments/")
public class DepartmentsController implements CrudController<Department, Long> {
    private final DepartmentsService departmentsService;

    @Override
    public ResponseEntity<Response> storeData(Department data) {
        Response response = departmentsService.storeData(data);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<Page<Department>>> getAll(Integer pageNumber, Integer pageSize, String sortDirection, String sortColumns) {
        Pageable pageable = PageUtil.getPageable(pageNumber, pageSize, sortDirection, sortColumns);
        Response<Page<Department>> response = departmentsService.getAll(pageable);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<Department>> getOne(Long id) {
        Response<Department> response = departmentsService.getById(id);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response> delete(Long id) {
        Response response = departmentsService.delete(id);
        return ResponseEntity.ok(response);
    }

    @GetMapping("managers")
    public ResponseEntity<Response<List<ManagerDto>>> findAllManagers() {
        Response<List<ManagerDto>> response = departmentsService.findAllManagers();
        return ResponseEntity.ok(response);
    }

}
