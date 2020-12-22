package pharmacy.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pharmacy.repository.IngredientRepository;
import pharmacy.service.IngredientService;
@Service
public class IngredientServiceImpl implements IngredientService{

	@Autowired
	
	private IngredientRepository ingredientRepository;
}
