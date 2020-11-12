package pharmacy.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pharmacy.repository.DiscountRepoitory;
import pharmacy.service.DiscountService;
@Service
public class DiscountServiceImpl implements DiscountService{

	@Autowired
	private DiscountRepoitory discountRepository;
}
