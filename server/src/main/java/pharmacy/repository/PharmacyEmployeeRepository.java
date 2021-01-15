package pharmacy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import pharmacy.model.entity.User;

public interface PharmacyEmployeeRepository extends JpaRepository<User, Long>{

	@Query(value="SELECT * FROM USERS u where u.id in ( select user_id from users_work_in_pharmacies where pharmacy_id = :id)", nativeQuery=true)
	List<User> getAllByPharmacyId(@Param("id")Long id);
	@Query(value="SELECT * FROM USERS u where u.id in ( select user_id from users_work_in_pharmacies where pharmacy_id = :id) and u.work_role ='Dermatolog'", nativeQuery=true)
	List<User> getAllDermatologsByPharmacyId(@Param("id")Long id);
	@Query(value="SELECT * FROM USERS u where u.id in ( select user_id from users_work_in_pharmacies where pharmacy_id = :id) and u.work_role ='Farmaceut'", nativeQuery=true)
	List<User> getAllPharmacistsByPharmacyId(@Param("id")Long id);
	@Query(value="SELECT * FROM USERS u where u.id in ( select user_id from users_work_in_pharmacies where pharmacy_id = :id) and u.work_role ='Admin'", nativeQuery=true)
	List<User> getAllAdministratorsByPharmacyId(@Param("id")Long id);

}
