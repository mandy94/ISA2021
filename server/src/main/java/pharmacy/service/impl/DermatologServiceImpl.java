package pharmacy.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pharmacy.model.entity.BusinessHours;
import pharmacy.model.entity.User;
import pharmacy.repository.AppointmentAtDermatologRepository;
import pharmacy.repository.BusinessHoursRepository;
import pharmacy.repository.DermatologRepository;
import pharmacy.service.DermatologService;
@Service
public class DermatologServiceImpl implements DermatologService{
	@Autowired
	private AppointmentAtDermatologRepository appointmtRepo;
	@Autowired
	private BusinessHoursRepository businessHourRepo;
	@Autowired
	private DermatologRepository dermatologRepo;
	@Override
	public List<BusinessHours> getDermatologBusinessHoursByPharmacy(Long dermatolog, Long pharmacy) {
		
		return businessHourRepo.getBusinessHoursForDermatologInPharmacy(dermatolog, pharmacy);
	}
	@Override
	public List<BusinessHours> getDermatologBusinessHours(Long id) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<User> getAll() {
		return dermatologRepo.getAll();
	}
}

