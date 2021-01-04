package pharmacy.controller.dto.orders;

import java.util.Date;
import java.util.List;

import pharmacy.model.entity.OrderStatus;

public class OrderDTO {

	  Long id;
	  Date expirationDate;
	  OrderStatus status;
      List<OrderItemDTO> items;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Date getExpirationDate() {
		return expirationDate;
	}
	public void setExpirationDate(Date expirationDate) {
		this.expirationDate = expirationDate;
	}
	public OrderStatus getStatus() {
		return status;
	}
	public void setStatus(OrderStatus status) {
		this.status = status;
	}
	public List<OrderItemDTO> getItems() {
		return items;
	}
	public void setItems(List<OrderItemDTO> items) {
		this.items = items;
	}

      

	
}
