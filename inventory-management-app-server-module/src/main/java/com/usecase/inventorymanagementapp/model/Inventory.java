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

    public Inventory(Long id, String inventoryName) {
        this.id = id;
        this.inventoryName = inventoryName;
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
