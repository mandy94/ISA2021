package pharmacy.service;

import java.util.List;

import pharmacy.model.entity.appointments.AppointmentAtDermatolog;

public interface AppointmentAtDermatologService {

	
	public List<AppointmentAtDermatolog> getAppointmentsForUserId(Long id);

	public List<AppointmentAtDermatolog> getAppointmentsHistoryForUserId(Long id);

	public List<AppointmentAtDermatolog> getAvailableAppointmentsAtDermatolog(Long id);

	public List<AppointmentAtDermatolog> getAvailableAppointmentsAtDermatologByPharmacy(Long id);

	public List<AppointmentAtDermatolog> getReservedAppointemntsAtDermatologInPharmacy(Long user, Long pharmacy);
}
