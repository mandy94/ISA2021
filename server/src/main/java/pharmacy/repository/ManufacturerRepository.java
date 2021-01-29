package pharmacy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pharmacy.model.entity.Manufacturer;

public interface ManufacturerRepository extends JpaRepository<Manufacturer, Long>{

	

}
