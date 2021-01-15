package pharmacy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import pharmacy.model.entity.appointments.AppointmentAtDermatolog;
import pharmacy.model.entity.appointments.AppointmentAtPharmacist;

public interface AppointmentAtPharmacistRepository extends JpaRepository<AppointmentAtPharmacist, Long> {
	
	@Query("Select e from AppointmentAtPharmacist e where e.pacient.id = :id")
	List<AppointmentAtPharmacist> getAppointmentsForUserId(@Param("id") Long id);

}
