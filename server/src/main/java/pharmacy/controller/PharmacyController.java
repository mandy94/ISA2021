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
import pharmacy.controller.dto.PharmacyDTO;
import pharmacy.model.entity.Pharmacy;
import pharmacy.model.entity.User;
import pharmacy.model.entity.DTOs.AboutUserTimeTableDTO;
import pharmacy.model.entity.helper.DateAndTime;
import pharmacy.service.PharmacyService;

@RestController
@RequestMapping(value = "/api/pharmacy", produces = MediaType.APPLICATION_JSON_VALUE)
public class PharmacyController {

	@Autowired
	private PharmacyService pharmacyService;
	
	
	@GetMapping("/all")
	public List<Pharmacy> printAllPharmacy() {
		return pharmacyService.getAll();
	}

	@GetMapping("/{id}")
	public Pharmacy getById(@PathVariable Long id){
		return pharmacyService.getById(id);
	}

	@GetMapping("/without/admin")
	public List<AdminDTO> getWithouthAdmins() {
		return pharmacyService.getWithouthAdmins();
	}
	
	@GetMapping("/{id}/employees/all")
	public List<User> getAllEmployeeInPharmacy(@PathVariable Long id) {
		return pharmacyService.getAllEmployeeByPharmacyId(id);
	}
	@GetMapping("/{id}/dermatologs/all")
	public List<AboutUserTimeTableDTO> getAllDermatologsInPharmacy(@PathVariable Long id) {
		return pharmacyService.getAllDermatologsByPharmacyId(id);
		
	}
	@GetMapping("/{id}/pharmacists/all")
	public List<User> getAllPharmacistsInPharmacy(@PathVariable Long id) {
		return pharmacyService.getAllPharmacistsByPharmacyId(id);
	}
	@PostMapping("/{id}/available/pharmacists")
	public List<AboutUserTimeTableDTO> getAvailablePharmacistsForDateInPharmacy(@PathVariable Long id, @RequestBody DateAndTime requests) {
		return pharmacyService.getAvailablePharmacistInPharmacyForDate(id, requests.start, requests.end, requests.date.substring(0,10));
	}
	
	@PostMapping("/available")
	public List<Pharmacy> getAvailablePharmacyForAvailablePharmacistForDate(@RequestBody DateAndTime requests) {		
		return pharmacyService.getAllPharmaciesByAvailablePharmacist(requests.start, requests.end, requests.date.substring(0,10));
	}

	@GetMapping("/search/medication/{id}")
	public List<Pharmacy> getPharmaciesWhoHaveMedicationFromPrescrption(@PathVariable Long id)
	{
		return pharmacyService.getPharamciesWhoHaveMedicationFromPrescription(id);
	}
  @PostMapping("/add")
	public List<Pharmacy> addNewPharmacy(@RequestBody PharmacyDTO newPharmacy) {	
		pharmacyService.addNewPharmacy(newPharmacy);
		return  pharmacyService.getAll();
	}

	
}
