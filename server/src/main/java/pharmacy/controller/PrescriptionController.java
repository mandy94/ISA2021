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

import pharmacy.controller.dto.AdminDTO;
import pharmacy.model.auth.AdminRequest;
import pharmacy.model.entity.Prescription;
import pharmacy.model.entity.User;
import pharmacy.service.AdminService;
import pharmacy.service.PrescriptionService;
import pharmacy.service.UserService;

@RestController
@RequestMapping(value = "/api/prescription", produces = MediaType.APPLICATION_JSON_VALUE)
public class PrescriptionController {

	@Autowired
	private PrescriptionService prescriptionService;

	@GetMapping("/pacient/{id}")
	public List<Prescription> getMyPrescriptions(@PathVariable Long id) {
		return prescriptionService.getMyPrescriptions(id);
	}

	

}
