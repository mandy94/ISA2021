package pharmacy.model.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
@Entity
public class Invoice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	private String type;
	private String payDate;
	private float total;

	@ManyToOne
	private Supplier supplier;
	@OneToMany
	private List<InvoiceItem> orderedMeds = new ArrayList<>();
	
	//--------------------------------------------------------------------
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getPayDate() {
		return payDate;
	}
	public void setPayDate(String payDate) {
		this.payDate = payDate;
	}
	public Supplier getSupplier() {
		return supplier;
	}
	public void setSupplier(Supplier supplier) {
		this.supplier = supplier;
	}
	public List<InvoiceItem> getOrderedMeds() {
		return orderedMeds;
	}
	public void setOrderedMeds(List<InvoiceItem> orderedMeds) {
		this.orderedMeds = orderedMeds;
	}
	public float getTotal() {
		return total;
	}
	public void setTotal(float total) {
		this.total = total;
	}
	
	
}
