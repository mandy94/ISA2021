package pharmacy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pharmacy.model.entity.Offer;

public interface OfferRepository extends JpaRepository<Offer, Long>{

}
