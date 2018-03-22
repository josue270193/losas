import React from 'react';
import {NavLink} from "react-router-dom";
import {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import HelpIcon from 'material-ui-icons/Help'

export const funcionesItems = (classes) => (
    <div>
        <ListItem component={NavLink} to="/accion1" activeClassName={classes.linkActivo} button>
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Accion 1" />
        </ListItem>
    </div>
);

export const opcionesItems = (classes) => (
    <div>
        <ListItem component={NavLink} to="/accion2" activeClassName={classes.linkActivo} button>
            <ListItemIcon>
                <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="Accion 2" />
        </ListItem>
    </div>
);
