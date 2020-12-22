package lt2020.sveikinimai.sveikinimai.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Sveikinimas {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Long id;
	private String tekstas;
	private String paveiksliukas;
	private String audio;
	private String vardasPavarde;
	private String data;
	private String laikas;
	@Enumerated(EnumType.STRING)
	private Tipas tipas;
	@OneToMany(mappedBy="sveikinimas", cascade = CascadeType.ALL)
	private Set<SveikinimuVietos> sveikinimuVietos;

	public Sveikinimas() {
	}

	public Sveikinimas(String tekstas, String paveiksliukas, String audio, String vardasPavarde, String data, String laikas,
			Tipas tipas) {
		super();
		this.tekstas = tekstas;
		this.paveiksliukas = paveiksliukas;
		this.audio = audio;
		this.vardasPavarde = vardasPavarde;
		this.data = data;
		this.laikas = laikas;
		this.tipas = tipas;
		this.sveikinimuVietos = new HashSet<>();
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

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public String getLaikas() {
		return laikas;
	}

	public void setLaikas(String laikas) {
		this.laikas = laikas;
	}

	public Tipas getTipas() {
		return tipas;
	}

	public void setTipas(Tipas tipas) {
		this.tipas = tipas;
	}

	public Set<SveikinimuVietos> getSveikinimuVietos() {
		return sveikinimuVietos;
	}

	public void setSveikinimuVietos(Set<SveikinimuVietos> sveikinimuVietos) {
		this.sveikinimuVietos = sveikinimuVietos;
	}
	
	

}
