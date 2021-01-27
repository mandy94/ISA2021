package pharmacy.service;

import java.util.List;

import pharmacy.model.auth.Authority;

public interface AuthorityService {
	List<Authority> findById(Long id);
	Authority findByname(String name);
	
}
