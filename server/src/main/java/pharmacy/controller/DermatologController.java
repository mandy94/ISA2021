package pharmacy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pharmacy.model.entity.User;
import pharmacy.service.AppointmentAtDermatologService;
import pharmacy.service.DermatologService;

@RestController
@RequestMapping(value = "/api/dermatolog", produces = MediaType.APPLICATION_JSON_VALUE)
public class DermatologController {

	@Autowired
	private AppointmentAtDermatologService appointmentService;
	
	@Autowired
	private DermatologService dermatologService;
	
	@GetMapping("/all")
	public List<User> getAllPharmacists() {
		return dermatologService.getAll();
	}
}
