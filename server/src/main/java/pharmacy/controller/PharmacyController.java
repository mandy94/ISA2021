package pharmacy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pharmacy.model.entity.Pharmacy;
import pharmacy.model.entity.User;
import pharmacy.repository.PharmacistRepository;
import pharmacy.service.PharmacistService;
import pharmacy.service.PharmacyService;

@RestController
@RequestMapping(value = "/api/pharmacy", produces = MediaType.APPLICATION_JSON_VALUE)
public class PharmacyController {

	@Autowired
	private PharmacyService pharmacyService;
	@Autowired
	private PharmacistService pharamcistService;
	
	@GetMapping("/{id}/employees/all")
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
	@GetMapping("/available/pharmacists/{start}/{end}/{date}")
	public List<User> getAvailablePharmacistsForDate(@PathVariable String start,@PathVariable String  end,@PathVariable String date) {
		  
		return pharmacyService.getAvailablePharmacistByDateAndTime( start, end, date);
	}
	
	@GetMapping("/available/{start}/{end}/{date}")
	public List<Pharmacy> getAvailablePharmacyForAvailablePharmacistOnDate(@PathVariable String start,@PathVariable String  end,@PathVariable String date) {
		
		return pharmacyService.getAllPharmaciesByAvailablePharmacist( start, end, date);
	}

	
	
}
