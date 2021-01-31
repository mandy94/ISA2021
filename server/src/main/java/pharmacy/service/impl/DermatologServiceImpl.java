package pharmacy.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pharmacy.model.entity.BusinessHours;
import pharmacy.model.entity.User;
import pharmacy.model.entity.appointments.AppointmentAtDermatolog;
import pharmacy.repository.AppointmentAtDermatologRepository;
import pharmacy.repository.BusinessHoursRepository;
import pharmacy.repository.DermatologRepository;
import pharmacy.service.DermatologService;
import pharmacy.service.UserService;
@Service
public class DermatologServiceImpl implements DermatologService{
	@Autowired
	private AppointmentAtDermatologRepository appointmtRepo;
	@Autowired
	private BusinessHoursRepository businessHourRepo;
	@Autowired
	private DermatologRepository dermatologRepo;
	@Autowired
	private UserService userService;
	@Override
	public List<BusinessHours> getDermatologBusinessHoursByPharmacy(Long dermatolog, Long pharmacy) {
		
		return businessHourRepo.getBusinessHoursForEmployeeInPharmacy(dermatolog, pharmacy);
	}
	@Override
	public List<BusinessHours> getDermatologBusinessHours(Long id) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<User> getAll() {
		return dermatologRepo.getAll();
	}
	@Override
	public void makeReservationForAppointment(Long appointmentId, Long pacientId) {
		AppointmentAtDermatolog app = appointmtRepo.findById(appointmentId).orElse(null);
		User pacient = userService.findById(pacientId);
		app.setPacient(pacient);
		app.setStatus("Rezervisan");
		appointmtRepo.save(app);
		
	}
}

