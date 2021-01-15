package pharmacy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import pharmacy.model.entity.Pharmacy;

public interface PharmacyDetailsRepository extends JpaRepository<Pharmacy, Long>{

	@Query( value="Select * from Pharmacy where id = :id ", nativeQuery=true)
	public Pharmacy getPharmacyById( @Param("id")Long id);
	
	

}
