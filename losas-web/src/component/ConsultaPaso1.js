import React from 'react';
import PropTypes from 'prop-types';
import {Checkbox, FormControl, FormHelperText, Grid, Input, InputLabel, ListItemText, MenuItem, Select, withStyles} from "@material-ui/core";
import {
    CAMPO_EVALUACION_INICIAL,
    CAMPO_EVALUACION_INICIAL_HELP,
    CAMPO_RELACION_FECHA,
    CAMPO_RELACION_FECHA_HELP,
    MENSAJE_CANTIDAD_SELECCIONADO,
    MENSAJE_SELECCION,
    MENSAJE_SELECCIONES,
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
});

class ConsultaPaso1 extends React.Component {

    constructor(prop){
        super(prop);

        const cache = obtenerConfiguracionCache();
        this.state = {
            opcionesRelacionFecha: cache['valoresRelacionFecha'] || [],
            opcionesEvaluacionInicial: cache['valoresInicial'] || [],
        };
    }

    onChangeRelacionFecha = event => {
        let data = this.props.data['evaluacionLosa'];
        data['relacionFecha']['valorInferencia'] = event.target.value;
        this.props.onChangeData('evaluacionLosa', data)
    };

    onChangeEvaluacionInicial = event => {
        let data = this.props.data['evaluacionLosa'];
        let dataItem = [];
        event.target.value.map((item) => {
            dataItem.push({
                codigo: item
            });
            return item;
        });
        data['valoresInicial'] = dataItem;
        this.props.onChangeData('evaluacionLosa', data)
    };

    render() {
        const {classes, data} = this.props;
        const {opcionesRelacionFecha, opcionesEvaluacionInicial} = this.state;

        return (
            <div className={classes.root}>
                <form autoComplete="off">
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={6}>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="field-relacion-fecha">
                                    {CAMPO_RELACION_FECHA}
                                </InputLabel>
                                <Select
                                    value={data.evaluacionLosa.relacionFecha.valorInferencia}
                                    onChange={this.onChangeRelacionFecha}
                                    inputProps={{
                                        name: 'relacion-fecha',
                                        id: 'field-relacion-fecha',
                                    }}
                                >
                                    <MenuItem value="" disabled>
                                        {MENSAJE_SELECCION}
                                    </MenuItem>
                                    {opcionesRelacionFecha.map((value, index) => {
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
                                <FormHelperText>
                                    {CAMPO_RELACION_FECHA_HELP}
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="field-evaluacion-inicial">
                                    {CAMPO_EVALUACION_INICIAL}
                                </InputLabel>
                                <Select
                                    multiple
                                    value={data.evaluacionLosa.valoresInicial.map((i) => i.codigo)}
                                    onChange={this.onChangeEvaluacionInicial}
                                    input={<Input id="field-evaluacion-inicial" />}
                                    renderValue={selected => {
                                        return MENSAJE_CANTIDAD_SELECCIONADO(selected.length);
                                    }}
                                >
                                    <MenuItem value="" disabled>
                                        {MENSAJE_SELECCIONES}
                                    </MenuItem>
                                    {opcionesEvaluacionInicial.map((value, index) => {
                                        let item = {
                                            codigo: value.codigo,
                                            valorInferencia: value.valorInferencia,
                                            descripcion: value.descripcion
                                        };
                                        return (
                                            <MenuItem key={index} value={item.codigo}>
                                                <Checkbox checked={data.evaluacionLosa.valoresInicial.map((i) => i.codigo).includes(item.codigo)} />
                                                <ListItemText primary={item.descripcion} />
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                                <FormHelperText>
                                    {CAMPO_EVALUACION_INICIAL_HELP}
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                    </Grid>
                </form>
            </div>
        );
    }
}

ConsultaPaso1.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object,
    data: PropTypes.object.isRequired,
    onChangeData: PropTypes.func.isRequired,
};

export default ConsultaPaso1 = withStyles(style)(ConsultaPaso1);