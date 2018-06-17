import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import {Link} from "react-router-dom";
import {AppBar, Button, Toolbar, Typography, withStyles} from "@material-ui/core";
import {MENSAJE_INICIO, TITULO_APLICATIVO} from "../util/MensajesUtil";
import {ROUTE_HOME_DIAGNOSTICO} from "../util/URLUtil";

const styles = (theme) => ({
    root: {
        width: '100%',
        height: '100vh',
        zIndex: 1,
        overflow: 'hidden'
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        [theme.breakpoints.up('md')]: {
            width: `calc(100%)`,
        }
    },
    content: {
        width: '0',
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 1,
        height: `calc(100% - ${theme.mixins.toolbar.minHeight}px)`,
        marginTop: theme.mixins.toolbar.minHeight,
        [theme.breakpoints.up('sm')]: {
            height: `calc(100% - ${theme.mixins.toolbar.minHeight}px)`,
            marginTop: theme.mixins.toolbar.minHeight
        },
        overflowY: 'auto'
    },
    button: {
        margin: theme.spacing.unit,
    },
    flex: {
        flex: 1,
    },
    centrado: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, 50%)'
    },
    centradoTexto: {
        width: '100%',
        textAlign: 'center',
    }
});

class PageIndex extends React.Component {

    render(){
        const { classes } = this.props;
        const LinkCustom = props => <Link to={ROUTE_HOME_DIAGNOSTICO} {...props} />;

        return (
            <div className={classes.root}>
                <div id="mensaje_error"/>
                <div className={classes.appFrame}>
                    <AppBar
                        position="absolute"
                        className={classes.appBar}
                    >
                        <Toolbar>

                        </Toolbar>
                    </AppBar>
                    <div className={classes.content}>
                        <Typography variant="display4" className={classes.centradoTexto}>
                            {TITULO_APLICATIVO}
                        </Typography>
                        <Button component={LinkCustom} variant="outlined" className={classNames(classes.button, classes.centrado)}>
                            {MENSAJE_INICIO}
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

PageIndex.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(PageIndex)
