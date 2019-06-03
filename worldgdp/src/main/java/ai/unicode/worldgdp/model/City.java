package ai.unicode.worldgdp.model;

import com.sun.istack.internal.NotNull;
import lombok.*;

import javax.validation.constraints.Size;

@Data
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class City {
    @NotNull private Long id;
    @NotNull @Size(max = 35) private String name;
    @NotNull @Size(max = 3, min = 3) private String countryCode;
    private Country country; @NotNull @Size(max = 20)
    private String district;
    @NotNull private Long population;
}
