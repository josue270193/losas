import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "material-ui";

const styles = () => ({

});

class HomePage extends React.Component {

    render(){
        return (
            <div>
            </div>
        );
    }
}

HomePage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(HomePage)
