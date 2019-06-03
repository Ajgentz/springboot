package ai.unicode.worldgdp.model;

import lombok.*;

@Data
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CountryGDP {
    private Short year;
    private Double value;
}
