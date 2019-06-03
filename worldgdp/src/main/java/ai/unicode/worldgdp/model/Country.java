package ai.unicode.worldgdp.model;

import com.sun.istack.internal.NotNull;
import lombok.*;

import javax.validation.constraints.Size;

@Data
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Country {
    @NotNull @Size(max = 3, min = 3) private String code;
    @NotNull @Size(max = 52) private String name;
    @NotNull private String continent;
    @NotNull @Size(max = 26) private String region;
    @NotNull private Double surfaceArea;
    private Short indepYear;
    @NotNull private Long population;
    private Double lifeExpectancy;
    private Double gnp;
    @NotNull private String localName;
    @NotNull private String governmentForm;
    private String headOfState;
    private City capital;
    @NotNull
    private String code2; }
