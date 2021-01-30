package pharmacy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import pharmacy.model.entity.Medicine;

public interface MedicineRepository extends JpaRepository<Medicine, Long>{

	@Query(value="Select * from pharmacy_has_medicines p join medicine m "
			+ "on p.has_medicines_id = m.id and  p.pharmacy_id = :id", nativeQuery=true)
	List<Medicine> getByPharmacyId(Long id);

	 // TODO	
	//boolean getPrescriptionsWhoRefMedicineById(Long id);
		// TODO
	//boolean getPharmaciesWhoRefMedicineById(Long id);

}
