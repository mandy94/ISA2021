package pharmacy.controller.dto.orders;

public class OrderItemDTO {
	
	private Long medicineId;
	private int quantity;
	
	public Long getMedicineId() {
		return medicineId;
	}
	public void setMedicineId(Long medicineId) {
		this.medicineId = medicineId;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	
}
