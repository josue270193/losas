import React from 'react';
import PropTypes from 'prop-types';
import {IconButton, Snackbar, Typography, withStyles} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import classNames from 'classnames';

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};

const styles = (theme) => ({
    close: {
        width: theme.spacing.unit * 4,
        height: theme.spacing.unit * 4,
    },
    mensajeSnackBar: {
        whiteSpace: 'pre-wrap',
        color: 'white'
    },
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.dark,
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit,
    },
});

class MensajeError extends React.Component {

    render(){
        const { classes, mensaje, variant, open, onCerrarMensaje } = this.props;
        const Icon = variantIcon[variant];

        return (
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
                open={open}
                onClose={onCerrarMensaje}
                ContentProps={{
                    'aria-describedby': 'message-id',
                    className: classes[variant],
                }}
                message={
                    <Typography
                        id="message-id"
                        variant="headline"
                        className={classes.mensajeSnackBar}>
                        <Icon className={classNames(classes.icon, classes.iconVariant)} />
                        {mensaje}
                    </Typography>
                }
                action={[
                    <IconButton
                        key="cerrar"
                        aria-label="Cerrar"
                        color="inherit"
                        className={classes.close}
                        onClick={onCerrarMensaje}
                    >
                        <CloseIcon />
                    </IconButton>,
                ]}
            />
        );
    }
}

MensajeError.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    mensaje: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
    open: PropTypes.bool.isRequired,
    onCerrarMensaje: PropTypes.func.isRequired
};

export default withStyles(styles, {withTheme: true})(MensajeError)
