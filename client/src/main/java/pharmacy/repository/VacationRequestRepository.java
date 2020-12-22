package pharmacy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pharmacy.model.entity.VacationRequest;

public interface VacationRequestRepository extends JpaRepository<VacationRequest, Long>{

}
