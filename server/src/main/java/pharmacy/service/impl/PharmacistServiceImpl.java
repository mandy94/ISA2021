package pharmacy.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pharmacy.model.entity.User;
import pharmacy.repository.PharmacistRepository;
import pharmacy.service.PharmacistService;
@Service
public class PharmacistServiceImpl implements PharmacistService{

	@Autowired
	private PharmacistRepository pharmacistRepo;

	@Override
	public List<User> getAll() {
		return pharmacistRepo.findAll();
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
}
