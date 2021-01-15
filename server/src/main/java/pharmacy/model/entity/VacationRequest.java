package pharmacy.model.entity;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
@Entity
public class VacationRequest {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	private Boolean isAproved;
	private String status;
	private Timestamp startDate;
	private Timestamp endDate;
	private String returnMessage;
	@OneToOne
	private User whoAsked;
	@OneToOne
	private User admin;
	
	//-------------------------------------------
	public Boolean getIsAproved() {
		return isAproved;
	}
	public void setIsAproved(Boolean isAproved) {
		this.isAproved = isAproved;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Timestamp getStartDate() {
		return startDate;
	}
	public void setStartDate(Timestamp startDate) {
		this.startDate = startDate;
	}
	public Timestamp getEndDate() {
		return endDate;
	}
	public void setEndDate(Timestamp endDate) {
		this.endDate = endDate;
	}
	public String getReturnMessage() {
		return returnMessage;
	}
	public void setReturnMessage(String returnMessage) {
		this.returnMessage = returnMessage;
	}
	
	
}
