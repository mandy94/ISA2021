package pharmacy.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class BusinessHours {

	 @Id
	    @Column(name = "id")
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	 
	 	private Long startTime; // represents format in seconds
	 	private Long endTime;
	 	@ManyToOne
	 	@JsonIgnore
	 	private Pharmacy at_pharmacy;
	 	@ManyToOne
	 	@JsonIgnore
	 	private User employee = new User();
		@Override
		public String toString() {
			return "BusinessHours [id=" + id + ", startTime=" + startTime + ", endTime=" + endTime + ", at_pharmacy="
					+ at_pharmacy + ", employee=" + employee + "]";
		}
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public Long getStartTime() {
			return startTime;
		}
		public void setStartTime(Long startTime) {
			this.startTime = startTime;
		}
		public Long getEndTime() {
			return endTime;
		}
		public void setEndTime(Long endTime) {
			this.endTime = endTime;
		}
		public Pharmacy getAt_pharmacy() {
			return at_pharmacy;
		}
		public void setAt_pharmacy(Pharmacy at_pharmacy) {
			this.at_pharmacy = at_pharmacy;
		}
		public User getEmployee() {
			return employee;
		}
		public void setEmployee(User employee) {
			this.employee = employee;
		}
	 	
}
