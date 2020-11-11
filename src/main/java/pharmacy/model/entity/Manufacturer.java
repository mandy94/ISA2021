package pharmacy.model.entity;

import java.util.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Manufacturer {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @OneToMany(mappedBy="manufacturer")
    private List<Medicine> produces = new ArrayList<>();

    
    ///----------------------------------------------------
	public List<Medicine> getProduces() {
		return produces;
	}

	public void setProduces(ArrayList<Medicine> produces) {
		this.produces = produces;
	}
}
