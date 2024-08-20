package com.prologiccreations.traderssolution.model.super_classes;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import java.time.LocalDateTime;
import static com.prologiccreations.traderssolution.TradersSolutionApplication.getCurrentUsername;

@Getter
@Setter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class AuditableEntity extends BaseEntity {
    @JsonIgnore
    @CreatedBy
    private String createdBy;
    @JsonIgnore
    @Column(name = "created_date", nullable = false, updatable = false)
    @CreatedDate
    private LocalDateTime createdDate;
    @JsonIgnore
    @LastModifiedBy
    private String modifiedBy;
    @JsonIgnore
    @LastModifiedDate
    private LocalDateTime modifiedDate;

    @PrePersist
    public void onPrePersist() {
        this.setActive(true);
        this.createdDate = LocalDateTime.now();
        this.createdBy = getCurrentUsername();
    }

    @PreUpdate
    public void onPreUpdate() {
        this.modifiedDate = LocalDateTime.now();
        this.modifiedBy = getCurrentUsername();
    }

    @PreRemove
    public void onPreRemove() {
        this.setActive(false);
        this.modifiedDate = LocalDateTime.now();
        this.modifiedBy = getCurrentUsername();
    }
}
