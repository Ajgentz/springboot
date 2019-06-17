package ai.unicode.gdp_jhipster.repository;

import ai.unicode.gdp_jhipster.domain.CountryLanguage;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the CountryLanguage entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CountryLanguageRepository extends JpaRepository<CountryLanguage, Long> {

}
