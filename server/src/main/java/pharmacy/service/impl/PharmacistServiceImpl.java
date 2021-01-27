package pharmacy.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pharmacy.model.entity.Pharmacy;
import pharmacy.model.entity.User;
import pharmacy.repository.PharmacistRepository;
import pharmacy.service.PharmacistService;
@Service
public class PharmacistServiceImpl implements PharmacistService{

	@Autowired
	private PharmacistRepository pharmacistRepo;

	@Override
	public List<User> getAll() {
		return pharmacistRepo.getAll();
	}

	@Override
	public List<User> getByDateAndTime(String date, String time) {
		return null;
	//	return pharmacistRepo.findByDateAndTime( date, time);
	}

	@Override
	public List<User> getByPharmacyId(Long id) {
		return null;
	//	return pharmacistRepo.findByPharmacyId( id);
	}

	@Override
	public User getById(Long id) {
		return pharmacistRepo.findById(id).orElse(null);
		}
	private static boolean isAdded(List<Pharmacy> list, Pharmacy element) {
		for(Pharmacy ph: list) {
			if(ph.getId() == element.getId())
				return true;
		}
		return false;
	}
	
	@Override
	public List<Pharmacy> getAllPharmaciesByAvailablePharmacistList( List<User> pharmacists){
		List<Pharmacy> result = new ArrayList<Pharmacy>();
		for(User user: pharmacists){			
			for(Pharmacy pharmacy: getPharmaciesByPharmacistId(user.getId())) {
				System.out.println(user.getFirstName());
				if(!isAdded(result, pharmacy)){
					result.add(pharmacy);
				}
			}				
		}
		return result;
	}
	@Override
	public List<Pharmacy> getPharmaciesByPharmacistId(Long id) {
		return pharmacistRepo.findById(id).orElse(new User()).getPharmacy();
	}
}
