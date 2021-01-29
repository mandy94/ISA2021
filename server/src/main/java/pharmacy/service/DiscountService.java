package pharmacy.service;

import java.util.List;

import pharmacy.model.entity.Discount;
import pharmacy.model.entity.Ingredient;

public interface DiscountService {

	Discount getById(Long activeDiscount);

	List<Discount> getAll();

}
