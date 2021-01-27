package pharmacy.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pharmacy.controller.dto.AdminDTO;
import pharmacy.model.entity.User;
import pharmacy.repository.AdminRepository;
import pharmacy.repository.PharmacyDetailsRepository;
import pharmacy.service.AdminService;
import pharmacy.service.AuthorityService;

@Service
public class AdminServiceImpl implements AdminService {

  @Autowired
  private AdminRepository adminRepo;
  
  @Autowired
  private PharmacyDetailsRepository pharmacyRepo;
  
  @Autowired
  private AuthorityService authService;

	@Override
	public List<AdminDTO> getAll() {
		List<User> result = adminRepo.getAll();
		List<AdminDTO> resultDTO = new ArrayList<AdminDTO>();
		for(User u : result) {
			AdminDTO admin = new AdminDTO();
			admin.setEmail(u.getEmail());
			admin.setFirstName(u.getFirstName());
			admin.setLastName(u.getLastName());
			admin.setId(u.getId());
			admin.setUsername(u.getUsername());
			admin.setDedicated_pharmacy(pharmacyRepo.getByAdminId(u.getId()));
			
			resultDTO.add(admin);
		}
		return resultDTO;
	}

	@Override
	public List<User> getAdminsWithoutPharmacy() {
		return adminRepo.getAdminsWithouthPharmacy();
	}






}
