package pharmacy.controller;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import pharmacy.controller.dto.orders.AcceptOfferDTO;
import pharmacy.controller.dto.orders.CreateNewOrderDTO;
import pharmacy.controller.dto.orders.OrderDTO;
import pharmacy.controller.dto.orders.OrderOfferDTO;
import pharmacy.model.entity.Offer;
import pharmacy.model.entity.Order;
import pharmacy.service.OrderService;

// Primer kontrolera cijim metodama mogu pristupiti samo autorizovani korisnici
@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class OrdersController {

	@Autowired
	private OrderService ordersService;

	@GetMapping("/orders")
	//@PreAuthorize("hasRole('ADMIN')")
	public List<OrderDTO> loadById() {
		List<OrderDTO> dtos = new ArrayList<OrderDTO>();
		
		List<Order> orders = ordersService.findAll();
		return dtos;
	}
	
	@PostMapping("/orders")
	//@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<Order> createNewOrder(CreateNewOrderDTO dto) {
		
		Order mappedOrder = null;
		Order createdOrder = ordersService.createNewOrder(mappedOrder);
		
		
//		  URI location = ServletUriComponentsBuilder
//                  .fromCurrentRequest().path("/orders/{id}")
//                  .buildAndExpand(createdOrder.getId()).toUri();
//
//              return ResponseEntity.created(location).build();
		return ResponseEntity.noContent().build();
	}
	

	@GetMapping("/orders/{orderId}/offers")
//	@PreAuthorize("hasRole('ADMIN')")
	public List<OrderOfferDTO> getOrderOffers(@PathVariable Long orderId) {
		List<OrderOfferDTO> dtos = new ArrayList<OrderOfferDTO>();
		
		
		List<Offer> orders = ordersService.findOrderOffers(orderId);
		
		return dtos;
	}
	
	

	
	@PutMapping("/orders/{orderId}")
	//@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<String> acceptOffer(AcceptOfferDTO dto) {
		return ResponseEntity.noContent().build();
	}
	

	
}
