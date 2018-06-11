package edu.uade.server.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "CONSULTAS")
@AllArgsConstructor
@NoArgsConstructor
public class ConsultaEntity {

    @Id
    @GeneratedValue
    @Column(name = "CODIGO", nullable = false)
    @Getter
    @Setter
    private Long codigo;

    @OneToOne(optional = false)
    @JoinColumn(name = "PARAMETRO", nullable = false)
    @Getter
    @Setter
    private ConsultaParametroEntity parametro;

    @OneToOne
    @JoinColumn(name = "DIAGNOSTICO")
    @Getter
    @Setter
    private DiagnosticoEntity diagnostico;

}
