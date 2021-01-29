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

import pharmacy.controller.dto.CreateMedicationDTO;
import pharmacy.model.entity.Discount;
import pharmacy.model.entity.Ingredient;
import pharmacy.model.entity.Manufacturer;
import pharmacy.model.entity.Medicine;
import pharmacy.service.MedicineService;

@RestController
@RequestMapping(value = "/api/medication", produces = MediaType.APPLICATION_JSON_VALUE)
public class MedicationController {

	@Autowired
	private MedicineService medicineService;
	
	
	@GetMapping("/all")
	public List<Medicine> getAllMeds() {
		
		return medicineService.findAllMedications();
	}
	@GetMapping("/manufacturers/all")
	public List<Manufacturer> getAllManufacturers() {
		
		return medicineService.findAllManufacturers();
	}
	@GetMapping("/ingridients/all")
	public List<Ingredient> getAllIngridients() {		
		return medicineService.findAllIngrideints();
	}
	@GetMapping("/discounts/all")
	public List<Discount> getASllDiscounts() {		
		return medicineService.findAllDisocunts();
	}
	
	
	@GetMapping("/pharmacy/{id}")
	public List<Medicine> getAllMedications(@PathVariable Long id) {
		
		return medicineService.findAllMedicationsByPharmacyId(id);
	}
	
	@PostMapping("/create")
	public List<Medicine> createMed(@RequestBody CreateMedicationDTO med){
		medicineService.createNewMedicine(med);
		return medicineService.findAllMedications();
	
	}
	@DeleteMapping("/delete/{id}")
	public List<Medicine> deleteMed(@PathVariable Long id) {
		
		 medicineService.deleteMedicationById(id);
		 return medicineService.findAllMedications();
	}

}
