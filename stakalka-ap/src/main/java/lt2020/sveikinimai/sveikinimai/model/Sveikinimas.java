package lt2020.sveikinimai.sveikinimai.model;

import java.sql.Time;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Sveikinimas {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Long id;
	private String tekstas;
	private String paveiksliukas;
	private String audio;
	private String vardasPavarde;
	@Temporal(TemporalType.DATE)
	private Date data;
	@Temporal(TemporalType.TIME)
	private Time time;
	private Tipas tipas;
	
	public Sveikinimas() {
	}
	
	

	public Sveikinimas(String tekstas, String paveiksliukas, String audio, String vardasPavarde, Date data, Time time,
			Tipas tipas) {
		super();
		this.tekstas = tekstas;
		this.paveiksliukas = paveiksliukas;
		this.audio = audio;
		this.vardasPavarde = vardasPavarde;
		this.data = data;
		this.time = time;
		this.tipas = tipas;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTekstas() {
		return tekstas;
	}

	public void setTekstas(String tekstas) {
		this.tekstas = tekstas;
	}

	public String getPaveiksliukas() {
		return paveiksliukas;
	}

	public void setPaveiksliukas(String paveiksliukas) {
		this.paveiksliukas = paveiksliukas;
	}

	public String getAudio() {
		return audio;
	}

	public void setAudio(String audio) {
		this.audio = audio;
	}

	public String getVardasPavarde() {
		return vardasPavarde;
	}

	public void setVardasPavarde(String vardasPavarde) {
		this.vardasPavarde = vardasPavarde;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public Time getTime() {
		return time;
	}

	public void setTime(Time time) {
		this.time = time;
	}

	public Tipas getTipas() {
		return tipas;
	}

	public void setTipas(Tipas tipas) {
		this.tipas = tipas;
	}

}
