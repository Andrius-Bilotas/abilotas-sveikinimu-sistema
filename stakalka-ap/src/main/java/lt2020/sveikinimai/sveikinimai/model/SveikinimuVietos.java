package lt2020.sveikinimai.sveikinimai.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lt2020.sveikinimai.vietos.model.SveikinimoVieta;

@Entity
@Table(name = "sveikinimu_vietos")
public class SveikinimuVietos {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long id;

	@ManyToOne(cascade = { CascadeType.MERGE, CascadeType.DETACH })
	@JoinColumn(name = "sveikinimo_id")
	private Sveikinimas sveikinimas;

	@ManyToOne(cascade = { CascadeType.MERGE, CascadeType.DETACH })
	@JoinColumn(name = "vietos_id")
	private SveikinimoVieta vieta;
	
	public SveikinimuVietos() {
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Sveikinimas getSveikinimas() {
		return sveikinimas;
	}

	public void setSveikinimas(Sveikinimas sveikinimas) {
		this.sveikinimas = sveikinimas;
	}

	public SveikinimoVieta getVieta() {
		return vieta;
	}

	public void setVieta(SveikinimoVieta vieta) {
		this.vieta = vieta;
	}

}
