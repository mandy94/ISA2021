package pharmacy.model.entity.helper;

public class AppointmentReservationRequest {
	private Long appointmentId;
	private Long pacientId;
	public Long getAppointmentId() {
		return appointmentId;
	}
	public void setAppointmentId(Long appointmentId) {
		this.appointmentId = appointmentId;
	}
	public Long getPacientId() {
		return pacientId;
	}
	public void setPacientId(Long pacientId) {
		this.pacientId = pacientId;
	}
	@Override
	public String toString() {
		return "AppointmentReservationRequest [appointmentId=" + appointmentId + ", pacientId=" + pacientId + "]";
	}
}
