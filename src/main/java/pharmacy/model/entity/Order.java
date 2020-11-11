package pharmacy.model.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

@Entity
public class Order {
	// COMPANY'S TENDER FOR SUPPLIER'S OFFERS
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	    
	private String shippingDate;
	private String expirationDate;
	
	@ManyToMany
    private List<Medicine> medication = new ArrayList<>();	 
    @OneToMany(mappedBy="forOrder")
	private List<Offer> offers = new ArrayList<>();
    
    //--------------------------------------------------
	public String getShippingDate() {
		return shippingDate;
	}
	public void setShippingDate(String shippingDate) {
		this.shippingDate = shippingDate;
	}
	public String getExpirationDate() {
		return expirationDate;
	}
	public void setExpirationDate(String expirationDate) {
		this.expirationDate = expirationDate;
	}
	public List<Medicine> getMedication() {
		return medication;
	}
	public void setMedication(List<Medicine> medication) {
		this.medication = medication;
	}
	public List<Offer> getOffers() {
		return offers;
	}
	public void setOffers(List<Offer> offers) {
		this.offers = offers;
	}

}
