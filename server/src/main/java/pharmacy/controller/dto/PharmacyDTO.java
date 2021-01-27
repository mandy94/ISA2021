package pharmacy.controller.dto;

import java.util.ArrayList;
import java.util.List;

import pharmacy.model.entity.User;

public class PharmacyDTO {
	private String name;
	private String adress;	
	private List<User> employee = new ArrayList<User>(); // dermatologs, phramcist and admin
	private Long adminId ;
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAdress() {
		return adress;
	}

	public void setAdress(String adress) {
		this.adress = adress;
	}

	
	public List<User> getEmployee() {
		return employee;
	}

	public void setEmployee(List<User> employee) {
		this.employee = employee;
	}

	public Long getAdminId() {
		return adminId;
	}

	public void setAdminId(Long adminId) {
		this.adminId = adminId;
	}

}
