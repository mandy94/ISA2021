package pharmacy.service;

import java.security.Principal;
import java.util.List;

import pharmacy.model.entity.Offer;
import pharmacy.model.entity.Order;


public interface OrderService {

	List<Order> findAll(Principal user);
	List<Offer> findOrderOffers(long orderId);
	Order createNewOrder(Order mappedOrder);


}
