package com.usecase.inventorymanagementapp.model;


import javax.persistence.*;

@Entity
@Table(name = "Inventory")
public class Inventory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    Long id;

    @Column(name = "name", nullable = false)
    String inventoryName;

    @Column(name = "status", nullable = false)
    String availabilityStatus;

    @Column(name = "employeeName")
    String employeName;

    public Inventory() {
    }

    public Inventory(Long id, String inventoryName, String availabilityStatus, String employeName) {
        this.id = id;
        this.inventoryName = inventoryName;
        this.availabilityStatus = availabilityStatus;
        this.employeName = employeName;
    }

    public void setInventoryName(String inventoryName) {
        this.inventoryName = inventoryName;
    }

    public String getAvailabilityStatus() {
        return availabilityStatus;
    }

    public void setAvailabilityStatus(String availabilityStatus) {
        this.availabilityStatus = availabilityStatus;
    }

    public String getEmployeName() {
        return employeName;
    }

    public void setEmployeName(String employeName) {
        this.employeName = employeName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getInventoryName() {
        return inventoryName;
    }
}
