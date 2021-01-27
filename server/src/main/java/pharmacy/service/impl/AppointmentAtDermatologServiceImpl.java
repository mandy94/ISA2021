package pharmacy.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pharmacy.model.entity.appointments.AppointmentAtDermatolog;
import pharmacy.repository.AppointmentAtDermatologRepository;
import pharmacy.service.AppointmentAtDermatologService;

@Service
public class AppointmentAtDermatologServiceImpl implements AppointmentAtDermatologService{
	@Autowired
	private AppointmentAtDermatologRepository dermatologApprepo;
	@Override
	public List<AppointmentAtDermatolog> getAppointmentsForUserId(Long id) {
		return dermatologApprepo.getAppointmentsForUserId(id);
	}
	@Override
	public List<AppointmentAtDermatolog> getAppointmentsHistoryForUserId(Long id) {
		return dermatologApprepo.getAppointmentsHistoryForUserId(id);
	}
	@Override
	public List<AppointmentAtDermatolog> getAvailableAppointmentsAtDermatolog(Long id) {
		return dermatologApprepo.getAvailableAppointemntsAtDermatolog(id);
	}
	@Override
	public List<AppointmentAtDermatolog> getAvailableAppointmentsAtDermatologByPharmacy(Long id) {
		return dermatologApprepo.getAvailableAppointmentsAtDermatologByPharmacy(id);
	}
	@Override
	public List<AppointmentAtDermatolog> getReservedAppointemntsAtDermatologInPharmacy(Long userId, Long pharmacyId) {
		return dermatologApprepo.getReservedAppointemntsAtDermatologInPharmacy(userId, pharmacyId);
	}
	

}
