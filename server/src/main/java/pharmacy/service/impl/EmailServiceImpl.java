package pharmacy.service.impl;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import pharmacy.service.EmailMessage;
import pharmacy.service.EmailService;

@Service
public class EmailServiceImpl implements EmailService {


    @Autowired
    private JavaMailSender mailSender;
      
//
//	// Izdavac tokena
//	@Value("email-main-admin-address")
//	private String emailMainAdminAddress;

	

    @PostConstruct
    private void postConstruct() {
    	EmailMessage msg = new EmailMessage();
    	msg.setBody("test");
    	msg.setFrom("???@gmail.com");
    	msg.setTo("????@gmail.com");
    	msg.setSubject("subject");
    	sendEmail(msg);
    	System.out.println("TEST EMAIL SENTTTTTTTTTTTTT");

    }
	
	@Override
	public void sendEmail(EmailMessage msg) {
		 SimpleMailMessage message = new SimpleMailMessage();  
	        message.setFrom(msg.getFrom());  
	        message.setTo(msg.getTo());  
	        message.setSubject(msg.getSubject());  
	        message.setText(msg.getBody());  
	       
	        mailSender.send(message);  
	      
		System.out.println("Send email  - success");  	
	
		
	}

	@Override
	public String getMainAdminAdress() {
		return  "enkoder94@gmail.com";
	}
}

