import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";

const styles = () => ({

});

class FragmentHome extends React.Component {

    render(){
        return (
            <div>
            </div>
        );
    }
}

FragmentHome.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(FragmentHome)
