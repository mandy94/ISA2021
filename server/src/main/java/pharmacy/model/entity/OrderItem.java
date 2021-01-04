package pharmacy.model.entity;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

@Entity
public class OrderItem {
	
	@EmbeddedId OrderItemId id;
	
	@MapsId("orderId")
	@ManyToOne
	private Order order;
	
	
	@MapsId("medicineId")
	@ManyToOne
	private Medicine medicine;
	    
	private String shippingDate;
	private String expirationDate;
	private int quantity;


	public OrderItemId getId() {
		return id;
	}
	public void setId(OrderItemId id) {
		this.id = id;
	}
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
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
}