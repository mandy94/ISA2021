package pharmacy.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pharmacy.model.entity.DateAndTimeConverter;
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
	private PharmacyEmployeeRepository employeeRepository;

	@Autowired
	private PharmacyDetailsRepository aboutPharmacyRepository;
	
	@Override
	public List<User> getAllEmployeeByPharmacyId(Long id) {
		 return employeeRepository.getAllByPharmacyId(id);
	}

	@Override
	public List<User> getAllDermatologsByPharmacyId(Long id) {
		return employeeRepository.getAllDermatologsByPharmacyId(id);
	}

	@Override
	public List<User> getAllPharmacistsByPharmacyId(Long id) {
		return employeeRepository.getAllPharmacistsByPharmacyId(id);
	}

	@Override
	public List<User> getAllAdministratorsByPharmacyId(Long id) {
		return employeeRepository.getAllAdministratorsByPharmacyId(id);
	}

	@Override
	public List<User> getAvailablePharmacistByDateAndTime(String timeFrom, String timeTo, String date) {
		return employeeRepository.getAllAvailablePharamacistForDateAndTime( DateAndTimeConverter.convertTimeToDBFormat(timeFrom), 
				DateAndTimeConverter.convertTimeToDBFormat(timeTo), DateAndTimeConverter.convertDateToDBFormat(date));
	}

	@Override
	public Pharmacy getPharmacyById(Long id) {
		return aboutPharmacyRepository.getPharmacyById(id);
	}

	@Override
	public List<Pharmacy> getAllPharmaciesByAvailablePharmacist(String timeFrom, String timeTo, String date) {
		return aboutPharmacyRepository.getAllPharmaciesByAvailablePharmacist(DateAndTimeConverter.convertTimeToDBFormat(timeFrom), 
				DateAndTimeConverter.convertTimeToDBFormat(timeTo),DateAndTimeConverter.convertDateToDBFormat(date));
	}
}
