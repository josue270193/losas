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
    @Column(name = "CODIGO", nullable = false)
    @Getter
    @Setter
    private Long codigo;

    @ManyToOne(optional = false)
    @JoinColumn(name = "VALOR", nullable = false)
    @Getter
    @Setter
    private ValorEvaluacionDestructivaEntity valor;

    @Column(name = "CUMPLE_NORMA", nullable = false)
    @Getter
    @Setter
    private Boolean cumpleNorma;
}
