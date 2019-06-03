package ai.unicode.worldgdp.model;

import com.sun.istack.internal.NotNull;
import lombok.*;

import javax.validation.constraints.Size;

@Data
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CountryLanguage {
    private Country country;
    @NotNull private String countryCode;
    @NotNull @Size(max = 30) private String language;
    @NotNull
    @Size(max = 1, min = 1) private String isOfficial;
    @NotNull private Double percentage;
}
