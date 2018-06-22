import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Button, Card, CardActions, CardContent, Chip, Divider, Grid, GridList, GridListTile, GridListTileBar, Paper, Typography, withStyles} from "@material-ui/core";
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

import {
    CAMPO_EVALUACION_DESTRUCTIVA,
    CAMPO_EVALUACION_INICIAL,
    CAMPO_EVALUACION_NO_DESTRUCTIVA,
    CAMPO_FENOMENOS_PATOLOGICO,
    CAMPO_RELACION_FECHA,
    FORMATO_FECHA_HORA,
    IMAGEN_VALOR_DIAGNOSTICO,
    MENSAJE_BOTON_COPIAR,
    MENSAJE_CUMPLE_NORMA,
    MENSAJE_NO_CUMPLE_NORMA,
    MENSAJE_VALOR_DIAGNOSTICO,
    TITULO_DIAGNOSTICO_PARAMETROS,
    TITULO_DIAGNOSTICO_RESPUESTA,
    TITULO_VER_CONSULTA,
    TITULO_VER_CONSULTA_SUBTITULO
} from "../util/MensajesUtil";
import {mostrarMensajeError, requestObtenerConsultaCodigo} from "../data/DataConfig";
import {Link} from "react-router-dom";
import {ROUTE_HOME_DIAGNOSTICO} from "../util/URLUtil";

const colorValido = green[600];
const colorInvalido = red[500];

const styles = (theme) => ({
    root: {
        maxWidth: '900px',
        margin: '0 auto'
    },
    paperTitulo: {
        textAlign: 'center',
        padding: `${theme.spacing.unit * 2}px 0`,
        marginBottom: theme.spacing.unit,
    },
    columnaTitulo: {
        margin: 'auto 0'
    },
    textoAlineado: {
        margin: 'auto 0',
        textAlign: 'center',
    },
    gridRoot: {
        margin: `${theme.spacing.unit * 2}px 0`,
    },
    gridTitulo: {
        minHeight: `${theme.spacing.unit * 4}px`
    },
    rootChip: {
        display: 'flex',
        padding: theme.spacing.unit,
        alignItems: 'center',
    },
    chip: {
        flex: 1,
        whiteSpace: 'pre-wrap',
        height: 'auto',
        minHeight: theme.spacing.unit * 4,
    },
    chipInvalido: {
        background: colorInvalido,
        color: theme.palette.getContrastText(colorInvalido),
    },
    chipValido: {
        background: colorValido,
        color: theme.palette.getContrastText(colorValido),
    },
    textoChip: {
        width: '100%',
        minWidth: '150px',
        margin: `${theme.spacing.unit * 1}px 0`,
        textAlign: 'center',
    },
    textoRespuesta: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    imagenRespuesta: {
        height: '100%',
        objectFit: 'scale-down'
    },
    inlineLeyenda: {
        display: 'inline-block',
    }
});

class FragmentVerConsulta extends React.Component {

    constructor(props){
        super(props);

        const match = this.props.match;
        this.state = {
            consulta: null,
            codigo: match.params.id,
            codigoRespuesta: 0
        };
    }

    componentDidMount(){
        const codigo = this.state.codigo;
        if (!isNaN(codigo) && codigo > 0) {
            requestObtenerConsultaCodigo(codigo)
                .then((resultado) => {
                    console.log(resultado);

                    let codigoRespuesta = 0;
                    if (resultado && resultado.diagnostico && resultado.diagnostico.valor){
                        codigoRespuesta = resultado.diagnostico.valor.codigo || 0;
                    }

                    this.setState({
                        consulta: resultado,
                        codigoRespuesta: codigoRespuesta,
                    });
                })
                .catch((error) => {
                    mostrarMensajeError(error);
                    this.setState({
                        codigo: null
                    });
                })
            ;
        } else {
            this.setState({
                codigo: null
            });
        }
    }

    render(){
        const { classes } = this.props;
        const { consulta, codigoRespuesta } = this.state;
        const linkCopiar = (props) => <Link to={{pathname: ROUTE_HOME_DIAGNOSTICO, data: props.data}} {...props} />;

        return (
            <div className={classes.root}>
                {consulta &&
                <div>
                    <Paper elevation={0} className={classes.paperTitulo}>
                        <Typography variant="display1">
                            {TITULO_VER_CONSULTA(FORMATO_FECHA_HORA(consulta.fechaCreacion))}
                        </Typography>
                        <Typography variant="subheading">
                            {TITULO_VER_CONSULTA_SUBTITULO(consulta.codigo)}
                        </Typography>
                    </Paper>
                    <Grid container spacing={16}>
                        <Grid item xs={12} md={6}>
                            <Card>
                                <CardContent>
                                    <div className={classes.gridTitulo}>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            {TITULO_DIAGNOSTICO_RESPUESTA}
                                        </Typography>
                                    </div>
                                    <Divider className={classes.gridRoot}/>

                                    <Grid container spacing={0}>
                                        <Grid item xs={12} >
                                            <GridList cellHeight={160} cols={1}>
                                                <GridListTile cols={1}>
                                                    <img className={classes.imagenRespuesta} src={IMAGEN_VALOR_DIAGNOSTICO(codigoRespuesta)} alt={MENSAJE_VALOR_DIAGNOSTICO(codigoRespuesta)}/>
                                                    <GridListTileBar
                                                        title={MENSAJE_VALOR_DIAGNOSTICO(codigoRespuesta)}
                                                    />
                                                </GridListTile>
                                            </GridList>
                                        </Grid>
                                        <Grid item xs={12} >

                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card >
                                <CardContent>
                                    <Grid container spacing={0} className={classes.gridTitulo}>
                                        <Grid item xs={12} lg={8}>
                                            <Typography gutterBottom variant="headline" component="h2">
                                                {TITULO_DIAGNOSTICO_PARAMETROS}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs lg>
                                            <Grid container spacing={8}>
                                                <Grid item xs={6} lg={6}>
                                                    <Typography gutterBottom variant="caption">
                                                        {MENSAJE_CUMPLE_NORMA}
                                                        <div className={classes.chipValido}>
                                                            &nbsp;
                                                        </div>
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={6} lg={6}>
                                                    <Typography gutterBottom variant="caption">
                                                        {MENSAJE_NO_CUMPLE_NORMA}
                                                        <div className={classes.chipInvalido}>
                                                            &nbsp;
                                                        </div>
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Divider className={classes.gridRoot}/>

                                    <Grid container spacing={0}>
                                        <Grid item xs={12} >
                                            <Typography variant="body2" gutterBottom>
                                                {CAMPO_RELACION_FECHA}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} >
                                            <Typography variant="body1" gutterBottom className={classes.textoAlineado}>
                                                {consulta.parametro.evaluacionLosa.relacionFecha.descripcion}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    {consulta.parametro.evaluacionLosa.valoresInicial.length > 0
                                    &&
                                    <Grid container spacing={0}>

                                        <Grid item xs={12} className={classes.columnaTitulo}>
                                            <Typography variant="body2" gutterBottom>
                                                {CAMPO_EVALUACION_INICIAL}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} >
                                            {consulta.parametro.evaluacionLosa.valoresInicial.map((elem, index) =>
                                                <div key={index} className={classes.rootChip}>
                                                    <Chip key={index} label={elem.descripcion} className={classes.chip} />
                                                </div>
                                            )}
                                        </Grid>
                                    </Grid>
                                    }
                                    {consulta.parametro.evaluacionesFenomenoPatologico.length > 0
                                    &&
                                    <Grid container spacing={0}>
                                        <Grid item xs={12} className={classes.columnaTitulo}>
                                            <Typography variant="body2" gutterBottom>
                                                {CAMPO_FENOMENOS_PATOLOGICO}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Grid container spacing={0}>
                                                {consulta.parametro.evaluacionesFenomenoPatologico.map((elem, index) =>
                                                    <React.Fragment key={index}>
                                                        <Grid item xs={12} lg={6} className={classes.rootChip}>
                                                            <Chip key={index} label={elem.valor.descripcion}
                                                                  className={classNames(classes.chip, elem.cumpleNorma ? classes.chipValido : classes.chipInvalido)}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} lg={6} className={classes.rootChip}>
                                                            <Typography variant="body1" gutterBottom className={classes.textoChip}>
                                                                {elem.ubicacion.descripcion}
                                                            </Typography>
                                                        </Grid>
                                                    </React.Fragment>
                                                )}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    }
                                    {consulta.parametro.evaluacionesNoDestructiva.length > 0
                                    &&
                                    <Grid container spacing={0}>
                                        <Grid item xs={12} className={classes.columnaTitulo}>
                                            <Typography variant="body2" gutterBottom>
                                                {CAMPO_EVALUACION_NO_DESTRUCTIVA}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Grid container spacing={0}>
                                                {consulta.parametro.evaluacionesNoDestructiva.map((elem, index) =>
                                                    <React.Fragment key={index}>
                                                        <Grid item xs={12} lg={6} className={classes.rootChip}>
                                                            <Chip key={index} label={elem.valor.descripcion}
                                                                  className={classNames(classes.chip, elem.cumpleNorma ? classes.chipValido : classes.chipInvalido)}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} lg={6} className={classes.rootChip}>
                                                            <Typography variant="body1" gutterBottom className={classes.textoChip}>
                                                                {elem.colorEvaluacion.descripcion}
                                                            </Typography>
                                                        </Grid>
                                                    </React.Fragment>
                                                )}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    }
                                    {consulta.parametro.evaluacionesDestructiva.length > 0
                                    &&
                                    <Grid container spacing={0}>
                                        <Grid item xs={12} className={classes.columnaTitulo}>
                                            <Typography variant="body2" gutterBottom>
                                                {CAMPO_EVALUACION_DESTRUCTIVA}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Grid container spacing={0}>
                                                {consulta.parametro.evaluacionesDestructiva.map((elem, index) =>
                                                    <React.Fragment key={index}>
                                                        <Grid item xs={12} lg={6} className={classes.rootChip}>
                                                            <Chip key={index}
                                                                  label={elem.valor.descripcion}
                                                                  className={classNames(classes.chip, elem.cumpleNorma ? classes.chipValido : classes.chipInvalido)}
                                                            />
                                                        </Grid>
                                                    </React.Fragment>
                                                )}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    }
                                </CardContent>
                                <Divider />
                                <CardActions>
                                    <Button size="small" color="primary" variant="outlined" component={linkCopiar} data={consulta.parametro}>
                                        {MENSAJE_BOTON_COPIAR}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
                }
            </div>
        );
    }
}

FragmentVerConsulta.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(FragmentVerConsulta)
