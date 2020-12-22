package lt2020.sveikinimai.sveikinimai;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import lt2020.sveikinimai.sveikinimai.model.ControllerLayerSveikinimas;
import lt2020.sveikinimai.sveikinimai.model.ServiceLayerSveikinimas;
import lt2020.sveikinimai.sveikinimai.model.Tipas;
import lt2020.sveikinimai.sveikinimai.service.SveikinimaiService;

@RestController
@RequestMapping(value = "/api/sveikinimai")
public class SveikinimaiController {
	
	@Autowired
	private SveikinimaiService sService;
	
	@RequestMapping(method = RequestMethod.GET)
	public List<ServiceLayerSveikinimas> getSveikinimai() {
		return sService.getSveikinimai();
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public List<ServiceLayerSveikinimas> addSveikinimas(@RequestBody final ControllerLayerSveikinimas sveikinimas) {
		sService.addSveikinimas(new ServiceLayerSveikinimas(sveikinimas.getTekstas(), sveikinimas.getPaveiksliukas(), sveikinimas.getAudio(), sveikinimas.getVardasPavarde(), 
				sveikinimas.getData(), sveikinimas.getLaikas(), Tipas.valueOf(sveikinimas.getTipas().toUpperCase())));
		return sService.getSveikinimai();
	}
	
	@RequestMapping(path = "/{sveikinimoId}", method = RequestMethod.GET)
	public ServiceLayerSveikinimas getSingleSveikinimas(@PathVariable final Long sveikinimoId) {
		return sService.getSingleSveikinimas(sveikinimoId);
	}
	
	
	@RequestMapping(path = "/test", method = RequestMethod.GET)
	public String forTestPurposes() {
		return "Hello";
	}

}
