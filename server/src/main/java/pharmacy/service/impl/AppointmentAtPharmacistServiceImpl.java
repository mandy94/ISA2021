package pharmacy.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pharmacy.model.entity.appointments.AppointmentAtPharmacist;
import pharmacy.repository.AppointmentAtPharmacistRepository;
import pharmacy.service.AppointmentAtPharmacistService;

@Service
public class AppointmentAtPharmacistServiceImpl implements AppointmentAtPharmacistService{
	@Autowired
	private AppointmentAtPharmacistRepository pharmacistApprepo;
	@Override
	public List<AppointmentAtPharmacist> getAppointmentsForUserId(Long id) {
		return pharmacistApprepo.getAppointmentsForUserId(id);
	}
	

}
