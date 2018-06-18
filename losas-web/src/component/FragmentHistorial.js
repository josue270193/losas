import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {List, ListItem, ListItemIcon, ListItemText, ListSubheader, Paper, Typography, withStyles} from "@material-ui/core";
import WarningIcon from '@material-ui/icons/Warning';
import CheckIcon from '@material-ui/icons/Check';
import {CREAR_ROUTE_HOME_VER_DIAGNOSTICO} from "../util/URLUtil";
import {mostrarMensajeError, requestObtenerConsultaTodo} from "../data/DataConfig";
import {FORMATO_FECHA_HORA, MENSAJE_TITULO_ITEM_PRIMARIO, MENSAJE_TITULO_ITEM_SECUNDARIO, TITULO_LISTA_HISTORIAL} from "../util/MensajesUtil";

const styles = (theme) => ({
    root: {
        maxWidth: '900px',
        margin: '0 auto'
    },
    paperTitulo: {
        textAlign: 'center',
        padding: `${theme.spacing.unit * 2}px 0`
    },
    panelItem: {
        padding: `0 ${theme.spacing.unit * 2}px`
    },
});

class FragmentHistorial extends React.Component {

    constructor(prop){
        super(prop);
        this.state = {
            historial: []
        };
    }

    componentDidMount() {
        // LLAMAR SERVICIO
        requestObtenerConsultaTodo()
            .then((resultado) => {
                this.setState({
                    historial: this.transformarHistorial(resultado)
                });
            })
            .catch((error) => {
                mostrarMensajeError(error);
            })
        ;
    }

    transformarHistorial(data) {
        return data
            .sort((a, b) => {
                return new Date(b.fechaCreacion) - new Date(a.fechaCreacion);
            })
            .map((elem) => {
                return {
                    codigo: elem.codigo,
                    fechaCreacion: FORMATO_FECHA_HORA(elem.fechaCreacion),
                    resultado: elem.diagnostico
                };
        });
    }

    renderLink = itemProps => <Link to={this.props.to} {...itemProps} />;

    render(){
        const { classes } = this.props;
        const { historial } = this.state;

        return (
            <div className={classes.root}>
                <Paper elevation={0} className={classes.paperTitulo}>
                    <Typography variant="display1">
                        Historial
                    </Typography>
                </Paper>
                <Paper>
                    <List
                        subheader={<ListSubheader component="div">{TITULO_LISTA_HISTORIAL}</ListSubheader>}
                    >
                    {
                        historial.map((elem, index) => {
                            return (
                                <ListItem key={index} button className={classes.panelItem} to={CREAR_ROUTE_HOME_VER_DIAGNOSTICO(elem.codigo)} component={this.renderLink}>
                                    <ListItemIcon>
                                    {
                                        elem.resultado ?
                                        <CheckIcon />
                                        :
                                        <WarningIcon />
                                    }
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={MENSAJE_TITULO_ITEM_PRIMARIO(elem.fechaCreacion)}
                                        secondary={MENSAJE_TITULO_ITEM_SECUNDARIO(elem.codigo)}
                                    />
                                </ListItem>
                            );
                        })
                    }
                    </List>
                </Paper>
            </div>
        );
    }
}

FragmentHistorial.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(FragmentHistorial)
