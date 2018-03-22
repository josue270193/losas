import React from 'react';
import PropTypes from 'prop-types';
import {IconButton, ListItemIcon, ListItemText, Menu, MenuItem, withStyles} from "material-ui";
import AccountCircle from "material-ui-icons/AccountCircle";
import SendIcon from "material-ui-icons/Send";

const styles = () => ({

});

class UserIcon extends React.Component {

    state = {
        visible: true,
        menuElement: null
    };

    onMenuCerrar = () => {
        this.setState({ menuElement: null });
    };

    onMenuAbrir = event => {
        this.setState({ menuElement: event.currentTarget });
    };

    onMenuPerfil = () => {
        this.onMenuCerrar();
    };

    onMenuOtro = () => {
        this.onMenuCerrar();
    };

    render() {
        const { menuElement } = this.state;
        const menuVisible = Boolean(menuElement);

        return (
            <div>
                <IconButton
                    aria-owns={menuVisible ? 'menu-user' : null}
                    aria-haspopup="true"
                    onClick={this.onMenuAbrir}
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
                <Menu
                    id="menu-user"
                    anchorEl={menuElement}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                    open={menuVisible}
                    onClose={this.onMenuCerrar}
                >
                    <MenuItem onClick={this.onMenuPerfil}>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Perfil" />
                    </MenuItem>
                    <MenuItem onClick={this.onMenuOtro}>
                        <ListItemText inset primary="Otro" />
                    </MenuItem>
                </Menu>
            </div>
        );
    }
}

UserIcon.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(UserIcon)
