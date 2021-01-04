package pharmacy.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Offer {
	// SUPPLIERS OFFERS FOR ONE ORDER
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String shippingDate;
    
    @ManyToOne
    private Supplier supplier;
    
    @ManyToOne
    private Order forOrder;
    
    //--------------------------------------------------

	public String getShippingDate() {
		return shippingDate;
	}

	public void setShippingDate(String shippingDate) {
		this.shippingDate = shippingDate;
	}

	public Supplier getSupplier() {
		return supplier;
	}

	public void setSupplier(Supplier supplier) {
		this.supplier = supplier;
	}


	public Order getForOrder() {
		return forOrder;
	}

	public void setForOrder(Order forOrder) {
		this.forOrder = forOrder;
	}
    
	
}
