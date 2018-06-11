package edu.uade.server.entity;

import edu.uade.server.dto.enumerado.UbicacionFenomenoEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "PARAMETROS_CONSULTA")
@AllArgsConstructor
@NoArgsConstructor
public class EvaluacionFenomenoPatologicoEntity {

    @Id
    @GeneratedValue
    @Column(name = "CODIGO", nullable = false)
    @Getter
    @Setter
    private Long codigo;

    @ManyToOne(optional = false)
    @JoinColumn(name = "VALOR", nullable = false)
    @Getter
    @Setter
    private ValorFenomenoPatologicoEntity valor;

    @Enumerated(EnumType.STRING)
    @Column(name = "UBICACION", nullable = false)
    @Getter
    @Setter
    private UbicacionFenomenoEnum ubicacion;

    @Column(name = "CUMPLE_NORMA", nullable = false)
    @Getter
    @Setter
    private Boolean cumpleNorma;
}
