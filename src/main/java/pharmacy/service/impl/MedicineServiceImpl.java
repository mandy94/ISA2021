package pharmacy.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pharmacy.repository.MedicineRepository;
import pharmacy.service.MedicineService;
@Service
public class MedicineServiceImpl implements MedicineService{
	@Autowired
	private MedicineRepository medicineRepository;
	
	

}
