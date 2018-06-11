package edu.uade.server.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "VALORES_INICIAL")
@AllArgsConstructor
@NoArgsConstructor
public class ValorInicialEntity {

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

    @ManyToMany(mappedBy = "valoresInicial")
    @Getter
    @Setter
    private List<EvaluacionLosaEntity> evaluacionesLosa = new ArrayList<>();
}
