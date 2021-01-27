package pharmacy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pharmacy.controller.dto.AdminDTO;
import pharmacy.model.auth.AdminRequest;
import pharmacy.model.entity.User;
import pharmacy.service.AdminService;
import pharmacy.service.UserService;

@RestController
@RequestMapping(value = "/api/admin", produces = MediaType.APPLICATION_JSON_VALUE)
public class AdminController {

	@Autowired
	private AdminService adminservice;
	@Autowired
	private UserService userService;
	@GetMapping("/all")
	public List<AdminDTO> getAllAdmin() {
		return adminservice.getAll();
	}

	@GetMapping("/withouth/pharmacy")
	public List<User> getFreeAdmins() {
		return adminservice.getAdminsWithoutPharmacy();
	}

	@PostMapping("/add")
	public List<AdminDTO> addAdmin( @RequestBody AdminRequest newAdmin){
		userService.saveAdmin(newAdmin);
		return adminservice.getAll();
	}

}
