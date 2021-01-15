package pharmacy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pharmacy.model.entity.appointments.AppointmentAtDermatolog;
import pharmacy.model.entity.appointments.AppointmentAtPharmacist;
import pharmacy.service.AppointmentAtDermatologService;
import pharmacy.service.AppointmentAtPharmacistService;


//Kontroler zaduzen za autentifikaciju korisnika
@RestController
@RequestMapping(value = "/api/appointments", produces = MediaType.APPLICATION_JSON_VALUE)
public class AppointmentsController {
	
	@Autowired
	private AppointmentAtDermatologService dermatologAppointmentService;
	@Autowired
	private AppointmentAtPharmacistService pharmacistAppointmentService;
	
	@GetMapping("/user/{id}/dermatolog")
	public List<AppointmentAtDermatolog> getUsersAppointmentsAtDermatolog(@PathVariable Long id) {
		return dermatologAppointmentService.getAppointmentsForUserId(id);
	}
	@GetMapping("/user/{id}/pharmacist")
	public List<AppointmentAtPharmacist> getUsersAppointmentsAtPharmacist(@PathVariable Long id) {
		return pharmacistAppointmentService.getAppointmentsForUserId(id);
	}



}
