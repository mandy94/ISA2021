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
public class Supplier {

	  @Id
	  @Column(name = "id")
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  private Long id;
	  
	  @OneToMany
	  private List<Offer> offered = new ArrayList<>();

	  @OneToMany
	  private List<Invoice> invoicedOfferes = new ArrayList<>();
}
