package pharmacy.service;

public interface EmailService {


	void sendEmail(EmailMessage message);

	String getMainAdminAdress();    
}
