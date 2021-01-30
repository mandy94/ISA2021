package pharmacy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import pharmacy.model.entity.Prescription;

public interface PrescriptionRepository extends JpaRepository<Prescription, Long> {

	@Query(value="Select * from prescription where pacient_id = :id", nativeQuery=true)
	List<Prescription> findByMyId(Long id);
	
}
