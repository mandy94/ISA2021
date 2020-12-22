package pharmacy.model.entity;

import java.sql.Timestamp;
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
public class Pricelist {
	  @Id
	  @Column(name = "id")
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  private Long id;
	  @OneToMany
	  private List<Medicine> medicines = new ArrayList<>();
	  private Timestamp validFrom;
	  private Timestamp validUntil;
	  @ManyToOne
	  private Discount activeDiscound;
	  //---------------------------------------
	public List<Medicine> getMedicines() {
		return medicines;
	}
	public void setMedicines(List<Medicine> medicines) {
		this.medicines = medicines;
	}
	public Timestamp getValidFrom() {
		return validFrom;
	}
	public void setValidFrom(Timestamp validFrom) {
		this.validFrom = validFrom;
	}
	public Timestamp getValidUntil() {
		return validUntil;
	}
	public void setValidUntil(Timestamp validUntil) {
		this.validUntil = validUntil;
	}
	public Discount getActiveDiscound() {
		return activeDiscound;
	}
	public void setActiveDiscound(Discount activeDiscound) {
		this.activeDiscound = activeDiscound;
	}
	  

	  
	  
}
