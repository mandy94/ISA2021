package pharmacy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pharmacy.model.entity.DateAndTimeConverter;
import pharmacy.model.entity.User;
import pharmacy.model.entity.DTOs.AppointmentAtPharmacistDTO;
import pharmacy.model.entity.helper.ConsultationReservationRequest;
import pharmacy.service.AppointmentAtPharmacistService;
import pharmacy.service.PharmacistService;

@RestController
@RequestMapping(value = "/api/pharmacist", produces = MediaType.APPLICATION_JSON_VALUE)
public class PharmacistController {

	@Autowired
	private PharmacistService pharmacistService;
	@Autowired
	private AppointmentAtPharmacistService pharmacistAppointmentService;
	
	@GetMapping("/all")
	public List<User> getAllPharmacists() {
		return pharmacistService.getAll();
	}
	
	
	@GetMapping("/reservation/user/{id}")
	public List<AppointmentAtPharmacistDTO> getReservedConsultationForUser(@PathVariable Long id){
		return pharmacistAppointmentService.getAppointmentsForUserId(id);
	}
	@DeleteMapping("/cancel/reservation/{id}")
	public List<AppointmentAtPharmacistDTO> cancelAppointment(@PathVariable Long id) {
		 // TODO email confirmation
		pharmacistAppointmentService.cancelReservation(id);
		return pharmacistAppointmentService.getAppointmentsForUserId(id);
	}
	@PostMapping("/create/reservation")
	public void makeReservationForConsultation(@RequestBody ConsultationReservationRequest requests) {
		
		pharmacistAppointmentService.makeReservationForConsultation(
				requests.pharmacistId,
				requests.pacientId,
				DateAndTimeConverter.convertTimeToDBFormat(requests.start),
				DateAndTimeConverter.convertTimeToDBFormat(requests.end),
				DateAndTimeConverter.convertDateToDBFormat(requests.date)				
				);
	}


}
