package pharmacy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pharmacy.model.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername( String username );
}

