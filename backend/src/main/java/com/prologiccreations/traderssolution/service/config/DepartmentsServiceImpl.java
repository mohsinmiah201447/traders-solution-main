package com.prologiccreations.traderssolution.service.config;

import com.prologiccreations.traderssolution.dao.config.DepartmentsRepository;
import com.prologiccreations.traderssolution.dto.Response;
import com.prologiccreations.traderssolution.dto.config.ManagerDto;
import com.prologiccreations.traderssolution.model.config.Department;
import com.prologiccreations.traderssolution.service.super_classes.config.DepartmentsService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

import static com.prologiccreations.traderssolution.TradersSolutionApplication.getCurrentUsername;
import static com.prologiccreations.traderssolution.constants.enums.OperationStatus.FAILURE;
import static com.prologiccreations.traderssolution.constants.enums.OperationStatus.SUCCESS;

@Service
@RequiredArgsConstructor
public class DepartmentsServiceImpl implements DepartmentsService {

    private final DepartmentsRepository repository;

    @Override
    public Response storeData(Department data) {
        String validationMsg = validate(data);
        if (validationMsg == null) {
            repository.save(data);
            return new Response(SUCCESS, "Successfully stored data", null);
        } else {
            return new Response(FAILURE, validationMsg, null);
        }
    }

    @Override
    public Response<Page<Department>> getAll(Pageable pageable) {
        Page<Department> page = repository.findByActive(true, pageable);
        return new Response<>(SUCCESS, null, page);
    }

    @Override
    public Response<Department> getById(Long id) {
        Department Department = repository.findById(id).orElse(new Department());
        return new Response<>(SUCCESS, null, Department);
    }

    @Override
    public Response delete(Long id) {
        repository.softDeleteById(id, getCurrentUsername(), LocalDateTime.now());
        return new Response(SUCCESS, "Deleted successfully", null);
    }

    @Override
    public String validate(Department data) {
        return checkDuplicate(data);
    }

    @Override
    public String checkDuplicate(Department data) {
//        boolean DepartmentsnameExists;
//        if (data.hasId()) {
//            DepartmentsnameExists = DepartmentsRepository.existsByDepartmentsname(data.getDepartmentsname(), data.getId());
//        } else {
//            DepartmentsnameExists = DepartmentsRepository.existsByDepartmentsname(data.getDepartmentsname());
//        }
//        return DepartmentsnameExists ? "Failed to register. Departments already exists" : null;
        return null;
    }

    @Override
    public Response<List<ManagerDto>> findAllManagers() {
        List<ManagerDto> managers = repository.findAllManagers();
        return new Response<>(SUCCESS, null, managers);
    }
}
