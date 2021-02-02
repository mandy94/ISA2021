package rs.ac.uns.ftn.informatika.spring.security;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import pharmacy.config.ISAConfig;

@SpringBootTest(classes = ISAConfig.class)
@ExtendWith(SpringExtension.class)
@EnableConfigurationProperties(value = ISAConfig.class)
//@ContextConfiguration(classes = ServerConfigFactory.class)
@TestPropertySource("classpath:application-test.properties")
class SpringSecurityExampleApplicationTests {

	@Test
	void contextLoads() {
	}

}
