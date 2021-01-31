package pharmacy.service;

import java.util.List;

import pharmacy.model.entity.DTOs.AppointmentAtDermatologDTO;
import pharmacy.model.entity.appointments.AppointmentAtDermatolog;

public interface AppointmentAtDermatologService {

	
	public List<AppointmentAtDermatologDTO> getAppointmentsReservationForUserId(Long id);

	public List<AppointmentAtDermatologDTO> getAppointmentsHistoryForUserId(Long id);

	public List<AppointmentAtDermatologDTO> getAvailableAppointmentsAtDermatolog(Long id);

	public List<AppointmentAtDermatologDTO> getAvailableAppointmentsAtDermatologByPharmacy(Long id);

	public List<AppointmentAtDermatologDTO> getReservedAppointemntsAtDermatologInPharmacy(Long user, Long pharmacy);
}
