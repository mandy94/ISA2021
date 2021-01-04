package pharmacy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import pharmacy.model.entity.Offer;

public interface OfferRepository extends JpaRepository<Offer, Long>{

	List<Offer> findByForOrder(long orderId);
}
