import React from 'react';
import PropTypes from 'prop-types';
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    Chip,
    Divider,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Grid,
    GridList,
    GridListTile,
    GridListTileBar,
    Paper,
    Typography,
    withStyles
} from "@material-ui/core";
import DoneIcon from '@material-ui/icons/Done';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {
    CAMPO_EVALUACION_DESTRUCTIVA,
    CAMPO_EVALUACION_INICIAL,
    CAMPO_EVALUACION_NO_DESTRUCTIVA,
    CAMPO_FENOMENOS_PATOLOGICO,
    CAMPO_RELACION_FECHA,
    FORMATO_FECHA_HORA,
    IMAGEN_VALOR_DIAGNOSTICO,
    MENSAJE_BOTON_COPIAR,
    MENSAJE_VALOR_DIAGNOSTICO,
    TITULO_DIAGNOSTICO_PARAMETROS,
    TITULO_DIAGNOSTICO_RESPUESTA,
    TITULO_VER_CONSULTA,
    TITULO_VER_CONSULTA_SUBTITULO
} from "../util/MensajesUtil";
import {mostrarMensajeError, requestObtenerConsultaCodigo} from "../data/DataConfig";

const styles = (theme) => ({
    root: {
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
    textoChip: {
        width: '150px',
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
                        <Grid item sm={12} md={6}>
                            <Card >
                                <CardContent>
                                    <Typography gutterBottom variant="headline" component="h2">
                                        {TITULO_DIAGNOSTICO_RESPUESTA}
                                    </Typography>

                                    <Divider className={classes.gridRoot}/>

                                    <Grid container spacing={0}>
                                        <Grid item sm={12} md={7}>
                                            <GridList cellHeight={160} cols={1}>
                                                <GridListTile cols={1}>
                                                    <img className={classes.imagenRespuesta} src={IMAGEN_VALOR_DIAGNOSTICO(codigoRespuesta)} alt={MENSAJE_VALOR_DIAGNOSTICO(codigoRespuesta)}/>
                                                    <GridListTileBar
                                                        title={MENSAJE_VALOR_DIAGNOSTICO(codigoRespuesta)}
                                                    />
                                                </GridListTile>
                                            </GridList>
                                        </Grid>
                                        <Grid item sm={12} md={5}>
                                            <ExpansionPanel>
                                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                                    <Typography className={classes.textoRespuesta}>
                                                        {MENSAJE_VALOR_DIAGNOSTICO(codigoRespuesta)}
                                                    </Typography>
                                                </ExpansionPanelSummary>
                                                <ExpansionPanelDetails>
                                                    <Typography>
                                                        Descripcion
                                                    </Typography>
                                                </ExpansionPanelDetails>
                                            </ExpansionPanel>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item sm={12} md={6}>
                            <Card >
                                <CardContent>
                                    <Typography gutterBottom variant="headline" component="h2">
                                        {TITULO_DIAGNOSTICO_PARAMETROS}
                                    </Typography>

                                    <Divider className={classes.gridRoot}/>

                                    <Grid container spacing={0}>
                                        <Grid item sm={12} md={6}>
                                            <Typography variant="title" gutterBottom>
                                                {CAMPO_RELACION_FECHA}
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={12} md={6}>
                                            <Typography variant="subheading" gutterBottom className={classes.textoAlineado}>
                                                {consulta.parametro.evaluacionLosa.relacionFecha.descripcion}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={0}>
                                        <Grid item sm={12} md={6} className={classes.columnaTitulo}>
                                            <Typography variant="title" gutterBottom>
                                                {CAMPO_EVALUACION_INICIAL}
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={12} md={6}>
                                            {consulta.parametro.evaluacionLosa.valoresInicial.map((elem, index) =>
                                                <div key={index} className={classes.rootChip}>
                                                    <Chip key={index} label={elem.descripcion} className={classes.chip} />
                                                </div>
                                            )}
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={0}>
                                        <Grid item sm={12} md={6} className={classes.columnaTitulo}>
                                            <Typography variant="title" gutterBottom>
                                                {CAMPO_FENOMENOS_PATOLOGICO}
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={12} md={6}>
                                            {consulta.parametro.evaluacionesFenomenoPatologico.map((elem, index) =>
                                                <div key={index} className={classes.rootChip}>
                                                    <Chip key={index} label={elem.valor.descripcion} className={classes.chip}
                                                        avatar={
                                                            <Avatar>
                                                                {elem.cumpleNorma ?
                                                                    <DoneIcon/> : <ErrorIcon/>
                                                                }
                                                            </Avatar>
                                                        }
                                                    />
                                                    <Typography variant="subheading" gutterBottom className={classes.textoChip}>
                                                        {elem.ubicacion.descripcion}
                                                    </Typography>
                                                </div>
                                            )}
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={0}>
                                        <Grid item sm={12} md={6} className={classes.columnaTitulo}>
                                            <Typography variant="title" gutterBottom>
                                                {CAMPO_EVALUACION_NO_DESTRUCTIVA}
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={12} md={6}>
                                            {consulta.parametro.evaluacionesNoDestructiva.map((elem, index) =>
                                                <div key={index} className={classes.rootChip}>
                                                    <Chip key={index} label={elem.valor.descripcion} className={classes.chip}
                                                          avatar={
                                                              <Avatar>
                                                                  {elem.cumpleNorma ?
                                                                      <DoneIcon/> : <ErrorIcon/>
                                                                  }
                                                              </Avatar>
                                                          }
                                                    />
                                                    <Typography variant="subheading" gutterBottom className={classes.textoChip}>
                                                        {elem.colorEvaluacion.descripcion}
                                                    </Typography>
                                                </div>
                                            )}
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={0}>
                                        <Grid item sm={12} md={6} className={classes.columnaTitulo}>
                                            <Typography variant="title" gutterBottom>
                                                {CAMPO_EVALUACION_DESTRUCTIVA}
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={12} md={6}>
                                            {consulta.parametro.evaluacionesDestructiva.map((elem, index) =>
                                                <div key={index} className={classes.rootChip}>
                                                    <Chip key={index} label={elem.valor.descripcion} className={classes.chip}
                                                          avatar={
                                                              <Avatar>
                                                                  {elem.cumpleNorma ?
                                                                      <DoneIcon/> : <ErrorIcon/>
                                                                  }
                                                              </Avatar>
                                                          }
                                                    />
                                                </div>
                                            )}
                                        </Grid>
                                    </Grid>

                                </CardContent>
                                <Divider />
                                <CardActions>
                                    <Button size="small" color="primary" variant="outlined">
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
