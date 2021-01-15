package pharmacy.service;

import java.util.List;


import pharmacy.model.entity.appointments.AppointmentAtPharmacist;

public interface AppointmentAtPharmacistService {

	
	public List<AppointmentAtPharmacist> getAppointmentsForUserId(Long id);
}
