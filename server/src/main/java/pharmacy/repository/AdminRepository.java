package pharmacy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import pharmacy.controller.dto.AdminDTO;
import pharmacy.model.entity.User;

public interface AdminRepository extends JpaRepository<User, Long> {
	
	@Query(value="select * from users where work_role = 'Admin'", nativeQuery= true)
	List<User> getAll();
	
	@Query(value="select * from users where dedicated_pharmacy_id is NULL and work_role='Admin'", nativeQuery= true)
	List<User> getAdminsWithouthPharmacy();
}
