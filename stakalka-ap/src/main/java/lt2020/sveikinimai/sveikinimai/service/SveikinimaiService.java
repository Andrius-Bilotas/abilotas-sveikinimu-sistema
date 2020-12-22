package lt2020.sveikinimai.sveikinimai.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lt2020.sveikinimai.sveikinimai.dao.DBSveikinimuDAO;
import lt2020.sveikinimai.sveikinimai.model.ServiceLayerSveikinimas;
import lt2020.sveikinimai.sveikinimai.model.Sveikinimas;

@Service
public class SveikinimaiService {
	
	@Autowired
	private DBSveikinimuDAO sveikinimuDao;
	
	@Transactional
	public List<ServiceLayerSveikinimas> getSveikinimai() {
		return sveikinimuDao.getSveikinimai().stream()
					.map(sveikinimas -> new ServiceLayerSveikinimas(sveikinimas.getId(), sveikinimas.getTekstas(), sveikinimas.getPaveiksliukas(), 
							sveikinimas.getAudio(), sveikinimas.getVardasPavarde(), sveikinimas.getData(), sveikinimas.getLaikas(), sveikinimas.getTipas()))
					.collect(Collectors.toList());
	}
	
	@Transactional
	public void addSveikinimas(ServiceLayerSveikinimas sveikinimas) {
		sveikinimuDao.saveSveikinimas(new Sveikinimas(sveikinimas.getTekstas(), sveikinimas.getPaveiksliukas(), 
				sveikinimas.getAudio(), sveikinimas.getVardasPavarde(), sveikinimas.getData(), sveikinimas.getLaikas(), sveikinimas.getTipas()));
	}
	
	@Transactional
	public ServiceLayerSveikinimas getSingleSveikinimas(Long id) {
		var sveikinimas = sveikinimuDao.findById(id).orElse(null);
		return new ServiceLayerSveikinimas(sveikinimas.getId(), sveikinimas.getTekstas(), sveikinimas.getPaveiksliukas(), sveikinimas.getAudio(), 
				sveikinimas.getVardasPavarde(), sveikinimas.getData(), sveikinimas.getLaikas(), sveikinimas.getTipas());
	}
	
}
