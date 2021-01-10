package pharmacy.model.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="OrderTbl")
public class Order {
	// COMPANY'S TENDER FOR SUPPLIER'S OFFERS
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	    
	private Date shippingDate;
	private Date expirationDate;
		
	@Enumerated(EnumType.STRING)
	private OrderStatus status;
	
	@ManyToOne
	private Pharmacy pharmacy;

	
    @OneToMany(mappedBy="order")
	private List<OrderItem> items = new ArrayList<>();
    
    
    @OneToMany(mappedBy="forOrder")
	private List<Offer> offers = new ArrayList<>();
    
    //--------------------------------------------------
    

	public List<Offer> getOffers() {
		return offers;
	}
	public Date getShippingDate() {
		return shippingDate;
	}
	public void setShippingDate(Date shippingDate) {
		this.shippingDate = shippingDate;
	}
	public Date getExpirationDate() {
		return expirationDate;
	}
	public void setExpirationDate(Date expirationDate) {
		this.expirationDate = expirationDate;
	}
	public void setOffers(List<Offer> offers) {
		this.offers = offers;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public OrderStatus getStatus() {
		return status;
	}
	public void setStatus(OrderStatus status) {
		this.status = status;
	}
	public List<OrderItem> getItems() {
		return items;
	}
	public void setItems(List<OrderItem> items) {
		this.items = items;
	}
	public Pharmacy getPharmacy() {
		return pharmacy;
	}
	public void setPharmacy(Pharmacy pharmacy) {
		this.pharmacy = pharmacy;
	}
	
	
	
	

}
