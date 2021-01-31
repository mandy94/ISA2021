package pharmacy.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pharmacy.model.entity.DTOs.AppointmentAtDermatologDTO;
import pharmacy.model.entity.appointments.AppointmentAtDermatolog;
import pharmacy.repository.AppointmentAtDermatologRepository;
import pharmacy.service.AppointmentAtDermatologService;

@Service
public class AppointmentAtDermatologServiceImpl implements AppointmentAtDermatologService{
	@Autowired
	private AppointmentAtDermatologRepository dermatologApprepo;
	@Override
	public List<AppointmentAtDermatologDTO> getAppointmentsReservationForUserId(Long id) {
		
		return convertToDto(dermatologApprepo.getAppointmentsForUserId(id));		
		
	}
	@Override
	public List<AppointmentAtDermatologDTO> getAppointmentsHistoryForUserId(Long id) {
		return convertToDto(dermatologApprepo.getAppointmentsHistoryForUserId(id));
	}
	@Override
	public List<AppointmentAtDermatologDTO> getAvailableAppointmentsAtDermatolog(Long id) {
		return convertToDto(dermatologApprepo.getAvailableAppointemntsAtDermatolog(id));
	}
	@Override
	public List<AppointmentAtDermatologDTO> getAvailableAppointmentsAtDermatologByPharmacy(Long id) {
		return convertToDto(dermatologApprepo.getAvailableAppointmentsAtDermatologByPharmacy(id));
	}
	@Override
	public List<AppointmentAtDermatologDTO> getReservedAppointemntsAtDermatologInPharmacy(Long userId, Long pharmacyId) {
		return convertToDto(dermatologApprepo.getReservedAppointemntsAtDermatologInPharmacy(userId, pharmacyId));
	}
	
	private List<AppointmentAtDermatologDTO> convertToDto(List<AppointmentAtDermatolog> list){
		List<AppointmentAtDermatologDTO> res = new ArrayList<>();
		for(AppointmentAtDermatolog app : list) {
			AppointmentAtDermatologDTO dto = new AppointmentAtDermatologDTO(app);
			res.add(dto);
		}
		return res;
	}
}
