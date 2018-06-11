import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";
import {obtenerConfiguracionCache} from "../data/DataConfig";

const style = (theme) => ({
    root: {
        padding: theme.spacing.unit * 2,
        flexGrow: 1,
    },
    formControl: {
        margin: theme.spacing.unit,
        width: '100%',
    },
});

class ConsultaPaso3 extends React.Component {

    constructor(prop){
        super(prop);

        const cache = obtenerConfiguracionCache();
        console.log(cache);
        this.state = {
        };
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                Paso 3
            </div>
        );
    }
}

ConsultaPaso3.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object,
    data: PropTypes.object.isRequired,
    onChangeData: PropTypes.func.isRequired,
};

export default ConsultaPaso3 = withStyles(style)(ConsultaPaso3);