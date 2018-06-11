package edu.uade.server.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "PARAMETROS_CONSULTA")
@AllArgsConstructor
@NoArgsConstructor
public class ConsultaParametroEntity {

    @Id
    @GeneratedValue
    @Column(name = "CODIGO", nullable = false)
    @Getter
    @Setter
    private Long codigo;

    @OneToOne(optional = false)
    @JoinColumn(name = "EVALUACION_LOSA", nullable = false)
    @Getter
    @Setter
    private EvaluacionLosaEntity evaluacionLosa;

    @OneToMany(orphanRemoval = true)
    @JoinColumn(name = "EVALUACION_FENOMENO_PATOLOGICO", nullable = false)
    @Getter
    @Setter
    private List<EvaluacionFenomenoPatologicoEntity> evaluacionFenomenoPatologico;

    @OneToMany(orphanRemoval = true)
    @JoinColumn(name = "EVALUACION_NO_DESTRUCTIVA", nullable = false)
    @Getter
    @Setter
    private List<EvaluacionNoDestructivaEntity> evaluacionNoDestructiva;

    @OneToMany(orphanRemoval = true)
    @JoinColumn(name = "EVALUACION_DESTRUCTIVA", nullable = false)
    @Getter
    @Setter
    private List<EvaluacionDestructivaEntity> evaluacionDestructiva;
}
