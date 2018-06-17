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
    @Column(name = "codigo", nullable = false)
    @Getter
    @Setter
    private Long codigo;

    @Column(name = "descripcion", nullable = false)
    @Getter
    @Setter
    private String descripcion;

    @Column(name = "valor_inferencia", nullable = false)
    @Getter
    @Setter
    private String valorInferencia;
}
