package pharmacy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import pharmacy.model.entity.User;

public interface DermatologRepository extends JpaRepository<User, Long>{

	@Query(value="Select * from users where work_role='Dermatolog'",nativeQuery=true)
	List<User> getAll();

	

}
