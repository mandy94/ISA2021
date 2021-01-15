package pharmacy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pharmacy.model.entity.User;
import pharmacy.service.PharmacyService;

@RestController
@RequestMapping(value = "/api/pharmacy", produces = MediaType.APPLICATION_JSON_VALUE)
public class PharmacyController {

	@Autowired
	private PharmacyService pharmacyService;
	
	@GetMapping("/{id}/employee")
	public List<User> printAllEmployee(@PathVariable Long id) {
		return pharmacyService.getAllEmployeeByPharmacyId(id);
	}
	@GetMapping("/{id}/dermatologs/all")
	public List<User> printAllDermatologs(@PathVariable Long id) {
		return pharmacyService.getAllDermatologsByPharmacyId(id);
	}
	@GetMapping("/{id}/pharmacists/all")
	public List<User> printAllPharmacist(@PathVariable Long id) {
		return pharmacyService.getAllPharmacistsByPharmacyId(id);
	}
}
