package pharmacy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import pharmacy.model.entity.Order;
import pharmacy.model.entity.Pharmacy;

public interface OrderRepository extends JpaRepository<Order, Long>{
	
	List<Order> findAllByPharmacy(Pharmacy pharmacy);
}
