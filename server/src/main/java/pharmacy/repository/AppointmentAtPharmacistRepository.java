package pharmacy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import pharmacy.model.entity.appointments.AppointmentAtPharmacist;

public interface AppointmentAtPharmacistRepository extends JpaRepository<AppointmentAtPharmacist, Long> {
	
	@Query("Select e from AppointmentAtPharmacist e where e.pacient.id = :id and e.status = 'Rezervisan'")
	List<AppointmentAtPharmacist> getAppointmentsForUserId(@Param("id") Long id);
	
	@Query("Select e from AppointmentAtPharmacist e where e.pacient.id = :id and e.status = 'Odrzan'")
	List<AppointmentAtPharmacist> getAppointmentsHistoryForUserId(Long id);
	
	@Query(value="Select * from appointment_at_pharmacist where date =:date and pharmacist_id = :pharmacist", nativeQuery=true)
	List<AppointmentAtPharmacist> getAppointmentsForPharmacistByDate(Long pharmacist, String date);

}
