package pharmacy.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pharmacy.model.entity.Medicine;
import pharmacy.repository.MedicineRepository;
import pharmacy.service.MedicineService;
@Service
public class MedicineServiceImpl implements MedicineService{
	@Autowired
	private MedicineRepository medicineRepository;

	@Override
	public List<Medicine> findAllMedications() {
		return medicineRepository.findAll();
	}
	
	

}
