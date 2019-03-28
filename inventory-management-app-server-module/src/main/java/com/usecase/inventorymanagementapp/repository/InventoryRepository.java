package com.usecase.inventorymanagementapp.repository;

import com.usecase.inventorymanagementapp.model.Inventory;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface InventoryRepository extends CrudRepository<Inventory, Long> {

  public List<Inventory> findAllByAvailabilityStatus(String status);
}
