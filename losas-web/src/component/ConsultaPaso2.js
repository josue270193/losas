import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Checkbox, Chip, FormControl, FormHelperText, Grid, Input, InputLabel, ListItemText, MenuItem, Select, withStyles} from "@material-ui/core";
import {
    CAMPO_FENOMENOS_PATOLOGICO,
    CAMPO_FENOMENOS_PATOLOGICO_HELP,
    CAMPO_FENOMENOS_PATOLOGICO_UBICACION,
    MENSAJE_CANTIDAD_SELECCIONADO,
    MENSAJE_SELECCION,
    VALOR_UBICACION_POR_DEFECTO,
} from "../util/MensajesUtil";
import {obtenerConfiguracionCache} from "../data/DataConfig";

const style = (theme) => ({
    root: {
        padding: theme.spacing.unit * 2,
        flexGrow: 1,
    },
    formControl: {
        margin: theme.spacing.unit,
        width: '100%',
    },
    rootFenomeno: {
        display: 'flex',
        padding: theme.spacing.unit / 2,
    },
    chipFenomeno: {
        flex: 1,
        margin: theme.spacing.unit / 2,
        height: 'auto'
    },
    formFenomeno: {
        flex: 1,
    }
});

class ConsultaPaso2 extends React.Component {

    constructor(prop){
        super(prop);

        const cache = obtenerConfiguracionCache();
        this.state = {
            opcionesFenomenos: cache['valoresFenomenoPatologico'] || [],
            opcionesUbicacionFenomeno: cache['valoresUbicacionFenomeno'] || [],
            opcionesNoDestructiva: cache['valoresEvaluacionNoDestructiva'] || [],
        };
    }

    onChangeFenomenoUbicacion = (valor, codigo) => {
        let data = this.props.data['evaluacionesFenomenoPatologico'] || [];
        data = data.map((item) => {
            if (item.valor.codigo === codigo){
                item.ubicacion.valorInferencia = valor;
            }
            return item;
        });
        this.props.onChangeData('evaluacionesFenomenoPatologico', data);
    };

    onChangeFenomenoPatologico = (event) => {
        let data = this.props.data['evaluacionesFenomenoPatologico'] || [];
        let dataNew = [];
        event.target.value.map((item) => {
            let dataItem = data.find((i) => i.valor.codigo === item) || null;
            if (dataItem){
                dataNew.push(dataItem);
            } else {
                dataNew.push({
                    codigo: null,
                    valor: {
                        codigo: item
                    },
                    ubicacion: {
                        valorInferencia: VALOR_UBICACION_POR_DEFECTO
                    },
                    cumpleNorma: false
                });
            }
            return item;
        });
        this.props.onChangeData('evaluacionesFenomenoPatologico', dataNew);
    };

    render() {
        const {classes, data} = this.props;
        const {opcionesFenomenos, opcionesUbicacionFenomeno, opcionesNoDestructiva} = this.state;

        return (
            <div className={classes.root}>
                <form autoComplete="off">
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={6}>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="field-fenomeno-patologico">
                                    {CAMPO_FENOMENOS_PATOLOGICO}
                                </InputLabel>
                                <Select
                                    multiple
                                    value={data.evaluacionesFenomenoPatologico.map((i) => i.valor.codigo)}
                                    onChange={this.onChangeFenomenoPatologico}
                                    input={<Input id="field-fenomeno-patologico" />}
                                    renderValue={selected => {
                                        return MENSAJE_CANTIDAD_SELECCIONADO(selected.length);
                                    }}
                                >
                                    <MenuItem value="" disabled>
                                        {MENSAJE_SELECCION}
                                    </MenuItem>
                                    {opcionesFenomenos.map((value, index) => {
                                        let item = {
                                            codigo: value.codigo,
                                            valorInferencia: value.valorInferencia,
                                            descripcion: value.descripcion
                                        };
                                        return (
                                            <MenuItem key={index} value={item.codigo}>
                                                <Checkbox checked={
                                                    data.evaluacionesFenomenoPatologico
                                                        .map((i) => i.valor.codigo)
                                                        .includes(item.codigo)
                                                } />
                                                <ListItemText primary={item.descripcion} />
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                                <FormHelperText>
                                    {CAMPO_FENOMENOS_PATOLOGICO_HELP}
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {data.evaluacionesFenomenoPatologico.map((value, index) => {
                                const item = opcionesFenomenos.find((i) => i.codigo === value.valor.codigo) || null;
                                return (
                                    item &&
                                    <div key={index} className={classes.rootFenomeno}>
                                        <Chip
                                          key={item.codigo}
                                          label={item.descripcion}
                                          className={classes.chipFenomeno}
                                        />
                                        <FormControl className={classNames(classes.formControl, classes.formFenomeno)}>
                                            <InputLabel htmlFor="field-fenomeno-ubicacion">
                                                {CAMPO_FENOMENOS_PATOLOGICO_UBICACION}
                                            </InputLabel>
                                            <Select
                                                value={value.ubicacion.valorInferencia}
                                                onChange={(event) => this.onChangeFenomenoUbicacion(event.target.value, item.codigo)}
                                                inputProps={{
                                                    name: 'fenomeno-ubicacion',
                                                    id: 'field-fenomeno-ubicacion',
                                                }}
                                            >
                                                <MenuItem value="" disabled>
                                                    {MENSAJE_SELECCION}
                                                </MenuItem>
                                                {opcionesUbicacionFenomeno.map((value, index) => {
                                                    let item = {
                                                        valorInferencia: value.valorInferencia,
                                                        descripcion: value.descripcion
                                                    };
                                                    return (
                                                        <MenuItem key={index} value={item.valorInferencia}>
                                                            {item.descripcion}
                                                        </MenuItem>
                                                    );
                                                })}
                                            </Select>
                                        </FormControl>
                                    </div>
                                );
                            })}
                        </Grid>
                        <Grid item xs={12} sm={6}>

                        </Grid>
                    </Grid>
                </form>
            </div>
        );
    }
}

ConsultaPaso2.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object,
    data: PropTypes.object.isRequired,
    onChangeData: PropTypes.func.isRequired,
};

export default ConsultaPaso2 = withStyles(style)(ConsultaPaso2);