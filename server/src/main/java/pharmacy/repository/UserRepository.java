package pharmacy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import pharmacy.model.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername( String username );
    @Query(value="select work_role from users where username=:username", nativeQuery=true)
	String getWorkRoleByUsername(String username);
}

