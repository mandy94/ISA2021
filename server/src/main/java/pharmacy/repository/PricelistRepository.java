package pharmacy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pharmacy.model.entity.Pricelist;

public interface PricelistRepository extends JpaRepository<Pricelist, Long> {

}
