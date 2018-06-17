import React from 'react';
import PropTypes from 'prop-types';
import {Button, CircularProgress, Divider, Hidden, Paper, Step, StepLabel, Stepper, Typography, withStyles} from "@material-ui/core";
import {
    MENSAJE_ALERTA_CANCELACION,
    MENSAJE_ANTERIOR,
    MENSAJE_EVALUACION_DESTRUCTIVA,
    MENSAJE_EVALUACION_LOSAS,
    MENSAJE_EVALUACION_NO_DESTRUCTIVA,
    MENSAJE_FINALIZAR,
    MENSAJE_REINICIAR,
    MENSAJE_SIGUIENTE
} from "../util/MensajesUtil";
import ConsultaPaso1 from "./ConsultaPaso1";
import ConsultaPaso2 from "./ConsultaPaso2";
import ConsultaPaso3 from "./ConsultaPaso3";
import {Prompt} from "react-router-dom";
import {mostrarMensajeError, requestDoConsulta} from "../data/DataConfig";

const styles = (theme) => ({
    root: {
        maxWidth: '900px',
        margin: '0 auto'
    },
    paperTitulo: {
        textAlign: 'center',
        padding: `${theme.spacing.unit * 2}px 0`
    },
    footer: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
    },
    button: {
        marginRight: theme.spacing.unit,
    },
    backButton: {
        marginRight: theme.spacing.unit,
    },
    completed: {
        display: 'inline-block',
    },
    progressDiv: {
        width: '100%',
        textAlign: 'center',
    },
    progress: {
        margin: theme.spacing.unit * 2,
    },
});

const getSteps = () => {
    return [
        MENSAJE_EVALUACION_LOSAS,
        MENSAJE_EVALUACION_NO_DESTRUCTIVA,
        MENSAJE_EVALUACION_DESTRUCTIVA
    ];
};
const stepsContent = {
    0: ConsultaPaso1,
    1: ConsultaPaso2,
    2: ConsultaPaso3
};

const crearNuevaConsulta = () => {
    return {
        codigo: null,
        evaluacionLosa: {
            codigo: null,
            relacionFecha: {
                valorInferencia: ''
            },
            valoresInicial: []
        },
        evaluacionesFenomenoPatologico: [],
        evaluacionesNoDestructiva: [],
        evaluacionesDestructiva: [],
    };
};

class FragmentCarga extends React.Component {

    state = {
        data: crearNuevaConsulta(),
        activeStep: 0,
        loading: false,
    };

    handleNext = () => {
        const { activeStep, data } = this.state;
        const steps = getSteps();

        this.setState({
            activeStep: activeStep + 1,
            loading: ((activeStep + 1) === steps.length)
        }, () => {
            if (this.state.activeStep === steps.length) {
                requestDoConsulta(data)
                    .then((resultado) => {
                        console.log(resultado);
                    })
                    .catch((error) => {
                        mostrarMensajeError(error);
                    })
                    .finally(() => {
                        this.setState({
                            loading: false
                        });
                    })
                ;
            }
        });
    };

    handleBack = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep - 1,
        });
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    onChangeData = (property, value) => {
        let newData = this.state.data;
        newData[property] = value;

        this.setState({
            data: newData
        });
    };

    render(){
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep, data, loading } = this.state;
        const StepComponent = stepsContent[activeStep];

        return (
            <div className={classes.root}>
                <Paper elevation={0} className={classes.paperTitulo}>
                    <Typography variant="display1">
                        Diagnostico
                    </Typography>
                </Paper>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map( (label) => {
                        return (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <Paper>
                    <Prompt
                        when={loading}
                        message={() => MENSAJE_ALERTA_CANCELACION}
                    />
                    {this.state.activeStep === steps.length ? (
                        <div>
                            <div className={classes.progressDiv}>
                                <CircularProgress className={classes.progress} size={50}/>
                            </div>
                            <Divider />
                            <div className={classes.footer}>
                                <Button onClick={this.handleReset} disabled={loading}>
                                    {MENSAJE_REINICIAR}
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <Hidden only={['sm', 'lg']}>
                                <div className={classes.footer}>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={this.handleBack}
                                        variant="outlined"
                                        className={classes.backButton}
                                    >
                                        {MENSAJE_ANTERIOR}
                                    </Button>
                                    <Button variant="outlined" color="primary" onClick={this.handleNext}>
                                        {activeStep === steps.length - 1 ?
                                            MENSAJE_FINALIZAR : MENSAJE_SIGUIENTE
                                        }
                                    </Button>
                                </div>
                                <Divider />
                            </Hidden>
                            <StepComponent data={data} onChangeData={this.onChangeData} />
                            <Divider />
                            <div className={classes.footer}>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={this.handleBack}
                                    variant="outlined"
                                    className={classes.backButton}
                                >
                                    {MENSAJE_ANTERIOR}
                                </Button>
                                <Button variant="outlined" color="primary" onClick={this.handleNext}>
                                    {activeStep === steps.length - 1 ?
                                        MENSAJE_FINALIZAR : MENSAJE_SIGUIENTE
                                    }
                                </Button>
                            </div>
                        </div>
                    )}
                </Paper>
            </div>
        );
    }
}

FragmentCarga.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(FragmentCarga)
