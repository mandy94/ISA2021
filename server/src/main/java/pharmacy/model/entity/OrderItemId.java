package pharmacy.model.entity;

import java.io.Serializable;

import javax.persistence.Embeddable;

@Embeddable
public class OrderItemId implements Serializable {


	private static final long serialVersionUID = -1;
	
	private Long orderId;
	private Long medicineId;
	
	
	public Long getOrderId() {
		return orderId;
	}
	public void setOrderId(Long orderId) {
		this.orderId = orderId;
	}
	public Long getMedicineId() {
		return medicineId;
	}
	public void setMedicineId(Long medicineId) {
		this.medicineId = medicineId;
	}

	
}
