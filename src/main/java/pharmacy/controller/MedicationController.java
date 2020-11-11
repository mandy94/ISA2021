package pharmacy.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pharmacy.model.entity.Medicine;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class MedicationController {

	
	@GetMapping("/med")
	//@PreAuthorize("hasRole('ADMIN')")
	public Medicine testMed() {
		
		return new Medicine();
	}

}
