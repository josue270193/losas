import React from 'react';
import PropTypes from 'prop-types';
import {Checkbox, FormControl, Grid, Input, InputLabel, ListItemText, MenuItem, Select, withStyles} from "@material-ui/core";
import {obtenerConfiguracionCache} from "../data/DataConfig";
import {CAMPO_FENOMENOS_PATOLOGICO, MENSAJE_CANTIDAD_SELECCIONADO, MENSAJE_SELECCIONES} from "../util/MensajesUtil";

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

class ConsultaPaso2 extends React.Component {

    constructor(prop){
        super(prop);

        const cache = obtenerConfiguracionCache();
        console.log(cache);
        this.state = {
            opcionesFenomenos: cache['valoresFenomenoPatologico'] || [],
            opcionesNoDestructiva: cache['valoresEvaluacionNoDestructiva'] || [],
        };
    }

    render() {
        const {classes, data} = this.props;
        const {opcionesFenomenos, opcionesNoDestructiva} = this.state;

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
                                    value={data.evaluacionInicial}
                                    onChange={this.onChangeEvaluacionInicial}
                                    input={<Input id="field-fenomeno-patologico" />}
                                    renderValue={selected => {
                                        return MENSAJE_CANTIDAD_SELECCIONADO(selected.length);
                                    }}
                                >
                                    <MenuItem value="" disabled>
                                        {MENSAJE_SELECCIONES}
                                    </MenuItem>
                                    {opcionesFenomenos.map((value, index) => {
                                        let item = {
                                            codigo: value.codigo,
                                            valorInferencia: value.valorInferencia,
                                            descripcion: value.descripcion
                                        };
                                        return (
                                            <MenuItem key={index} value={item.codigo}>
                                                <Checkbox checked={data.evaluacionInicial.includes(item.codigo)} />
                                                <ListItemText primary={item.descripcion} />
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                            </FormControl>
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