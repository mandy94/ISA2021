package pharmacy.service;

import java.util.List;


import pharmacy.model.entity.appointments.AppointmentAtPharmacist;

public interface AppointmentAtPharmacistService {

	
	public List<AppointmentAtPharmacist> getAppointmentsForUserId(Long id);

	public List<AppointmentAtPharmacist> getAppointmentsHistoryForUserId(Long id);
	
	public void makeReservationForConsultation(Long pharmacistId, Long pacientId, Long start, Long end, String date );

	public void cancelReservation(Long id);
}
