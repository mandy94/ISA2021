package pharmacy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pharmacy.model.entity.Ingredient;

public interface IngredientRepository extends JpaRepository<Ingredient, Long>{

}
