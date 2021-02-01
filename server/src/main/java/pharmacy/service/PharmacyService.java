package pharmacy.service;

import java.util.List;

import pharmacy.controller.dto.AdminDTO;
import pharmacy.controller.dto.PharmacyDTO;
import pharmacy.model.entity.Pharmacy;
import pharmacy.model.entity.User;
import pharmacy.model.entity.DTOs.AboutUserTimeTableDTO;

public interface PharmacyService {

	public List<User> getAllEmployeeByPharmacyId(Long id);
	public List<AboutUserTimeTableDTO> getAllDermatologsByPharmacyId(Long id);
	
	public List<User> getAllPharmacistsByPharmacyId(Long id);
	public List<User> getAvailablePharmacistByDateAndTime(String timeFrom, String timeTo, String date);
	
	public List<User> getAllAdministratorsByPharmacyId(Long id);
	public Pharmacy getPharmacyById(Long id);
	public List<Pharmacy> getAllPharmaciesByAvailablePharmacist(String start, String end, String date);
	public List<Pharmacy> getAll();
	public Pharmacy getById(Long id);
	public List<AboutUserTimeTableDTO> getAvailablePharmacistInPharmacyForDate(Long id , String start, String end, String date);
	public List<AboutUserTimeTableDTO> getAllDermatologs(Long id);
	public List<User> getAllPharmacists(Long id);
	public void addNewPharmacy(PharmacyDTO newPharmacy);
	public void savePharmacy(Pharmacy p);
	public List<AdminDTO> getWithouthAdmins();
	public List<Pharmacy> getPharamciesWhoHaveMedicationFromPrescription(Long id);
	
	
	
}
