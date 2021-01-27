package pharmacy.model.auth;

// DTO koji preuzima podatke iz HTML forme za registraciju
public class AdminRequest {

	private Long id;

	private String username;
	
	private String  work_role;
	
	private String email;

	private String password;

	private String firstname;

	private String lastname;
	
	private Long pharmacyId;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getPharmacyId() {
		return pharmacyId;
	}

	public void setPharmacyId(Long pharmacyId) {
		this.pharmacyId = pharmacyId;
	}

	@Override
	public String toString() {
		return "AdminRequest [id=" + id + ", username=" + username + ", password=" + password + ", firstname="
				+ firstname + ", lastname=" + lastname + ", pharmacyId=" + pharmacyId + "]";
	}

	public String getWork_role() {
		return work_role;
	}

	public void setWork_role(String work_role) {
		this.work_role = work_role;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
