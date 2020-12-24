package pharmacy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pharmacy.model.entity.Discount;

public interface DiscountRepoitory extends JpaRepository<Discount, Long> {

}
