package pharmacy.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pharmacy.model.entity.Pharmacy;
import pharmacy.model.entity.User;
import pharmacy.repository.OfferRepository;
import pharmacy.repository.PharmacyDetailsRepository;
import pharmacy.repository.PharmacyEmployeeRepository;
import pharmacy.service.OfferService;
import pharmacy.service.PharmacyService;
@Service
public class PharmacyServiceImpl implements PharmacyService{

	@Autowired
	private PharmacyEmployeeRepository enployeeRepository;

	@Autowired
	private PharmacyDetailsRepository aboutPharmacyRepository;
	
	@Override
	public List<User> getAllEmployeeByPharmacyId(Long id) {
		 return enployeeRepository.getAllByPharmacyId(id);
	}

	@Override
	public List<User> getAllDermatologsByPharmacyId(Long id) {
		return enployeeRepository.getAllDermatologsByPharmacyId(id);
	}

	@Override
	public List<User> getAllPharmacistsByPharmacyId(Long id) {
		return enployeeRepository.getAllPharmacistsByPharmacyId(id);
	}

	@Override
	public List<User> getAllAdministratorsByPharmacyId(Long id) {
		return enployeeRepository.getAllAdministratorsByPharmacyId(id);
	}

	@Override
	public List<User> getAvailablePharmacistByDateAndTime(String date, String time) {
		// TODO Auto-generated method stub
		return null;
		
	}

	@Override
	public Pharmacy getPharmacyById(Long id) {
		return aboutPharmacyRepository.getPharmacyById(id);
	}
}
