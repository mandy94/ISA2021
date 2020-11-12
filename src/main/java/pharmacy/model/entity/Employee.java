package pharmacy.model.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.ManyToMany;
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Employee {
		@Id
	    private Long id;
	
	 	@ManyToMany
	 	private List<BusinessHours> businessHours = new ArrayList<>();
	 	
	 	//------------------------------------------------------------------------

}
