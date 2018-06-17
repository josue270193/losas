package edu.uade.server.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "EVALUACIONES_DESTRUCTIVA")
@AllArgsConstructor
@NoArgsConstructor
public class EvaluacionDestructivaEntity {

    @Id
    @GeneratedValue
    @Column(name = "codigo", nullable = false)
    @Getter
    @Setter
    private Long codigo;

    @ManyToOne(optional = false)
    @JoinColumn(name = "valor", nullable = false)
    @Getter
    @Setter
    private ValorEvaluacionDestructivaEntity valor;

    @Column(name = "cumple_norma", nullable = false)
    @Getter
    @Setter
    private Boolean cumpleNorma;
}
