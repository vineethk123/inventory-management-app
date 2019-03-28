package com.usecase.inventorymanagementapp.controller;

import com.usecase.inventorymanagementapp.model.Inventory;
import com.usecase.inventorymanagementapp.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController("/fun-inventory")
public class InventoryController {

    @Autowired
    InventoryService inventoryService;

    @GetMapping("/available-inventory")
    public List<Inventory> getAvailableInventory() {
        return inventoryService.getAvailableInventory();
    }
}
