package pharmacy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import pharmacy.model.entity.appointments.AppointmentAtDermatolog;

public interface AppointmentAtDermatologRepository extends JpaRepository<AppointmentAtDermatolog, Long> {
	
	@Query("Select e from AppointmentAtDermatolog e where e.pacient.id = :id ")
	List<AppointmentAtDermatolog> getAppointmentsForUserId(@Param("id") Long id);
	
	@Query("Select e from AppointmentAtDermatolog e where e.pacient.id = :id and "
			+ "status = 'Odrzan'")
	List<AppointmentAtDermatolog> getAppointmentsHistoryForUserId(Long id);
	
	@Query(value = "Select e from AppointmentAtDermatolog e where e.status = 'Slobodan' and e.dermatolog_id = :id", nativeQuery=true)
	List<AppointmentAtDermatolog> getAvailableAppointemntsAtDermatolog(Long id);
	
	@Query(value= "SELECT distinct * from  appointment_at_dermatolog a " + 
					"INNER JOIN users_work_in_pharmacies w " + 
					"ON a.dermatolog_id = w.user_id " + 
					"INNER JOIN users u " + 
					"ON u.id = a.dermatolog_id " + 
					"WHERE w.pharmacy_id = :id " + 
					"AND a.status = 'Slobodan'", nativeQuery=true)
	List<AppointmentAtDermatolog> getAvailableAppointmentsAtDermatologByPharmacy(Long id);
	
	@Query("Select e from AppointmentAtDermatolog e where e.pacient.id = :id or e.pharmacy.id  = :pharmacyId")
	List<AppointmentAtDermatolog> getReservedAppointemntsAtDermatologInPharmacy(Long id, Long pharmacyId);

}
