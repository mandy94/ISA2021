package pharmacy.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pharmacy.repository.OfferRepository;
import pharmacy.service.OfferService;
@Service
public class OfferServiceImpl implements OfferService{

	@Autowired
	private OfferRepository offerRepository;
}
