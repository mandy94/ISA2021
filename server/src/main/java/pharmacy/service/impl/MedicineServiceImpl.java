package pharmacy.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pharmacy.controller.dto.CreateMedicationDTO;
import pharmacy.model.entity.DateAndTimeConverter;
import pharmacy.model.entity.Discount;
import pharmacy.model.entity.Ingredient;
import pharmacy.model.entity.Manufacturer;
import pharmacy.model.entity.Medicine;
import pharmacy.model.entity.StockItem;
import pharmacy.repository.IngredientRepository;
import pharmacy.repository.ManufacturerRepository;
import pharmacy.repository.MedicineRepository;
import pharmacy.repository.StockItemRepository;
import pharmacy.service.DiscountService;
import pharmacy.service.MedicineService;
@Service
public class MedicineServiceImpl implements MedicineService{
	@Autowired
	private MedicineRepository medicineRepository;

	@Autowired
	private IngredientRepository ingredientRepo; 
	@Autowired
	private ManufacturerRepository manufacturerRepo;
	@Autowired
	private DiscountService discountService;
	@Autowired
	private StockItemRepository stockRepo;
	// util method
	private List<Medicine> updateMedicinesPrice(List<Medicine> temp ) {
		 for(Medicine x : temp) {
			 if(x.getActiveDiscount()!=null) {
				if( DateAndTimeConverter.isDateBehindToday(x.getActiveDiscount().getValidUntil())) {		
					x.setCurrentPrice(x.getInitialPrice()*x.getActiveDiscount().getValue()/100);
				    x.getActiveDiscount().setActive(true);
				}else {
					x.setCurrentPrice(x.getInitialPrice());
					x.getActiveDiscount().setActive(false);
				}
			}
		 }
			return temp;
	 }
	@Override
	public List<Medicine> findAllMedications() {
		return updateMedicinesPrice(medicineRepository.findAll());		
	}
 
	@Override
	public List<Medicine> findAllMedicationsByPharmacyId(Long id) {
		return updateMedicinesPrice(medicineRepository.getByPharmacyId(id));
		
	}

	@Override
	public void deleteMedicationById(Long id) {
		//if( medicineRepository.getPharmaciesWhoRefMedicineById(id) || medicineRepository.getPrescriptionsWhoRefMedicineById(id)  )
		medicineRepository.deleteById(id);
	}

	@Override
	public void createNewMedicine(CreateMedicationDTO med) {
		Medicine x = new Medicine();
		x.setName(med.getName());
		x.setCode(med.getCode());
		x.setCurrentPrice(med.getInitialPrice());
		x.setInitialPrice(med.getInitialPrice());
		x.setShape(med.getShape());
		x.setType(med.getType());
		if(med.getActiveDiscount()!=null)
			x.setActiveDiscount(discountService.getById(med.getActiveDiscount()));
		List<Ingredient> ingredientLit = new ArrayList<>();
		for(Long id: med.getIngredients()) {
			Ingredient i = ingredientRepo.findById(id).orElse(null);
			if( i !=null)
			ingredientLit.add(i);
		}
		x.setIngredients(ingredientLit);
		x.setMandatoryPrescription(med.getMandatoryPrescription());
		if(med.getManufacturer()!=null)
			x.setManufacturer(manufacturerRepo.findById(med.getManufacturer()).orElse(null));
		List<Medicine> rep = new ArrayList<>();
		for(Long id: med.getReplacements()) {
			Medicine m = medicineRepository.findById(id).orElse(null);
			if(m!=null)
				rep.add(m);
		}
		StockItem s = new StockItem();
		stockRepo.save(s);
		x.setStock(s);
		x.setReplacements(rep);
		
		medicineRepository.save(x);
		
	}

	@Override
	public List<Manufacturer> findAllManufacturers() {
		return this.manufacturerRepo.findAll();
	}

	@Override
	public List<Ingredient> findAllIngrideints() {
		return this.ingredientRepo.findAll();
	}

	@Override
	public List<Discount> findAllDisocunts() {
		return this.discountService.getAll();
	}
	
	

}
