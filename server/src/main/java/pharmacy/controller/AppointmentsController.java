package pharmacy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pharmacy.model.entity.DTOs.AppointmentAtDermatologDTO;
import pharmacy.model.entity.DTOs.AppointmentAtPharmacistDTO;
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
	public List<AppointmentAtDermatologDTO> getAvailableAppointmentsAtDermatologByPharmacy(@PathVariable Long id) {
		return dermatologAppointmentService.getAvailableAppointmentsAtDermatologByPharmacy(id);
	}
	@GetMapping("/dermatolog/{id}/available")
	public List<AppointmentAtDermatologDTO> getAvailableAppointmentsAtDermatolog(@PathVariable Long id) {
		return dermatologAppointmentService.getAvailableAppointmentsAtDermatolog(id);
	}
	
	@GetMapping("/user/{id}/dermatolog/history")
	public List<AppointmentAtDermatologDTO> getUsersAppointmentHistoryAtDermatolog(@PathVariable Long id) {
		return dermatologAppointmentService.getAppointmentsHistoryForUserId(id);
	}
	@GetMapping("/user/{id}/dermatolog/reservation")
	public List<AppointmentAtDermatologDTO> getUsersAppointmentsReservationAtDermatolog(@PathVariable Long id) {
		return dermatologAppointmentService.getAppointmentsReservationForUserId(id);
	}
	@GetMapping("/user/{id}/pharmacy/{pharmacy}/dermatolog/reservation")
	public List<AppointmentAtDermatologDTO> getUsersAppointmentsAtDermatologInPharmacy(@PathVariable Long id, @PathVariable Long pharmacy) {
		return dermatologAppointmentService.getReservedAppointemntsAtDermatologInPharmacy(id, pharmacy);
	}
	@GetMapping("/user/{id}/pharmacist/history")
	public List<AppointmentAtPharmacistDTO> getUsersAppointmentHistoryAtPharmacist(@PathVariable Long id) {
		return pharmacistAppointmentService.getAppointmentsHistoryForUserId(id);
	}
	@GetMapping("/user/{id}/pharmacist/reservation")
	public List<AppointmentAtPharmacistDTO> getUsersAppointmentsAtPharmacist(@PathVariable Long id) {
		return pharmacistAppointmentService.getAppointmentsForUserId(id);
	}
	@PostMapping("/date/pharmacist/{id}/all")
	public List<AppointmentAtPharmacistDTO> getAppointmentsAtPharamacistByDate(@PathVariable Long id, @RequestBody String date){
		return pharmacistAppointmentService.getAppointmentsForPharmacistByDate(id, date);
	}




}
