package ai.unicode.worldgdp.dao.mapper;

import ai.unicode.worldgdp.model.City;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;


public class CityRowMapper implements RowMapper<City> {
    public City mapRow(ResultSet rs, int rowNum)
            throws SQLException {
        City city = new City();
        city.setCountryCode(rs.getString("country_code"));
        city.setDistrict(rs.getString("district"));
        city.setId(rs.getLong("id"));
        city.setName(rs.getString("name"));
        city.setPopulation(rs.getLong("population"));
        return city;
    }
}