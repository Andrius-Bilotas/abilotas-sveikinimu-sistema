package lt2020.sveikinimai.vietos.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lt2020.sveikinimai.sveikinimai.model.SveikinimuVietos;

@Entity
@Table(name = "sveikinimo_vieta")
public class SveikinimoVieta {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long id;
	@Column(unique = true)
	private String pavadinimas;
	private String logo;
	@Embedded
	private Adresas adresas;
	@OneToMany(mappedBy="vieta", cascade = CascadeType.ALL)
	private Set<SveikinimuVietos> sveikinimuVietos;

	public SveikinimoVieta() {
	}

	public SveikinimoVieta(String pavadinimas, String logo, Adresas adresas) {
		super();
		this.pavadinimas = pavadinimas;
		this.logo = logo;
		this.adresas = adresas;
		this.sveikinimuVietos = new HashSet<>();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getPavadinimas() {
		return pavadinimas;
	}

	public void setPavadinimas(String pavadinimas) {
		this.pavadinimas = pavadinimas;
	}

	public String getLogo() {
		return logo;
	}

	public void setLogo(String logo) {
		this.logo = logo;
	}

	public Adresas getAdresas() {
		return adresas;
	}

	public void setAdresas(Adresas adresas) {
		this.adresas = adresas;
	}

	public Set<SveikinimuVietos> getSveikinimuVietos() {
		return sveikinimuVietos;
	}

	public void setSveikinimuVietos(Set<SveikinimuVietos> sveikinimuVietos) {
		this.sveikinimuVietos = sveikinimuVietos;
	}
	
	

}
