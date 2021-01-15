package pharmacy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pharmacy.model.entity.Offer;
import pharmacy.model.entity.User;

public interface PharmacistRepository extends JpaRepository<User, Long>{

//	@Query("Select e from ")
//	private List<User> findByPharmacyId
//	
//	findByDateAndTime
}
