import React from 'react';
import PropTypes from 'prop-types';
import {List, ListItem, ListItemIcon, ListItemText, ListSubheader, Paper, Typography, withStyles} from "@material-ui/core";
import WarningIcon from '@material-ui/icons/Warning';
import CheckIcon from '@material-ui/icons/Check';
import {TITULO_LISTA_HISTORIAL} from "../util/MensajesUtil";

const styles = (theme) => ({
    root: {

    },
    paperTitulo: {
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
        this.setState({
            historial: [
                {
                    id: 1,
                    fechaCreacion: '11',
                    resultado: {}
                },
                {
                    id: 1,
                    fechaCreacion: '11'
                },
                {
                    id: 1,
                    fechaCreacion: '11',
                    resultado: {}
                },
            ]
        })
    }

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
                            const consulta = {
                                id: elem.id,
                                fechaCreacion: elem.fechaCreacion,
                                resultado: elem.resultado
                            };
                            return (
                                <ListItem key={index} button className={classes.panelItem}>
                                    <ListItemIcon>
                                    {
                                    consulta.resultado ?
                                        <CheckIcon />
                                        :
                                        <WarningIcon />
                                    }
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={consulta.id}
                                        secondary={consulta.fechaCreacion}
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
