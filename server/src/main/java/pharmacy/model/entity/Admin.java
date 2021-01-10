package pharmacy.model.entity;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@DiscriminatorValue("ADMIN")
public class Admin extends Employee{
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
}
