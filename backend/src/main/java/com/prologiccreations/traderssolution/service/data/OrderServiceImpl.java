package com.prologiccreations.traderssolution.service.data;

import com.prologiccreations.traderssolution.dao.config.ProductRepository;
import com.prologiccreations.traderssolution.dao.data.OrderRepository;
import com.prologiccreations.traderssolution.dto.Response;
import com.prologiccreations.traderssolution.model.config.Product;
import com.prologiccreations.traderssolution.model.data.Order;
import com.prologiccreations.traderssolution.model.data.OrderItem;
import com.prologiccreations.traderssolution.service.super_classes.config.ProductService;
import com.prologiccreations.traderssolution.service.super_classes.data.OrderService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

import org.springframework.cglib.core.Local;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

import static com.prologiccreations.traderssolution.TradersSolutionApplication.getCurrentUsername;
import static com.prologiccreations.traderssolution.constants.enums.OperationStatus.FAILURE;
import static com.prologiccreations.traderssolution.constants.enums.OperationStatus.SUCCESS;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository repository;
    private final ProductRepository productRepository;
    
    @Override
    @Transactional
    public Response storeData(Order data) {
        String validationMsg = validate(data);
        if (validationMsg == null) {
            data.setPaymentMethod("Cash");
            data.setOrderDate(LocalDate.now());
            data.setInvoiceReceiptNumber(new Date().getTime());
            for(OrderItem item: data.getOrderItems()){
                Product product = item.getProduct();
                if(product != null && product.getId() != null && product.getQuantityInStock() >= item.getQuantity()) {
                    product.setQuantityInStock(product.getQuantityInStock() - item.getQuantity());
                    productRepository.save(product);
                } else {
                    return new Response(FAILURE, "Product quantity is not enough", null);
                }
            }
            return new Response(SUCCESS, "Successfully stored data", repository.save(data));
        } else {
            return new Response(FAILURE, validationMsg, null);
        }
    }

    @Override
    public Response<Page<Order>> getAll(Pageable pageable) {
        Page<Order> page = repository.findByActive(true, pageable);
        return new Response<>(SUCCESS, null, page);
    }

    @Override
    public Response<Order> getById(Long id) {
        Order Order = repository.findById(id).orElse(new Order());
        return new Response<>(SUCCESS, null, Order);
    }

    @Override
    public Response delete(Long id) {
        repository.softDeleteById(id, getCurrentUsername(), LocalDateTime.now());
        return new Response(SUCCESS, "Deleted successfully", null);
    }

    @Override
    public String validate(Order data) {
        return checkDuplicate(data);
    }

    @Override
    public String checkDuplicate(Order data) {
//        boolean OrdernameExists;
//        if (data.hasId()) {
//            OrdernameExists = repository.existsByOrdername(data.getOrdername(), data.getId());
//        } else {
//            OrdernameExists = repository.existsByOrdername(data.getOrdername());
//        }
//        return OrdernameExists ? "Failed to register. Order already exists" : null;
        return null;
    }

}
