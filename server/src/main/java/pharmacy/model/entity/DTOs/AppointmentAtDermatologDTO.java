package pharmacy.model.entity.DTOs;

import pharmacy.model.entity.DateAndTimeConverter;
import pharmacy.model.entity.appointments.AppointmentAtDermatolog;

public class AppointmentAtDermatologDTO {

    private Long id;
    private String name;
    private String doctor;
    private String startTime;
    private int price;
	private String endTime;
    private String date;
    private String status;
    
    public AppointmentAtDermatologDTO(AppointmentAtDermatolog app) {
    	this.id = app.getId();
    	this.doctor = app.getDermatolog().getFirstName() + " " +app.getDermatolog().getLastName();
    	this.price = app.getPrice();
    	this.startTime = DateAndTimeConverter.convertTimeFromDBFormat(app.getEndtime());
    	this.endTime = DateAndTimeConverter.convertTimeFromDBFormat(app.getStarttime());
    	this.date = app.getDate();
    	this.status = app.getStatus();
    	this.name = app.getName();
    	
    }
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
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
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getDermatolog() {
		return doctor;
	}
	public void setDermatolog(String dermatolog) {
		this.doctor = dermatolog;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDoctor() {
		return doctor;
	}
	public void setDoctor(String doctor) {
		this.doctor = doctor;
	}
   
}
