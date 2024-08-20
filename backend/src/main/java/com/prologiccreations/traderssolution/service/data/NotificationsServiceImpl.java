package com.prologiccreations.traderssolution.service.data;

import com.prologiccreations.traderssolution.dao.data.NotificationsRepository;
import com.prologiccreations.traderssolution.dto.Response;
import com.prologiccreations.traderssolution.model.data.Notifications;
import com.prologiccreations.traderssolution.service.super_classes.data.NotificationsService;
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
public class NotificationsServiceImpl implements NotificationsService {

    private final NotificationsRepository repository;

    @Override
    public Response storeData(Notifications data) {
        String validationMsg = validate(data);
        if (validationMsg == null) {
            repository.save(data);
            return new Response(SUCCESS, "Successfully stored data", null);
        } else {
            return new Response(FAILURE, validationMsg, null);
        }
    }

    @Override
    public Response<Page<Notifications>> getAll(Pageable pageable) {
        Page<Notifications> page = repository.findByActive(true, pageable);
        return new Response<>(SUCCESS, null, page);
    }

    @Override
    public Response<Notifications> getById(Long id) {
        Notifications Notifications = repository.findById(id).orElse(new Notifications());
        return new Response<>(SUCCESS, null, Notifications);
    }

    @Override
    public Response delete(Long id) {
        repository.softDeleteById(id, getCurrentUsername(), LocalDateTime.now());
        return new Response(SUCCESS, "Deleted successfully", null);
    }

    @Override
    public String validate(Notifications data) {
        return checkDuplicate(data);
    }

    @Override
    public String checkDuplicate(Notifications data) {
//        boolean NotificationsnameExists;
//        if (data.hasId()) {
//            NotificationsnameExists = repository.existsByNotificationsname(data.getNotificationsname(), data.getId());
//        } else {
//            NotificationsnameExists = repository.existsByNotificationsname(data.getNotificationsname());
//        }
//        return NotificationsnameExists ? "Failed to register. Notifications already exists" : null;
        return null;
    }

}
