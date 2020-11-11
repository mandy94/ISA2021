package pharmacy.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class InvoiceItem {
	@Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	private int quantity;
	private float unitPrice;
	
	@OneToOne
	private Medicine medicine;
	@ManyToOne
	private Invoice fromInvoice;
	
	//-----------------------------------------------
	public Medicine getMedicine() {
		return medicine;
	}
	public void setMedicine(Medicine medicine) {
		this.medicine = medicine;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public float getUnitPrice() {
		return unitPrice;
	}
	public void setUnitPrice(float unitPrice) {
		this.unitPrice = unitPrice;
	}
	public Invoice getFromInvoice() {
		return fromInvoice;
	}
	public void setFromInvoice(Invoice fromInvoice) {
		this.fromInvoice = fromInvoice;
	}
	
	
}
