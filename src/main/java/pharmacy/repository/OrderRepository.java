package pharmacy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pharmacy.model.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
