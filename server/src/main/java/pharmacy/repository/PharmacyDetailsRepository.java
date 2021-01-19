package pharmacy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import pharmacy.model.entity.Pharmacy;

public interface PharmacyDetailsRepository extends JpaRepository<Pharmacy, Long>{

	@Query( value="Select * from Pharmacy where id = :id ", nativeQuery=true)
	public Pharmacy getPharmacyById( @Param("id")Long id);

	@Query(value=" select distinct p.id, p.name, p.adress from pharmacy p" + 
			"			join users_work_in_pharmacies u on p.id = u.pharmacy_id" + 
			"			join business_hours b on b.at_pharmacy_id = u.pharmacy_id" + 
			"			where start_time <= :start and end_time >= :end and u.user_id" + 
			"			not in (" + 
			"				select pharmacist_id from appointment_at_pharmacist a" + 
			"				where a.start_time <= :start and a.end_time >= :end and a.date = :date );", nativeQuery=true)
	public List<Pharmacy> getAllPharmaciesByAvailablePharmacist(Long start, Long end, String date);
	
	

}
