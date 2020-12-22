package pharmacy.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pharmacy.repository.PricelistRepository;
import pharmacy.service.PricelistService;
@Service
public class PricelistServiceImpl implements PricelistService{

	@Autowired
	private PricelistRepository pricelistRepository;
}
