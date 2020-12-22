package lt2020.sveikinimai.sveikinimai.model;

import java.sql.Time;
import java.util.Date;

public class ControllerLayerSveikinimas {

	private String tekstas;
	private String paveiksliukas;
	private String audio;
	private String vardasPavarde;
	private String data;
	private String laikas;
	private String tipas;

	public ControllerLayerSveikinimas(String tekstas, String paveiksliukas, String audio, String vardasPavarde,
			String data, String laikas, String tipas) {
		super();
		this.tekstas = tekstas;
		this.paveiksliukas = paveiksliukas;
		this.audio = audio;
		this.vardasPavarde = vardasPavarde;
		this.data = data;
		this.laikas = laikas;
		this.tipas = tipas;
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

	public String getTipas() {
		return tipas;
	}

	public void setTipas(String tipas) {
		this.tipas = tipas;
	}

}
