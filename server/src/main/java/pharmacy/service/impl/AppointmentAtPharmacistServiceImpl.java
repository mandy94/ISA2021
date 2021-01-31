package pharmacy.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pharmacy.model.entity.DateAndTimeConverter;
import pharmacy.model.entity.DTOs.AppointmentAtPharmacistDTO;
import pharmacy.model.entity.appointments.AppointmentAtPharmacist;
import pharmacy.repository.AppointmentAtPharmacistRepository;
import pharmacy.repository.UserRepository;
import pharmacy.service.AppointmentAtPharmacistService;

@Service
public class AppointmentAtPharmacistServiceImpl implements AppointmentAtPharmacistService{
	@Autowired
	private AppointmentAtPharmacistRepository pharmacistApprepo;
	@Autowired
	private UserRepository userRepo;
	@Override
	public List<AppointmentAtPharmacistDTO> getAppointmentsForUserId(Long id) {
		return convertToDto(pharmacistApprepo.getAppointmentsForUserId(id));
	}
	@Override
	public List<AppointmentAtPharmacistDTO> getAppointmentsHistoryForUserId(Long id) {
		return convertToDto(pharmacistApprepo.getAppointmentsHistoryForUserId(id));
	}
	@Override
	public void makeReservationForConsultation(Long pharmacistId, Long pacientId, Long start, Long end, String date) {
		AppointmentAtPharmacist newAppointment = new AppointmentAtPharmacist();
		newAppointment.setDate(date);
		newAppointment.setEndTime(end);
		newAppointment.setStartTime(start);
		newAppointment.setPacient(userRepo.findById(pacientId).orElse(null));
		newAppointment.setPharmacist(userRepo.findById(pharmacistId).orElse(null));
		newAppointment.setStatus("Rezervisan");
		pharmacistApprepo.save(newAppointment);
		
	}
	@Override
	public void cancelReservation(Long id) {
		pharmacistApprepo.deleteById(id);
		
	}
	private List<AppointmentAtPharmacistDTO> convertToDto(List<AppointmentAtPharmacist> list){
		List<AppointmentAtPharmacistDTO> res = new ArrayList<>();
		for(AppointmentAtPharmacist app : list) {
			AppointmentAtPharmacistDTO dto = new AppointmentAtPharmacistDTO(app);
			res.add(dto);
		}
		return res;
	}
	@Override
	public List<AppointmentAtPharmacistDTO> getAppointmentsForPharmacistByDate(Long pharmacist, String date) {
		System.out.print( DateAndTimeConverter.convertDateToDBFormat(date));
		return convertToDto(pharmacistApprepo.getAppointmentsForPharmacistByDate(pharmacist, DateAndTimeConverter.convertDateToDBFormat(date)));
	}
	

}
