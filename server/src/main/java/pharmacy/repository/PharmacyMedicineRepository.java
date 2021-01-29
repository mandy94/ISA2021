package pharmacy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import pharmacy.model.entity.StockItem;

public interface PharmacyMedicineRepository extends JpaRepository<StockItem, Long> {


		List<StockItem> findAllByPharmacy(long pharmacyId);
		List<StockItem> findAllByPharmacyAndAvailableQuantityGreaterThan(long pharmacyId, int availableQuantity);
}
