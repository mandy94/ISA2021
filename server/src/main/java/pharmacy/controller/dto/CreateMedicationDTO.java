package pharmacy.controller.dto;

import java.util.ArrayList;
import java.util.List;

import pharmacy.model.entity.Discount;
import pharmacy.model.entity.Ingredient;
import pharmacy.model.entity.Manufacturer;
import pharmacy.model.entity.Medicine;

public class CreateMedicationDTO {
    private String code;
    private String name;
    private String type; // medType
    private String shape; //medShape
    private boolean mandatoryPrescription;
    private String warningNotes;
    private float initialPrice;
    
    private Long activeDiscount;
    private Long manufacturer;
    private List<String> sideEffects = new ArrayList<>();
    private List<Long> ingredients = new ArrayList<>();    
    private List<Long> replacements = new ArrayList<>();

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

	public boolean isMandatoryPrescription() {
		return mandatoryPrescription;
	}



	public String getWarningNotes() {
		return warningNotes;
	}

	public void setWarningNotes(String warningNotes) {
		this.warningNotes = warningNotes;
	}

	public float getInitialPrice() {
		return initialPrice;
	}

	public void setInitialPrice(float initialPrice) {
		this.initialPrice = initialPrice;
	}

	public Long getActiveDiscount() {
		return activeDiscount;
	}

	public void setActiveDiscount(Long activeDiscount) {
		this.activeDiscount = activeDiscount;
	}

	public Long getManufacturer() {
		return manufacturer;
	}

	public void setManufacturer(Long manufacturer) {
		this.manufacturer = manufacturer;
	}

	public List<Long> getIngredients() {
		return ingredients;
	}

	public void setIngredients(List<Long> ingredients) {
		this.ingredients = ingredients;
	}

	public List<Long> getReplacements() {
		return replacements;
	}

	public void setReplacements(List<Long> replacements) {
		this.replacements = replacements;
	}

	public void setMandatoryPrescription(boolean mandatoryPrescription) {
		this.mandatoryPrescription = mandatoryPrescription;
	}

	public boolean getMandatoryPrescription() {
		return mandatoryPrescription;
	}

	public List<String> getSideEffects() {
		return sideEffects;
	}

	public void setSideEffects(List<String> sideEffects) {
		this.sideEffects = sideEffects;
	}

	
    
}
