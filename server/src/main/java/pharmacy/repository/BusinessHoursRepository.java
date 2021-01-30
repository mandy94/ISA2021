package pharmacy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import pharmacy.model.entity.BusinessHours;

public interface BusinessHoursRepository extends JpaRepository<BusinessHours, Long>{
	
	@Query(value="Select * from business_hours b JOIN Pharmacy p ON p.id = b.at_pharmacy_id "
			+ "where b.employee_id = :dermatolog and p.id = :pharmacy", nativeQuery=true)
	List<BusinessHours> getBusinessHoursForEmployeeInPharmacy(Long dermatolog, Long pharmacy);

}
