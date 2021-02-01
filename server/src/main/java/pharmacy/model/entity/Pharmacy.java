package pharmacy.model.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import pharmacy.model.entity.appointments.AppointmentAtDermatolog;

@Entity
public class Pharmacy {

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column
	private String name;
	@Column
	private String adress;
	private String city;
	private float rating;
	
	@OneToMany
	private List<AppointmentAtDermatolog> appointments_at_dermatolog = new ArrayList<AppointmentAtDermatolog>();
	
	@ManyToMany
	private List<User> employee = new ArrayList<User>(); // dermatologs, phramcist and admin

	@OneToMany
	private List<StockItem> has_medicines = new ArrayList<>();
	
	@JsonIgnore
	@OneToMany(cascade = CascadeType.MERGE)
	private List<User> admins = new ArrayList<User>() ;
	
	public Pharmacy() {}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public List<User> getEmployee() {
		return employee;
	}
	public void setEmployee(List<User> employee) {
		this.employee = employee;
	}
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
	public List<AppointmentAtDermatolog> getAppointments_at_dermatolog() {
		return appointments_at_dermatolog;
	}
	public void setAppointments_at_dermatolog(List<AppointmentAtDermatolog> appointments_at_dermatolog) {
		this.appointments_at_dermatolog = appointments_at_dermatolog;
	}
	
	public List<StockItem> getHas_medicines() {
		return has_medicines;
	}
	public void setHas_medicines(List<StockItem> has_medicines) {
		this.has_medicines = has_medicines;
	}
	public List<User> getAdmins() {
		return admins;
	}
	public void setAdmins(List<User> admins) {
		this.admins = admins;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public float getRating() {
		return rating;
	}
	public void setRating(float rating) {
		this.rating = rating;
	}
	
		  
		  
}
