package lt2020.sveikinimai.vietos.model;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "sveikinimo_vieta")
public class SveikinimoVieta {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long id;
	@Column(unique=true)
	private String pavadinimas;
	private String logo;
	@Embedded
	private Adresas adresas;

}
