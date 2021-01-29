package pharmacy.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pharmacy.model.entity.Discount;
import pharmacy.model.entity.Ingredient;
import pharmacy.repository.DiscountRepoitory;
import pharmacy.service.DiscountService;
@Service
public class DiscountServiceImpl implements DiscountService{

	@Autowired
	private DiscountRepoitory discountRepository;

	@Override
	public Discount getById(Long activeDiscount) {
		return discountRepository.findById(activeDiscount).orElse(null);
	}

	@Override
	public List<Discount> getAll() {
		return discountRepository.findAll();
	
	}
}
