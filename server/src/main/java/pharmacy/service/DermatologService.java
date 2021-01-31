package pharmacy.service;

import java.util.List;

import pharmacy.model.entity.BusinessHours;
import pharmacy.model.entity.User;
import pharmacy.model.entity.DTOs.AboutUserTimeTableDTO;

public interface DermatologService {

	List<User> getAll();
	
	List<BusinessHours> getDermatologBusinessHours( Long id);

	List<BusinessHours> getDermatologBusinessHoursByPharmacy(Long dermatolog, Long pharmacy);

	void makeReservationForAppointment(Long appointmentId, Long pacientId);

}
