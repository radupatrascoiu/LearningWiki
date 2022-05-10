package com.project.learningwiki.marked_answer;

import lombok.*;

import javax.persistence.*;
import java.util.Objects;

@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "marked_answer")
public class MarkedAnswer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private Integer index;

    public MarkedAnswer(Integer index) {
        this.index = index;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MarkedAnswer that = (MarkedAnswer) o;
        return Objects.equals(id, that.id) && Objects.equals(index, that.index);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, index);
    }
}
