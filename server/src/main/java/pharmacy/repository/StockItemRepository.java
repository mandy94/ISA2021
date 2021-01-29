package pharmacy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import pharmacy.model.entity.Medicine;
import pharmacy.model.entity.StockItem;

public interface StockItemRepository extends JpaRepository<StockItem, Long>{

}
