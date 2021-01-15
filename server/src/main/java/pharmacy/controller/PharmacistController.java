package pharmacy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pharmacy.service.PharmacistService;

@RestController
@RequestMapping(value = "/api/pharmacist", produces = MediaType.APPLICATION_JSON_VALUE)
public class PharmacistController {

	@Autowired
	private PharmacistService pharmacistService;

}
