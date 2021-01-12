package pharmacy.model.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@DiscriminatorValue("EMPLOYEE")
public class Employee extends User {

	 	@ManyToMany
	 	private List<BusinessHours> businessHours = new ArrayList<>();
	 	
		@ManyToOne
		private Pharmacy pharmacy;

	 	//------------------------------------------------------------------------

}
