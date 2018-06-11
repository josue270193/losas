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
    @Column(name = "CODIGO", nullable = false)
    @Getter
    @Setter
    private Long codigo;

    @ManyToOne(optional = false)
    @JoinColumn(name = "VALOR", nullable = false)
    @Getter
    @Setter
    private ValorEvaluacionNoDestructivaEntity valor;

    @Enumerated(EnumType.STRING)
    @Column(name = "COLOR_EVALUACION", nullable = false)
    @Getter
    @Setter
    private ColorEvaluacionEnum colorEvaluacion;

    @Column(name = "CUMPLE_NORMA", nullable = false)
    @Getter
    @Setter
    private Boolean cumpleNorma;
}
