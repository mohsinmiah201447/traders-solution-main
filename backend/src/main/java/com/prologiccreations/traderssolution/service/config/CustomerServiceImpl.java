package com.prologiccreations.traderssolution.service.config;

import com.prologiccreations.traderssolution.dao.config.CustomerRepository;
import com.prologiccreations.traderssolution.dto.Response;
import com.prologiccreations.traderssolution.model.config.Customer;
import com.prologiccreations.traderssolution.service.super_classes.config.CustomerService;
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
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository repository;

    @Override
    public Response storeData(Customer data) {
        String validationMsg = validate(data);
        if (validationMsg == null) {
            repository.save(data);
            return new Response(SUCCESS, "Successfully stored data", null);
        } else {
            return new Response(FAILURE, validationMsg, null);
        }
    }

    @Override
    public Response<Page<Customer>> getAll(Pageable pageable) {
        Page<Customer> page = repository.findByActive(true, pageable);
        return new Response<>(SUCCESS, null, page);
    }

    @Override
    public Response<Customer> getById(Long id) {
        Customer Customer = repository.findById(id).orElse(new Customer());
        return new Response<>(SUCCESS, null, Customer);
    }

    @Override
    public Response delete(Long id) {
        repository.softDeleteById(id, getCurrentUsername(), LocalDateTime.now());
        return new Response(SUCCESS, "Deleted successfully", null);
    }

    @Override
    public String validate(Customer data) {
        return checkDuplicate(data);
    }

    @Override
    public String checkDuplicate(Customer data) {
//        boolean CustomernameExists;
//        if (data.hasId()) {
//            CustomernameExists = CustomerRepository.existsByCustomername(data.getCustomername(), data.getId());
//        } else {
//            CustomernameExists = CustomerRepository.existsByCustomername(data.getCustomername());
//        }
//        return CustomernameExists ? "Failed to register. Customer already exists" : null;
        return null;
    }

}
