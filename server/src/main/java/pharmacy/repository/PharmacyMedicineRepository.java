package pharmacy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import pharmacy.model.entity.PharmacyMedicine;

public interface PharmacyMedicineRepository extends JpaRepository<PharmacyMedicine, Long> {


		List<PharmacyMedicine> findAllByPharmacy(long pharmacyId);
		List<PharmacyMedicine> findAllByPharmacyAndAvailableQuantityGreaterThan(long pharmacyId, int availableQuantity);
}
