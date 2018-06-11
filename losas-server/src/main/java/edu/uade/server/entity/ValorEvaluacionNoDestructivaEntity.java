package edu.uade.server.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "VALORES_EVALUACION_NO_DESTRUCTIVA")
@AllArgsConstructor
@NoArgsConstructor
public class ValorEvaluacionNoDestructivaEntity {

    @Id
    @GeneratedValue
    @Column(name = "CODIGO", nullable = false)
    @Getter
    @Setter
    private Long codigo;

    @Column(name = "DESCRIPCION", nullable = false)
    @Getter
    @Setter
    private String descripcion;

    @Column(name = "VALOR_INFERENCIA", nullable = false)
    @Getter
    @Setter
    private String valorInferencia;
}
