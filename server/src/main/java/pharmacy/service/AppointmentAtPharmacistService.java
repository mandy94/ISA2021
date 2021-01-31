package pharmacy.service;

import java.util.List;

import pharmacy.model.entity.DTOs.AppointmentAtPharmacistDTO;

public interface AppointmentAtPharmacistService {

	
	public List<AppointmentAtPharmacistDTO> getAppointmentsForUserId(Long id);

	public List<AppointmentAtPharmacistDTO> getAppointmentsForPharmacistByDate(Long pharmacist, String date);

	public List<AppointmentAtPharmacistDTO> getAppointmentsHistoryForUserId(Long id);
	
	public void makeReservationForConsultation(Long pharmacistId, Long pacientId, Long start, Long end, String date );

	public void cancelReservation(Long id);
}
