package edu.uade.server.entity;

import edu.uade.server.dto.enumerado.ColorEvaluacionEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "EVALUACIONES_NO_DESTRUCTIVA")
@AllArgsConstructor
@NoArgsConstructor
public class EvaluacionNoDestructivaEntity {

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
    private ValorEvaluacionNoDestructivaEntity valor;

    @Enumerated(EnumType.STRING)
    @Column(name = "color_evaluacion", nullable = false)
    @Getter
    @Setter
    private ColorEvaluacionEnum colorEvaluacion;

    @Column(name = "cumple_norma", nullable = false)
    @Getter
    @Setter
    private Boolean cumpleNorma;
}
