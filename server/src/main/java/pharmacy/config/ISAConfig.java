package pharmacy.config;

import java.util.Properties;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

@Configuration
@ConfigurationProperties(prefix = "isa")
public class ISAConfig {
	
	    // getters and setters
	private String mainAdminAddress;

	public String getMainAdminAddress() {
		return mainAdminAddress;
	}

	public void setMainAdminAddress(String mainAdminAddress) {
		this.mainAdminAddress = mainAdminAddress;
	}
	
    @Bean
    public JavaMailSender getJavaMailSender() 
    {
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost("smtp.gmail.com");
        mailSender.setPort(587);
          
        mailSender.setUsername("????@gmail.com");
        mailSender.setPassword("?????@gmail.com"); // spring.mail.username=?????@gmail.com

          
        Properties props = mailSender.getJavaMailProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.debug", "true");
          
        return mailSender;
    }
	
	
}
