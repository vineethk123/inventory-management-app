package com.usecase.inventorymanagementapp.service;

import com.usecase.inventorymanagementapp.model.Inventory;
import com.usecase.inventorymanagementapp.repository.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InventoryService {

    @Autowired
    InventoryRepository inventoryRepository;

    public List<Inventory> getAvailableInventory() {
        return inventoryRepository.findAllByAvailabilityStatus("available");
    }

    public List<Inventory> getAllInventory() {
        return (List<Inventory>) inventoryRepository.findAll();
    }



}
