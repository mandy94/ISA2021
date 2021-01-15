package pharmacy.service;

import java.util.List;

import pharmacy.model.entity.appointments.AppointmentAtDermatolog;

public interface AppointmentAtDermatologService {

	
	public List<AppointmentAtDermatolog> getAppointmentsForUserId(Long id);
}
