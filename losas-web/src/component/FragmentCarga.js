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

const stylePasos = (theme) => ({
    root: {
        padding: theme.spacing.unit * 2
    }
});
class Paso1Componente extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                Paso 1
            </div>
        );
    }
}
class Paso2Componente extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                Paso 2
            </div>
        );
    }
}
class Paso3Componente extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                Paso 3
            </div>
        );
    }
}
class PasoNuloComponente extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                Paso Nulo
            </div>
        );
    }
}

const Paso1 = withStyles(stylePasos)(Paso1Componente);
const Paso2 = withStyles(stylePasos)(Paso2Componente);
const Paso3 = withStyles(stylePasos)(Paso3Componente);
const PasoNulo = withStyles(stylePasos)(PasoNuloComponente);

function getSteps() {
    return [
        MENSAJE_EVALUACION_LOSAS,
        MENSAJE_EVALUACION_NO_DESTRUCTIVA,
        MENSAJE_EVALUACION_DESTRUCTIVA
    ];
}
const stepsContent = {
    0: Paso1,
    1: Paso2,
    2: Paso3
};


class FragmentCarga extends React.Component {

    state = {
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

    render(){
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;
        const SpecificStory = stepsContent[activeStep] || PasoNulo;

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
                            <SpecificStory />
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
