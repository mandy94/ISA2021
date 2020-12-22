package pharmacy.model.entity;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
@Entity
public class Discount {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
    private Timestamp validFrom;
    private Timestamp validUntil;
    private String about;
    
    @OneToMany
    private List<Pricelist> inPricelists = new ArrayList<>();
    
    @OneToMany(mappedBy="activeDiscount") 
    private List<Medicine> refersTo = new ArrayList<Medicine>();
    
    //--------------------------------------------------------------------

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

	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}

	public List<Medicine> getRefersTo() {
		return refersTo;
	}

	public void setRefersTo(List<Medicine> refersTo) {
		this.refersTo = refersTo;
	}
    
}
