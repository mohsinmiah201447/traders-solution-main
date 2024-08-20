package com.prologiccreations.traderssolution.service.config;

import com.prologiccreations.traderssolution.dao.config.SupplierRepository;
import com.prologiccreations.traderssolution.dto.Response;
import com.prologiccreations.traderssolution.model.config.Supplier;
import com.prologiccreations.traderssolution.service.super_classes.config.SupplierService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

import static com.prologiccreations.traderssolution.TradersSolutionApplication.getCurrentUsername;
import static com.prologiccreations.traderssolution.constants.enums.OperationStatus.FAILURE;
import static com.prologiccreations.traderssolution.constants.enums.OperationStatus.SUCCESS;

@Service
@RequiredArgsConstructor
public class SupplierServiceImpl implements SupplierService {

    private final SupplierRepository repository;

    @Override
    public Response storeData(Supplier data) {
        String validationMsg = validate(data);
        if (validationMsg == null) {
            repository.save(data);
            return new Response(SUCCESS, "Successfully stored data", null);
        } else {
            return new Response(FAILURE, validationMsg, null);
        }
    }

    @Override
    public Response<Page<Supplier>> getAll(Pageable pageable) {
        Page<Supplier> page = repository.findByActive(true, pageable);
        return new Response<>(SUCCESS, null, page);
    }

    @Override
    public Response<Supplier> getById(Long id) {
        Supplier Supplier = repository.findById(id).orElse(new Supplier());
        return new Response<>(SUCCESS, null, Supplier);
    }

    @Override
    public Response delete(Long id) {
        repository.softDeleteById(id, getCurrentUsername(), LocalDateTime.now());
        return new Response(SUCCESS, "Deleted successfully", null);
    }

    @Override
    public String validate(Supplier data) {
        return checkDuplicate(data);
    }

    @Override
    public String checkDuplicate(Supplier data) {
//        boolean SuppliernameExists;
//        if (data.hasId()) {
//            SuppliernameExists = repository.existsBySuppliername(data.getSuppliername(), data.getId());
//        } else {
//            SuppliernameExists = repository.existsBySuppliername(data.getSuppliername());
//        }
//        return SuppliernameExists ? "Failed to register. Supplier already exists" : null;
        return null;
    }

}
