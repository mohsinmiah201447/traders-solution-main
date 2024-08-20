package com.prologiccreations.traderssolution.model.data;

import com.prologiccreations.traderssolution.model.super_classes.AuditableEntity;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
public class Notifications extends AuditableEntity {
    private String recipient;
    private String message;
    private String notificationType;
    private String timestamp;
    private String status;
    private String linkURL;
    private String associatedEntity;
    private String senderUserID;
    private String priorityLevel;
    private String readTimestamp;
    private LocalDate expirationDate;
    private String additionalMetadata;
}
