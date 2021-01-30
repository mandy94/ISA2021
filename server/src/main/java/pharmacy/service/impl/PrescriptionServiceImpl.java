package pharmacy.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pharmacy.model.entity.Prescription;
import pharmacy.repository.PrescriptionRepository;
import pharmacy.service.PrescriptionService;

@Service
public class PrescriptionServiceImpl implements PrescriptionService {

	@Autowired
	private PrescriptionRepository prescriptionRepo;
	@Override
	public List<Prescription> getMyPrescriptions(Long id) {
		return prescriptionRepo.findByMyId(id);
	}

  





}
