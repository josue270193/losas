package edu.uade.server.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "DIAGNOSTICOS")
@AllArgsConstructor
@NoArgsConstructor
public class DiagnosticoEntity {

    @Id
    @GeneratedValue
    @Column(name = "codigo", nullable = false)
    @Getter
    @Setter
    private Long codigo;

    @ManyToOne(optional = false)
    @JoinColumn(name = "valor", nullable = false)
    @Getter
    @Setter
    private ValorDiagnosticoEntity valor;

    @ManyToMany
    @JoinTable(name = "DIAGNOSTICOS_VALORES_DIAGNOSTICO_POSIBILIDADES")
    @Getter
    @Setter
    private List<ValorDiagnosticoPosibilidadEntity> valoresPosibilidad = new ArrayList<>();
}
