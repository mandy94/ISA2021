package pharmacy.model.entity.helper;

public class ConsultationReservationRequest {

	@Override
	public String toString() {
		return "ConsultationReservationRequest [pacientId=" + pacientId + ", pharmacistId=" + pharmacistId
				+ ", pharmacyId=" + pharmacyId + ", date=" + date + ", start=" + start + ", end=" + end + "]";
	}
	public Long pacientId;
	public Long pharmacistId;
	public Long pharmacyId;
	public String date;
	public String start;
	public String end;
	
	
}
