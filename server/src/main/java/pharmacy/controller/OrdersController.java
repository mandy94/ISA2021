package pharmacy.controller;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.PostLoad;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
	public List<OrderDTO> loadById(Principal user) {
		
		user = getMockedUser();
		System.out.println(">>>" + user.getName());
		
		
		List<OrderDTO> dtos = new ArrayList<OrderDTO>();
		
		List<Order> orders = ordersService.findAll(user);
		for(Order order : orders) {
			OrderDTO dto = OrderDTO.mapToDTO(order);
			dtos.add(dto);
		}
		return dtos;
	}
	
	
	private Principal getMockedUser() {
		Principal user = new Principal() {
			
			@Override
			public String getName() {
				return "pharmacyAdmin1";
			}
		};

		return user;
	}

	@PostMapping("/orders")
	//@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<Order> createNewOrder(Principal user, @RequestBody CreateNewOrderDTO dto) {
		
		Order mappedOrder = null;
		Order createdOrder = ordersService.createNewOrder(mappedOrder);
		

		return ResponseEntity.noContent().build();
	}
	

	@GetMapping("/orders/{orderId}/offers")
//	@PreAuthorize("hasRole('ADMIN')")
	public List<OrderOfferDTO> getOrderOffers(@PathVariable Long orderId, Principal user) {
		List<OrderOfferDTO> dtos = new ArrayList<OrderOfferDTO>();
		
		
		List<Offer> orders = ordersService.findOrderOffers(orderId);
		
		return dtos;
	}
	
	
	@PutMapping("/orders/{orderId}")
	//@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<String> acceptOffer(@PathVariable Long orderId, AcceptOfferDTO dto, Principal user) {
		return ResponseEntity.noContent().build();
	}
	

	@PostMapping("/orders/{orderId}/generate-offers")
	//@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<String> generateOffers(@PathVariable Long orderId, Principal user) {
		return ResponseEntity.noContent().build();
	}
	
	
}
