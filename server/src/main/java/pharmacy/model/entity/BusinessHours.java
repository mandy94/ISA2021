package pharmacy.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class BusinessHours {

	 @Id
	    @Column(name = "id")
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	 
	 	private Long startTime; // represents format in seconds
	 	private Long endTime;
	 	@ManyToOne
	 	private Pharmacy at_pharmacy;
	 	@ManyToOne
	 	private User employee = new User();
	 	
}
