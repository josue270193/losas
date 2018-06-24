package edu.uade.server.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "CONSULTAS")
@AllArgsConstructor
@NoArgsConstructor
public class ConsultaEntity {

    @Id
    @GeneratedValue
    @Column(name = "codigo", nullable = false)
    @Getter
    @Setter
    private Long codigo;

    @OneToOne(cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name = "parametro_id", nullable = false)
    @Getter
    @Setter
    private ConsultaParametroEntity parametro;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "diagnostico_id")
    @Getter
    @Setter
    private DiagnosticoEntity diagnostico;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "fecha_creacion", nullable = false)
    @Getter
    @Setter
    private Date fechaCreacion;

    @Column(name = "reglas_aplicadas")
    @Getter
    @Setter
    private String reglasAplicadas;
}
