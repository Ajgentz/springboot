package mongodb.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.validation.constraints.NotNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Student")
public class Student {

    @Id
    @JsonIgnore
    private String id;

    @NotNull(message="Roll no cannot be empty")
    private Integer rollNo;

    @NotNull(message="Name cannot be empty")
    private String name;

    @NotNull(message="Standard cannot be empty")
    private Integer standard;

    public String getName(){return name;}

    public void setName(String name) {this.name = name;}

    public Integer getStandard() {return standard;}

    public void setStandard(Integer standard){this.standard = standard;}

    public Integer getRollNo(){return rollNo;}

    public void setRollNo(Integer rollNo){this.rollNo = rollNo;}

    @Override
    public String toString(){return "Student [name=" + name + ", standard=" + standard + "]";}
}
