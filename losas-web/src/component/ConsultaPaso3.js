import React from 'react';
import PropTypes from 'prop-types';
import {Checkbox, Chip, FormControl, FormHelperText, Grid, Input, InputLabel, ListItemText, MenuItem, Select, withStyles} from "@material-ui/core";
import {obtenerConfiguracionCache} from "../data/DataConfig";
import {CAMPO_EVALUACION_DESTRUCTIVA, CAMPO_EVALUACION_DESTRUCTIVA_HELP, MENSAJE_CANTIDAD_SELECCIONADO, MENSAJE_SELECCIONES,} from "../util/MensajesUtil";

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
        padding: theme.spacing.unit,
        alignItems: 'center',
    },
    chip: {
        flex: 1,
        whiteSpace: 'pre-wrap',
    },
    formChip: {
        flex: 1,
    }
});

class ConsultaPaso3 extends React.Component {

    constructor(prop){
        super(prop);

        const cache = obtenerConfiguracionCache();
        this.state = {
            opcionesDestructiva: cache['valoresEvaluacionDestructiva'] || [],
        };
    }

    onChangeEvaluacionDestructiva = (event) => {
        let data = this.props.data['evaluacionesDestructiva'] || [];
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
                    cumpleNorma: false
                });
            }
            return item;
        });
        this.props.onChangeData('evaluacionesDestructiva', dataNew);
    };

    render() {
        const {classes, data} = this.props;
        const {opcionesDestructiva} = this.state;

        return (
            <div className={classes.root}>
                <form autoComplete="off">
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="field-evaluacion-destructiva">
                                    {CAMPO_EVALUACION_DESTRUCTIVA}
                                </InputLabel>
                                <Select
                                    multiple
                                    value={data.evaluacionesDestructiva.map((i) => i.valor.codigo)}
                                    onChange={this.onChangeEvaluacionDestructiva}
                                    input={<Input id="field-evaluacion-destructiva" />}
                                    renderValue={selected => {
                                        return MENSAJE_CANTIDAD_SELECCIONADO(selected.length);
                                    }}
                                >
                                    <MenuItem value="" disabled>
                                        {MENSAJE_SELECCIONES}
                                    </MenuItem>
                                    {opcionesDestructiva.map((value, index) => {
                                        let item = {
                                            codigo: value.codigo,
                                            valorInferencia: value.valorInferencia,
                                            descripcion: value.descripcion
                                        };
                                        return (
                                            <MenuItem key={index} value={item.codigo}>
                                                <Checkbox checked={data.evaluacionesDestructiva.map((i) => i.valor.codigo).includes(item.codigo)} />
                                                <ListItemText primary={item.descripcion} />
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                                <FormHelperText>
                                    {CAMPO_EVALUACION_DESTRUCTIVA_HELP}
                                </FormHelperText>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container spacing={0}>
                            {data.evaluacionesDestructiva.map((value, index) => {
                                const item = opcionesDestructiva.find((i) => i.codigo === value.valor.codigo) || null;
                                return (
                                    item &&
                                    <Grid item xs={12} sm={6} key={index}>
                                        <div className={classes.rootChip}>
                                            <Chip
                                                key={item.codigo}
                                                label={item.descripcion}
                                                className={classes.chip}
                                            />
                                        </div>
                                    </Grid>
                                );
                            })}
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </div>
        );
    }
}

ConsultaPaso3.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object,
    data: PropTypes.object.isRequired,
    onChangeData: PropTypes.func.isRequired,
};

export default ConsultaPaso3 = withStyles(style)(ConsultaPaso3);