package pharmacy.service;

import java.util.List;

import pharmacy.controller.dto.AdminDTO;
import pharmacy.model.entity.User;

public interface AdminService {
	List<AdminDTO> getAll();
	List<User> getAdminsWithoutPharmacy();
}
