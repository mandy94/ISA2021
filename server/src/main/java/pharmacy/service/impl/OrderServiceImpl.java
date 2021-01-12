package pharmacy.service.impl;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pharmacy.model.entity.Offer;
import pharmacy.model.entity.Order;
import pharmacy.model.entity.User;
import pharmacy.repository.OfferRepository;
import pharmacy.repository.OrderRepository;
import pharmacy.service.OrderService;
import pharmacy.service.UserService;
@Service
public class OrderServiceImpl implements OrderService{

	@Autowired
	private OrderRepository orderRepository;
	
	@Autowired
	private OfferRepository offerRepository;
	
	@Autowired
	private UserService userService;


	@Override
	public List<Order> findAll(Principal userPrincipal) {
		User user = userService.findByUsername(userPrincipal.getName());
		
		return orderRepository.findAll();
	}



	@Override
	public Order createNewOrder(Order mappedOrder) {
		return null;
	}



	@Override
	public List<Offer> findOrderOffers(long orderId) {
		return offerRepository.findByForOrder(orderId);
	}


}
