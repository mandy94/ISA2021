package pharmacy.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pharmacy.controller.dto.AdminDTO;
import pharmacy.controller.dto.PharmacyDTO;
import pharmacy.model.entity.BusinessHours;
import pharmacy.model.entity.DateAndTimeConverter;
import pharmacy.model.entity.Pharmacy;
import pharmacy.model.entity.User;
import pharmacy.model.entity.DTOs.AboutUserTimeTableDTO;
import pharmacy.repository.BusinessHoursRepository;
import pharmacy.repository.PharmacyDetailsRepository;
import pharmacy.repository.PharmacyEmployeeRepository;
import pharmacy.service.DermatologService;
import pharmacy.service.PharmacyService;
@Service
public class PharmacyServiceImpl implements PharmacyService{

	@Autowired
	private PharmacyEmployeeRepository employeeRepository;

	@Autowired
	private PharmacyDetailsRepository aboutPharmacyRepository;
	
	@Autowired
	private DermatologService dermatologService;
	
	@Autowired
	private BusinessHoursRepository businessHoursRepo; 
	@Override
	public List<User> getAllEmployeeByPharmacyId(Long id) {
		 return employeeRepository.getAllByPharmacyId(id);
	}

	@Override
	public List<AboutUserTimeTableDTO> getAllDermatologsByPharmacyId(Long id) {
		List<AboutUserTimeTableDTO> resDTO = new ArrayList<>();
		List<User> res =  employeeRepository.getAllDermatologsByPharmacyId(id);
		for(User u : res) {
			List<BusinessHours> bh = dermatologService.getDermatologBusinessHoursByPharmacy(u.getId(), id);
			AboutUserTimeTableDTO obj = new AboutUserTimeTableDTO();
			obj.setEmployeeAsDTO(u);
			obj.setEndTime(DateAndTimeConverter.convertTimeFromDBFormat(bh.get(0).getEndTime())); // 0 u slucaju prosirenja
			obj.setStartTime(DateAndTimeConverter.convertTimeFromDBFormat(bh.get(0).getStartTime()));
			resDTO.add(obj);			
		}
		return resDTO;
	}

	@Override
	public List<User> getAllPharmacistsByPharmacyId(Long id) {
		return employeeRepository.getAllPharmacistsByPharmacyId(id);
	}

	@Override
	public List<User> getAllAdministratorsByPharmacyId(Long id) {
		return employeeRepository.getAllAdministratorsByPharmacyId(id);
	}

	@Override
	public List<User> getAvailablePharmacistByDateAndTime(String timeFrom, String timeTo, String date) {
		return employeeRepository.getAllAvailablePharamacistForDateAndTime( DateAndTimeConverter.convertTimeToDBFormat(timeFrom), 
				DateAndTimeConverter.convertTimeToDBFormat(timeTo), DateAndTimeConverter.convertDateToDBFormat(date));
	}

	@Override
	public Pharmacy getPharmacyById(Long id) {
		return aboutPharmacyRepository.getPharmacyById(id);
	}

	@Override
	public List<Pharmacy> getAllPharmaciesByAvailablePharmacist(String timeFrom, String timeTo, String date) {
		return aboutPharmacyRepository.getAllPharmaciesByAvailablePharmacist(DateAndTimeConverter.convertTimeToDBFormat(timeFrom), 
				DateAndTimeConverter.convertTimeToDBFormat(timeTo),DateAndTimeConverter.convertDateToDBFormat(date));
	}

	@Override
	public List<Pharmacy> getAll() {
		return aboutPharmacyRepository.findAll();
	}

	@Override
	public Pharmacy getById(Long id) {
		return aboutPharmacyRepository.findById(id).orElse(null);
	}

	@Override
	public List<AboutUserTimeTableDTO> getAvailablePharmacistInPharmacyForDate(Long id, String start, String end, String date) {
		List<User> temp = employeeRepository.getAllAvailablePharamacistInPharmacyForDateAndTime(id,DateAndTimeConverter.convertTimeToDBFormat(start), 
				DateAndTimeConverter.convertTimeToDBFormat(end), date);
		List<AboutUserTimeTableDTO> dto = new ArrayList<>();
		for(User u : temp)
		{
			u.setWorking_hours(businessHoursRepo.getBusinessHoursForEmployeeInPharmacy(u.getId(), id));
			AboutUserTimeTableDTO newDto = new AboutUserTimeTableDTO();
			newDto.setEmployeeAsDTO(u);
			for( BusinessHours h: u.getWorking_hours()) {
				newDto.setStartTime(DateAndTimeConverter.convertTimeFromDBFormat(h.getStartTime()));
				newDto.setEndTime(DateAndTimeConverter.convertTimeFromDBFormat(h.getEndTime()));				
			}
			dto.add(newDto);
		}
		return dto;
		
	}

	@Override
	public List<AboutUserTimeTableDTO> getAllDermatologs(Long id) {
		return employeeRepository.getAllDermatologs();
	}

	@Override
	public List<User> getAllPharmacists(Long id) {
		return employeeRepository.getAllPharmacists();
	}

	@Override
	public void addNewPharmacy(PharmacyDTO newPharmacy) {
		Pharmacy pharmacy = new Pharmacy();
		pharmacy.setAdress(newPharmacy.getAdress());
		pharmacy.setName(newPharmacy.getName());
		pharmacy.setEmployee(pharmacy.getEmployee());
		User admin = employeeRepository.findById(newPharmacy.getAdminId()).orElse(null);
		admin.setDedicated_pharmacy(pharmacy);
		pharmacy.getAdmins().add(admin);
		
		aboutPharmacyRepository.save(pharmacy);
		employeeRepository.save(admin);
		
	}

	@Override
	public void savePharmacy(Pharmacy p) {
		aboutPharmacyRepository.save(p);
	}

	@Override
	public List<AdminDTO> getWithouthAdmins() {
		return aboutPharmacyRepository.getWithoutAdmins();
	}

	@Override
	public List<Pharmacy> getPharamciesWhoHaveMedicationFromPrescription(Long id) {
		return aboutPharmacyRepository.getPharmaciesWhoHaveMedicationFromPrescription(id);
	}

	
}
