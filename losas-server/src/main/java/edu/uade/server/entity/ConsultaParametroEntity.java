package edu.uade.server.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "PARAMETROS_CONSULTA")
@AllArgsConstructor
@NoArgsConstructor
public class ConsultaParametroEntity {

    @Id
    @GeneratedValue
    @Column(name = "codigo", nullable = false)
    @Getter
    @Setter
    private Long codigo;

    @OneToOne(cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name = "evaluacion_losa_id", nullable = false)
    @Getter
    @Setter
    private EvaluacionLosaEntity evaluacionLosa;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "evaluacion_fenomeno_patologico_id", nullable = false)
    @Getter
    @Setter
    private List<EvaluacionFenomenoPatologicoEntity> evaluacionFenomenoPatologico = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "evaluacion_no_destructiva_id", nullable = false)
    @Getter
    @Setter
    private List<EvaluacionNoDestructivaEntity> evaluacionNoDestructiva = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "evaluacion_destructiva_id", nullable = false)
    @Getter
    @Setter
    private List<EvaluacionDestructivaEntity> evaluacionDestructiva = new ArrayList<>();
}
