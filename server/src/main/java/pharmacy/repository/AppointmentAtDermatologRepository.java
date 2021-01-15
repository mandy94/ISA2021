package pharmacy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import pharmacy.model.entity.appointments.AppointmentAtDermatolog;

public interface AppointmentAtDermatologRepository extends JpaRepository<AppointmentAtDermatolog, Long> {
	
	@Query("Select e from AppointmentAtDermatolog e where e.pacient.id = :id")
	List<AppointmentAtDermatolog> getAppointmentsForUserId(@Param("id") Long id);

}
