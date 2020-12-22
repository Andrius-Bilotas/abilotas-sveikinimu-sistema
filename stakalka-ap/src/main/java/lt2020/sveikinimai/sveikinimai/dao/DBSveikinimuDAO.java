package lt2020.sveikinimai.sveikinimai.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import lt2020.sveikinimai.sveikinimai.model.Sveikinimas;

public interface DBSveikinimuDAO extends JpaRepository<Sveikinimas, Long> {
	
	default List<Sveikinimas> getSveikinimai() {
		return this.findAll();
	}
	
	default void saveSveikinimas(Sveikinimas sveikinimas) {
		this.save(sveikinimas);
	}
}
