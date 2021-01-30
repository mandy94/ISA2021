package pharmacy.model.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Prescription {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	private Long code;
	@ManyToOne
	private User pacient;
	private String date;
	private String status;
	@OneToMany
	private List<PrescriptionItem> itemMedicine = new ArrayList<PrescriptionItem>();
	public Long getCode() {
		return code;
	}
	public void setCode(Long code) {
		this.code = code;
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
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public List<PrescriptionItem> getItemMedicine() {
		return itemMedicine;
	}
	public void setItemMedicine(List<PrescriptionItem> itemMedicine) {
		this.itemMedicine = itemMedicine;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}


}
