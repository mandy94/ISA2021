package pharmacy.model.entity.appointments;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import pharmacy.model.entity.User;

@Entity
public class AppointmentAtDermatolog {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private User dermatolog;
    @ManyToOne
    private User pacient;
    private String name;
    private int price;
    private String time;
    private String date;
    private String status;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public User getDermatolog() {
		return dermatolog;
	}
	public void setDermatolog(User dermatolog) {
		this.dermatolog = dermatolog;
	}
	public User getPacient() {
		return pacient;
	}
	public void setPacient(User pacient) {
		this.pacient = pacient;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
    
    
    /*
     *   id: 1,
      pharmacyid: 1,
      name: 'Ultrazvuk',
      price: 3400,
      dermatologid: 1,
      dermatolog_fullname: 'dr. Mila Jovic',
      pacientid: 1,
      pacient_fullname: "Milan Paroski",
      time: { start: '10:00', end: '10:30' },
      date: "12/01/2021",
      status: 'Rezervisan'*/
}
