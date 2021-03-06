import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Checkbox, Chip, FormControl, FormHelperText, Grid, Input, InputLabel, ListItemText, MenuItem, Select, withStyles} from "@material-ui/core";
import {
    CAMPO_EVALUACION_NO_DESTRUCTIVA,
    CAMPO_EVALUACION_NO_DESTRUCTIVA_COLOR,
    CAMPO_EVALUACION_NO_DESTRUCTIVA_HELP,
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
    rootChip: {
        display: 'flex',
        margin: theme.spacing.unit,
        alignItems: 'center',
    },
    chip: {
        flex: 1,
    },
    formChip: {
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
            opcionesColorEvaluacion: cache['valoresColorEvaluacion'] || []
        };
    }

    onChangeEvaluacionColor = (valor, codigo) => {
        let data = this.props.data['evaluacionesNoDestructiva'] || [];
        data = data.map((item) => {
            if (item.valor.codigo === codigo){
                item.colorEvaluacion.valorInferencia = valor;
            }
            return item;
        });
        this.props.onChangeData('evaluacionesNoDestructiva', data);
    };

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
                        codigo: item,
                        valorInferencia: this.state.opcionesFenomenos.find(i => i.codigo === item).valorInferencia
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

    onChangeEvaluacionNoDestructiva = (event) => {
        let data = this.props.data['evaluacionesNoDestructiva'] || [];
        let dataNew = [];
        event.target.value.map((item) => {
            let dataItem = data.find((i) => i.valor.codigo === item) || null;
            if (dataItem){
                dataNew.push(dataItem);
            } else {
                dataNew.push({
                    codigo: null,
                    valor: {
                        codigo: item,
                        valorInferencia: this.state.opcionesNoDestructiva.find(i => i.codigo === item).valorInferencia
                    },
                    colorEvaluacion: {
                        valorInferencia: VALOR_UBICACION_POR_DEFECTO
                    },
                    cumpleNorma: false
                });
            }
            return item;
        });
        this.props.onChangeData('evaluacionesNoDestructiva', dataNew);
    };

    render() {
        const {classes, data} = this.props;
        const {opcionesFenomenos, opcionesUbicacionFenomeno, opcionesNoDestructiva, opcionesColorEvaluacion} = this.state;

        return (
            <form autoComplete="off" className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <Grid container spacing={0}>
                            <Grid item xs={12}>
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
                            <Grid item xs={12}>
                                {data.evaluacionesFenomenoPatologico.map((value, index) => {
                                    const item = opcionesFenomenos.find((i) => i.codigo === value.valor.codigo) || null;
                                    return (
                                        item &&
                                        <div key={index} className={classes.rootChip}>
                                            <Chip
                                                key={item.codigo}
                                                label={item.descripcion}
                                                className={classes.chip}
                                            />
                                            <FormControl className={classNames(classes.formControl, classes.formChip)}>
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
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grid container spacing={0}>
                            <Grid item xs={12}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="field-evaluacion-no-destructiva">
                                        {CAMPO_EVALUACION_NO_DESTRUCTIVA}
                                    </InputLabel>
                                    <Select
                                        multiple
                                        value={data.evaluacionesNoDestructiva.map((i) => i.valor.codigo)}
                                        onChange={this.onChangeEvaluacionNoDestructiva}
                                        input={<Input id="field-evaluacion-no-destructiva" />}
                                        renderValue={selected => {
                                            return MENSAJE_CANTIDAD_SELECCIONADO(selected.length);
                                        }}
                                    >
                                        <MenuItem value="" disabled>
                                            {MENSAJE_SELECCION}
                                        </MenuItem>
                                        {opcionesNoDestructiva.map((value, index) => {
                                            let item = {
                                                codigo: value.codigo,
                                                valorInferencia: value.valorInferencia,
                                                descripcion: value.descripcion
                                            };
                                            return (
                                                <MenuItem key={index} value={item.codigo}>
                                                    <Checkbox checked={
                                                        data.evaluacionesNoDestructiva
                                                            .map((i) => i.valor.codigo)
                                                            .includes(item.codigo)
                                                    } />
                                                    <ListItemText primary={item.descripcion} />
                                                </MenuItem>
                                            );
                                        })}
                                    </Select>
                                    <FormHelperText>
                                        {CAMPO_EVALUACION_NO_DESTRUCTIVA_HELP}
                                    </FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                {data.evaluacionesNoDestructiva.map((value, index) => {
                                    const item = opcionesNoDestructiva.find((i) => i.codigo === value.valor.codigo) || null;
                                    return (
                                        item &&
                                        <div key={index} className={classes.rootChip}>
                                            <Chip
                                                key={item.codigo}
                                                label={item.descripcion}
                                                className={classes.chip}
                                            />
                                            {
                                                item.codigo === 5 &&
                                                <FormControl className={classNames(classes.formControl, classes.formChip)}>
                                                    <InputLabel htmlFor="field-evaluacion-color">
                                                        {CAMPO_EVALUACION_NO_DESTRUCTIVA_COLOR}
                                                    </InputLabel>
                                                    <Select
                                                        value={value.colorEvaluacion.valorInferencia}
                                                        onChange={(event) => this.onChangeEvaluacionColor(event.target.value, item.codigo)}
                                                        inputProps={{
                                                            name: 'evaluacion-color',
                                                            id: 'field-evaluacion-color',
                                                        }}
                                                    >
                                                        <MenuItem value="" disabled>
                                                            {MENSAJE_SELECCION}
                                                        </MenuItem>
                                                        {opcionesColorEvaluacion.map((value, index) => {
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
                                            }
                                        </div>
                                    );
                                })}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
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