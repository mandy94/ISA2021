package pharmacy.model.entity;

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
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
    private String validFrom;
    private String validUntil;
    private String about;
    
    @OneToMany(mappedBy="activeDiscount") 
    private List<Medicine> refersTo = new ArrayList<Medicine>();
    
    //--------------------------------------------------------------------

	public String getValidFrom() {
		return validFrom;
	}

	public void setValidFrom(String validFrom) {
		this.validFrom = validFrom;
	}

	public String getValidUntil() {
		return validUntil;
	}

	public void setValidUntil(String validUntil) {
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
