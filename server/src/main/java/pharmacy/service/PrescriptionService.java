package pharmacy.service;

import java.util.List;

import pharmacy.model.entity.Prescription;

public interface PrescriptionService {

	List<Prescription> getMyPrescriptions(Long id);

}
