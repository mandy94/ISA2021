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
	@Query(value="select u.id, u.email, u.first_name, u.last_name, u.password , u.enabled, u.last_password_reset_date, u.username, u.work_role"
			+ " from business_hours b JOIN users u ON b.employee_id = u.id"
			+ " where b.start_time <= :start and b.end_time >= :end "
			+ " and u.id not in ( select pharmacist_id from appointment_at_pharmacist a" 
			+ " where a.start_time <= :start and a.end_time >= :end and a.date = :date);", nativeQuery=true)
	List<User> getAllAvailablePharamacistForDateAndTime( @Param("start") Long start, @Param("end") Long end, String date);

}
