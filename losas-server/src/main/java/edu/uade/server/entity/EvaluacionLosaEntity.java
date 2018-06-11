package edu.uade.server.entity;

import edu.uade.server.dto.enumerado.RelacionFechaEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "EVALUACIONES_LOSA")
@AllArgsConstructor
@NoArgsConstructor
public class EvaluacionLosaEntity {

    @Id
    @GeneratedValue
    @Column(name = "CODIGO", nullable = false)
    @Getter
    @Setter
    private Long codigo;

    @Enumerated(EnumType.STRING)
    @Column(name = "RELACION_FECHA", nullable = false)
    @Getter
    @Setter
    private RelacionFechaEnum relacionFecha;

    @ManyToMany
    @JoinTable(name = "EVALUACIONES_LOSA_VALORES_INICIAL")
    @Getter
    @Setter
    private List<ValorInicialEntity> valoresInicial;
}
