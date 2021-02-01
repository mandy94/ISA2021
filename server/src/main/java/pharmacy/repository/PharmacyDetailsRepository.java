package pharmacy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import pharmacy.controller.dto.AdminDTO;
import pharmacy.model.entity.Pharmacy;

public interface PharmacyDetailsRepository extends JpaRepository<Pharmacy, Long>{

	@Query( value="Select * from Pharmacy where id = :id ", nativeQuery=true)
	public Pharmacy getPharmacyById( @Param("id")Long id);

	@Query(value=" select distinct * from pharmacy p" + 
			"			join users_work_in_pharmacies u on p.id = u.pharmacy_id" + 
			"			join business_hours b on b.at_pharmacy_id = u.pharmacy_id" + 
			"			where start_time <= :start and end_time >= :end and b.at_pharmacy_id = u.pharmacy_id"+ 
			"       	and b.employee_id = u.user_id" +			
			"			and u.user_id not in (" + 
			"				select pharmacist_id from appointment_at_pharmacist a" + 
			"				where a.start_time <= :start and a.end_time >= :end and a.date = :date );", nativeQuery=true)
	public List<Pharmacy> getAllPharmaciesByAvailablePharmacist(Long start, Long end, String date);

	@Query(value="Select * from pharmacy where admin_id = :id", nativeQuery=true)
	public Pharmacy getByAdminId(Long id);
	
	@Query(value="Select * from pharmacy where admin_id is null", nativeQuery=true)
	public List<AdminDTO> getWithoutAdmins();
	
	@Query(value="Select * from pharmacy_has_medicines h JOIN pharmacy p ON p.id = h.pharmacy_id\r\n"
			+ "where h.has_medicines_id = :id", nativeQuery=true)
//	@Query(value="Select * from pharmacy where admin_id = :id", nativeQuery=true)
	public List<Pharmacy> getPharmaciesWhoHaveMedicationFromPrescription(Long id);
	
	

}
