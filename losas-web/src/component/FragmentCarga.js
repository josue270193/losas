import React from 'react';
import PropTypes from 'prop-types';
import {Button, CircularProgress, Divider, Paper, Step, StepLabel, Stepper, withStyles} from "@material-ui/core";
import {
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

const styles = (theme) => ({
    root: {
        width: '90%',
    },
    footer: {
        padding: theme.spacing.unit * 2,
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
    progress: {
        margin: theme.spacing.unit * 2,
    },
});

function getSteps() {
    return [
        MENSAJE_EVALUACION_LOSAS,
        MENSAJE_EVALUACION_NO_DESTRUCTIVA,
        MENSAJE_EVALUACION_DESTRUCTIVA
    ];
}

const stepsContent = {
    0: ConsultaPaso1,
    1: ConsultaPaso2,
    2: ConsultaPaso3
};

class FragmentCarga extends React.Component {

    state = {
        data: {
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
        },
        activeStep: 0,
    };

    handleNext = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep + 1,
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
        const { activeStep, data } = this.state;
        const StepComponent = stepsContent[activeStep];

        return (
            <div className={classes.root}>
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
                    {this.state.activeStep === steps.length ? (
                        <div>
                            <CircularProgress className={classes.progress} />
                            <Divider />
                            <div className={classes.footer}>
                                <Button onClick={this.handleReset}>
                                    {MENSAJE_REINICIAR}
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div>
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
