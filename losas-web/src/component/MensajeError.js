import React from 'react';
import PropTypes from 'prop-types';
import {IconButton, Snackbar, withStyles} from "material-ui";
import CloseIcon from 'material-ui-icons/Close';

const styles = (theme) => ({
    close: {
        width: theme.spacing.unit * 4,
        height: theme.spacing.unit * 4,
    },
});

class MensajeError extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: props.open
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({ open: nextProps.open });
    }

    onCerrarMensaje= (event, reason) => {
        this.setState({ open: false });
    };

    render(){
        const { mensaje, classes } = this.props;
        const { open } = this.state;
        return (
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
                open={open}
                autoHideDuration={5000}
                onClose={this.onCerrarMensaje}
                SnackbarContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">{mensaje}</span>}
                action={[
                    <IconButton
                        key="cerrar"
                        aria-label="Cerrar"
                        color="inherit"
                        className={classes.close}
                        onClick={this.onCerrarMensaje}
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
    open: PropTypes.bool
};

export default withStyles(styles, {withTheme: true})(MensajeError)
