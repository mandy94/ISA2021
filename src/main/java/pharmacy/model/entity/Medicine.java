package pharmacy.model.entity;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Medicine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String code;
    private String name;
    private String type; // medType
    private String shape; //medShape
    private boolean mandatoryPrescription;
    private String warningNotes;
    private float initialPrice;
    private float currentPrice;
    
    @ManyToOne
    private Discount activeDiscount;
    @ManyToOne
    private Manufacturer manufacturer;
    @ManyToMany
    private List<Ingredient> ingredients = new ArrayList<>();
    @ManyToMany
    private List<Offer> inOffers = new ArrayList<>();
    @ManyToMany
    private List<Order> inOrders = new ArrayList<>();
    @ManyToOne
    private Medicine medicine; // for selfreferencing 
    @OneToMany(mappedBy="medicine")
    private List<Medicine> replacements = new ArrayList<>();
    
    
    //----------------------------------------------------------------------------
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getShape() {
		return shape;
	}
	public void setShape(String shape) {
		this.shape = shape;
	}
	public Manufacturer getManufacturer() {
		return manufacturer;
	}
	public void setManufacturer(Manufacturer manufacturer) {
		this.manufacturer = manufacturer;
	}
	public boolean isMandatoryPrescription() {
		return mandatoryPrescription;
	}
	public void setMandatoryPrescription(boolean mandatoryPrescription) {
		this.mandatoryPrescription = mandatoryPrescription;
	}
	public String getWarningNotes() {
		return warningNotes;
	}
	public void setWarningNotes(String warningNotes) {
		this.warningNotes = warningNotes;
	}
	public List<Ingredient> getIngredients() {
		return ingredients;
	}
	public void setIngredients(ArrayList<Ingredient> ingredients) {
		this.ingredients = ingredients;
	}
	public Medicine getMedicine() {
		return medicine;
	}
	public void setMedicine(Medicine medicine) {
		this.medicine = medicine;
	}
	public List<Medicine> getReplacements() {
		return replacements;
	}
	public void setReplacements(ArrayList<Medicine> replacements) {
		this.replacements = replacements;
	}
	public float getInitialPrice() {
		return initialPrice;
	}
	public void setInitialPrice(float initialPrice) {
		this.initialPrice = initialPrice;
	}
	public float getCurrentPrice() {
		return currentPrice;
	}
	public void setCurrentPrice(float currentPrice) {
		this.currentPrice = currentPrice;
	}
	public Discount getActiveDiscount() {
		return activeDiscount;
	}
	public void setActiveDiscount(Discount activeDiscount) {
		this.activeDiscount = activeDiscount;
	}
	public List<Offer> getInOffers() {
		return inOffers;
	}
	public void setInOffers(List<Offer> inOffers) {
		this.inOffers = inOffers;
	}
	public List<Order> getInOrders() {
		return inOrders;
	}
	public void setInOrders(List<Order> inOrders) {
		this.inOrders = inOrders;
	}
	public void setIngredients(List<Ingredient> ingredients) {
		this.ingredients = ingredients;
	}
	public void setReplacements(List<Medicine> replacements) {
		this.replacements = replacements;
	}
}
