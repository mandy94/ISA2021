package pharmacy.model.entity.appointments;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import pharmacy.model.entity.User;

@Entity
public class AppointmentAtPharmacist {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private User pharmacist;
    @JsonIgnore
    @ManyToOne(optional = true, fetch = FetchType.LAZY)
    private User pacient;
    private Long startTime;
 
	private Long endTime;
    private String date;
    private String status;
   
    
    public Long getStartTime() {
 		return startTime;
 	}
 	public void setStartTime(Long startTime) {
 		this.startTime = startTime;
 	}
 	public Long getEndTime() {
 		return endTime;
 	}
 	public void setEndTime(Long endTime) {
 		this.endTime = endTime;
 	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public User getPharmacist() {
		return pharmacist;
	}
	public void setPharmacist(User pharmacist) {
		this.pharmacist = pharmacist;
	}
	public User getPacient() {
		return pacient;
	}
	public void setPacient(User pacient) {
		this.pacient = pacient;
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
}
