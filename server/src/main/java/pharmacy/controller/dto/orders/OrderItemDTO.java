package pharmacy.controller.dto.orders;

import pharmacy.model.entity.OrderItem;

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
	public static OrderItemDTO mapToDTO(OrderItem item) {
		OrderItemDTO dto = new OrderItemDTO();
		dto.medicineId = item.getId().getMedicineId();
		dto.quantity = item.getQuantity();
		return dto;
	}

	
}
