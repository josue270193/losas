package edu.uade.server.entity;

import edu.uade.server.dto.enumerado.UbicacionFenomenoEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "EVALUACION_FENOMENO_PATOLOGICO")
@AllArgsConstructor
@NoArgsConstructor
public class EvaluacionFenomenoPatologicoEntity {

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
    private ValorFenomenoPatologicoEntity valor;

    @Enumerated(EnumType.STRING)
    @Column(name = "ubicacion", nullable = false)
    @Getter
    @Setter
    private UbicacionFenomenoEnum ubicacion;

    @Column(name = "cumple_norma", nullable = false)
    @Getter
    @Setter
    private Boolean cumpleNorma;
}
