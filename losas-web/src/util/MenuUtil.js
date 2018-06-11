import React from 'react';
import {NavLink} from "react-router-dom";
import {ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import IconDescription from '@material-ui/icons/Description';
import IconInbox from '@material-ui/icons/Inbox';
import {ROUTE_HOME_DIAGNOSTICO, ROUTE_HOME_HISTORIAL} from "./URLUtil";
import {TITULO_HOME_DIAGNOSTICO, TITULO_HOME_HISTORIAL} from "./MensajesUtil";

export const funcionesItems = (classes) => (
    <div>
        <ListItem component={NavLink} to={ROUTE_HOME_DIAGNOSTICO} activeClassName={classes.linkActivo} button>
            <ListItemIcon>
                <IconInbox />
            </ListItemIcon>
            <ListItemText primary={TITULO_HOME_DIAGNOSTICO} />
        </ListItem>
        <ListItem component={NavLink} to={ROUTE_HOME_HISTORIAL} activeClassName={classes.linkActivo} button>
            <ListItemIcon>
                <IconDescription />
            </ListItemIcon>
            <ListItemText primary={TITULO_HOME_HISTORIAL} />
        </ListItem>
    </div>
);

