package pharmacy.service;

import java.util.List;

import pharmacy.model.entity.Pharmacy;
import pharmacy.model.entity.User;

public interface PharmacyService {

	public List<User> getAllEmployeeByPharmacyId(Long id);
	public List<User> getAllDermatologsByPharmacyId(Long id);
	
	public List<User> getAllPharmacistsByPharmacyId(Long id);
	public List<User> getAvailablePharmacistByDateAndTime( String date, String time);
	
	public List<User> getAllAdministratorsByPharmacyId(Long id);
	public Pharmacy getPharmacyById(Long id);
	
	
	
}
