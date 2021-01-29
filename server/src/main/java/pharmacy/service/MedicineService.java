package pharmacy.service;

import java.util.List;

import pharmacy.controller.dto.CreateMedicationDTO;
import pharmacy.model.entity.Discount;
import pharmacy.model.entity.Ingredient;
import pharmacy.model.entity.Manufacturer;
import pharmacy.model.entity.Medicine;

public interface MedicineService {

	List<Medicine> findAllMedications();

	List<Medicine> findAllMedicationsByPharmacyId(Long id);

	void deleteMedicationById(Long id);

	void createNewMedicine(CreateMedicationDTO med);

	List<Manufacturer> findAllManufacturers();

	List<Ingredient> findAllIngrideints();

	List<Discount> findAllDisocunts();


}
