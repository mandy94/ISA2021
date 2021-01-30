package pharmacy.model.entity.DTOs;

import pharmacy.model.entity.Pharmacy;
import pharmacy.model.entity.User;

public class AboutUserTimeTableDTO {
	private SimpleUserDTO employee;
 	private String startTime; // represents format in seconds
 	private String endTime;
 	private Pharmacy at_pharmacy;
 	
	public SimpleUserDTO getEmployee() {
		return employee;
	}
	public void setEmployeeAsDTO(User employee) {
		this.employee = new SimpleUserDTO();
		this.employee.setEmail(employee.getEmail());
		this.employee.setFirstName(employee.getFirstName());
		this.employee.setLastName(employee.getLastName());
		this.employee.setId(employee.getId());
		this.employee.setUsername(employee.getUsername());
	}
	
	public Pharmacy getAt_pharmacy() {
		return at_pharmacy;
	}
	public void setAt_pharmacy(Pharmacy at_pharmacy) {
		this.at_pharmacy = at_pharmacy;
	}
	@Override
	public String toString() {
		return "AboutUserTimeTableDTO [employee=" + employee + ", startTime=" + startTime + ", endTime=" + endTime
				+ ", at_pharmacy=" + at_pharmacy + "]";
	}
	public String getStartTime() {
		return startTime;
	}
	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}
	public String getEndTime() {
		return endTime;
	}
	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

}
