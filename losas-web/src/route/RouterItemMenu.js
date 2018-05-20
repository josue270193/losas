import React from 'react';
import {NavLink} from "react-router-dom";
import {ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import IconDescription from '@material-ui/icons/Description';
import IconInbox from '@material-ui/icons/Inbox';

export const funcionesItems = (classes) => (
    <div>
        <ListItem component={NavLink} to="/accion1" activeClassName={classes.linkActivo} button>
            <ListItemIcon>
                <IconInbox />
            </ListItemIcon>
            <ListItemText primary="accion1" />
        </ListItem>
        <ListItem component={NavLink} to="/accion2" activeClassName={classes.linkActivo} button>
            <ListItemIcon>
                <IconDescription />
            </ListItemIcon>
            <ListItemText primary="accion2" />
        </ListItem>
    </div>
);

