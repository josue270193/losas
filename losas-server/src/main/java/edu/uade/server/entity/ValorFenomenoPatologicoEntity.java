package edu.uade.server.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "VALORES_FENOMENO_PATOLOGICO")
@AllArgsConstructor
@NoArgsConstructor
public class ValorFenomenoPatologicoEntity {

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
