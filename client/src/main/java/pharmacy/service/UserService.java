package pharmacy.service;

import java.util.List;

import pharmacy.model.auth.UserRequest;
import pharmacy.model.entity.User;

public interface UserService {
    User findById(Long id);
    User findByUsername(String username);
    List<User> findAll ();
	User save(UserRequest userRequest);
}
