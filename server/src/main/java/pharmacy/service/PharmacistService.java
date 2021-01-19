package pharmacy.service;

import java.util.List;

import pharmacy.model.entity.Pharmacy;
import pharmacy.model.entity.User;

public interface PharmacistService {

	public List<User> getAll();
	public List<User> getByDateAndTime(String date, String time);
	public List<User> getByPharmacyId(Long id); 
	public User getById(Long id);
	public List<Pharmacy> getPharmaciesByPharmacistId(Long id);
	List<Pharmacy> getAllPharmaciesByAvailablePharmacistList(List<User> pharmacists);
}
