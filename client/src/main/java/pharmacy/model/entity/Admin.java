package pharmacy.model.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Admin extends Employee{
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
}
