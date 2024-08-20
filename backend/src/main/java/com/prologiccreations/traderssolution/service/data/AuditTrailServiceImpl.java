package com.prologiccreations.traderssolution.service.data;

import com.prologiccreations.traderssolution.dao.data.AuditTrailRepository;
import com.prologiccreations.traderssolution.dto.Response;
import com.prologiccreations.traderssolution.model.data.AuditTrail;
import com.prologiccreations.traderssolution.service.super_classes.data.AuditTrailService;
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
public class AuditTrailServiceImpl implements AuditTrailService {

    private final AuditTrailRepository repository;

    @Override
    public Response storeData(AuditTrail data) {
        String validationMsg = validate(data);
        if (validationMsg == null) {
            repository.save(data);
            return new Response(SUCCESS, "Successfully stored data", null);
        } else {
            return new Response(FAILURE, validationMsg, null);
        }
    }

    @Override
    public Response<Page<AuditTrail>> getAll(Pageable pageable) {
        Page<AuditTrail> page = repository.findByActive(true, pageable);
        return new Response<>(SUCCESS, null, page);
    }

    @Override
    public Response<AuditTrail> getById(Long id) {
        AuditTrail AuditTrail = repository.findById(id).orElse(new AuditTrail());
        return new Response<>(SUCCESS, null, AuditTrail);
    }

    @Override
    public Response delete(Long id) {
        repository.softDeleteById(id, getCurrentUsername(), LocalDateTime.now());
        return new Response(SUCCESS, "Deleted successfully", null);
    }

    @Override
    public String validate(AuditTrail data) {
        return checkDuplicate(data);
    }

    @Override
    public String checkDuplicate(AuditTrail data) {
//        boolean AuditTrailnameExists;
//        if (data.hasId()) {
//            AuditTrailnameExists = repository.existsByAuditTrailname(data.getAuditTrailname(), data.getId());
//        } else {
//            AuditTrailnameExists = repository.existsByAuditTrailname(data.getAuditTrailname());
//        }
//        return AuditTrailnameExists ? "Failed to register. AuditTrail already exists" : null;
        return null;
    }

}
