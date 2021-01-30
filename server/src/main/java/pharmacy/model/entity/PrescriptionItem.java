package pharmacy.model.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class PrescriptionItem {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@OneToOne
	private Medicine medicine;
	private int amount;
	
	
	public Medicine getMedicine() {
		return medicine;
	}
	public void setMedicine(Medicine medicine) {
		this.medicine = medicine;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
}
