package pharmacy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pharmacy.model.entity.Medicine;

public interface MedicineRepository extends JpaRepository<Medicine, Long>{

}
