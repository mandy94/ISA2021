package pharmacy.model.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
public class Discount {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	private int value;
    private String validFrom;
    private String validUntil;
    private String about;
    @Column(nullable = true)
    private boolean isActive;
    
    @OneToMany
    @JsonIgnore
    private List<Pricelist> inPricelists = new ArrayList<>();
    
    @OneToMany(mappedBy="activeDiscount")
    @JsonIgnore
    private List<Medicine> refersTo = new ArrayList<Medicine>();
    
    //--------------------------------------------------------------------

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

	public int getValue() {
		return value;
	}

	public void setValue(int value) {
		this.value = value;
	}

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

	public boolean isActive() {
		return isActive;
	}

	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
    
}
