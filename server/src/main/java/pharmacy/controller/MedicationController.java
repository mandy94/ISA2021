package pharmacy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pharmacy.model.entity.Medicine;
import pharmacy.service.MedicineService;

@RestController
@RequestMapping(value = "/api/medication", produces = MediaType.APPLICATION_JSON_VALUE)
public class MedicationController {

	@Autowired
	private MedicineService medicineService;
	
	@GetMapping("/test")
	public String testMed() {
		
		return "test response done ok";
	}

}