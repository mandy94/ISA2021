package pharmacy.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pharmacy.model.entity.DTOs.AppointmentAtPharmacistDTO;
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
	
	@GetMapping("/dermatolog/pharmacy/{id}/available")
	public List<AppointmentAtDermatolog> getAvailableAppointmentsAtDermatologByPharmacy(@PathVariable Long id) {
		return dermatologAppointmentService.getAvailableAppointmentsAtDermatologByPharmacy(id);
	}
	@GetMapping("/dermatolog/{id}/available")
	public List<AppointmentAtDermatolog> getAvailableAppointmentsAtDermatolog(@PathVariable Long id) {
		return dermatologAppointmentService.getAvailableAppointmentsAtDermatolog(id);
	}
	@GetMapping("/user/{id}/dermatolog/history")
	public List<AppointmentAtDermatolog> getUsersAppointmentHistoryAtDermatolog(@PathVariable Long id) {
		return dermatologAppointmentService.getAppointmentsHistoryForUserId(id);
	}
	@GetMapping("/user/{id}/dermatolog/reservation")
	public List<AppointmentAtDermatolog> getUsersAppointmentsAtDermatolog(@PathVariable Long id) {
		return dermatologAppointmentService.getAppointmentsForUserId(id);
	}
	@GetMapping("/user/{id}/pharmacy/{pharmacy}/dermatolog/reservation")
	public List<AppointmentAtDermatolog> getUsersAppointmentsAtDermatologInPharmacy(@PathVariable Long id, @PathVariable Long pharmacy) {
		return dermatologAppointmentService.getReservedAppointemntsAtDermatologInPharmacy(id, pharmacy);
	}
	@GetMapping("/user/{id}/pharmacist/history")
	public List<AppointmentAtPharmacist> getUsersAppointmentHistoryAtPharmacist(@PathVariable Long id) {
		return pharmacistAppointmentService.getAppointmentsHistoryForUserId(id);
	}
	@GetMapping("/user/{id}/pharmacist/reservation")
	public List<AppointmentAtPharmacistDTO> getUsersAppointmentsAtPharmacist(@PathVariable Long id) {
		List<AppointmentAtPharmacistDTO> dtoList = new ArrayList<>();
		for(AppointmentAtPharmacist app : pharmacistAppointmentService.getAppointmentsForUserId(id)){
			dtoList.add( new AppointmentAtPharmacistDTO(app));
		}
		return dtoList;
	}
	




}
