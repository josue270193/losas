import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Link} from "react-router-dom";
import {AppBar, Collapse, Divider, Drawer, IconButton, List, Toolbar, Typography, withStyles} from "@material-ui/core";
import indigo from '@material-ui/core/colors/indigo';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CodeIcon from '@material-ui/icons/Code';
import BugReportIcon from '@material-ui/icons/BugReport';
import {RouterApp} from "../route/RouterApp";
import {funcionesItems} from '../util/MenuUtil';
import {URL_DOCUMENTACION, URL_H2_DB} from "../util/URLUtil";
import {TITULO_APLICATIVO} from "../util/MensajesUtil";

const drawerWidth = 240;

const styles = theme => ({
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
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100%)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36
    },
    hide: {
        display: 'none'
    },
    drawerPaper: {
        position: 'relative',
        height: '100%',
        width: drawerWidth,
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        }
    },
    drawerInner: {
        width: drawerWidth
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar
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
    flex: {
        flex: 1
    },
    titleBar: {
        textDecoration: 'none'
    },
    linkActivo: {
        backgroundColor: indigo[100]
    }
});

class PageHome extends React.Component {

    constructor(prop){
        super(prop);
        this.state = {
            menuActive: false
        };
    }

    onMenuAbrir = () => {
        this.setState({ menuActive: true });
    };

    onMenuCerrar = () => {
        this.setState({ menuActive: false });
    };

    onGoDB = () => {
        // window.location.href = URL_H2_DB;
        window.open(URL_H2_DB, '_blank');
    };

    onHelp = () => {
        // window.location.href = URL_DOCUMENTACION;
        window.open(URL_DOCUMENTACION, '_blank');
    };

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.root}>
                <div id="mensaje_error"/>
                <div className={classes.appFrame}>
                    <AppBar
                        position="absolute"
                        className={classNames(classes.appBar, this.state.menuActive && classes.appBarShift)}
                    >
                        <Toolbar disableGutters={true}>
                            <Collapse in={!this.state.menuActive}>
                                <IconButton
                                    color="inherit"
                                    aria-label="Abrir Menu"
                                    onClick={this.onMenuAbrir}
                                    className={classNames(classes.menuButton, this.state.menuActive && classes.hide)}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Collapse>
                            <Collapse in={this.state.menuActive}>
                                <IconButton
                                    color="inherit"
                                    onClick={this.onMenuCerrar}
                                    className={classNames(classes.menuButton, !this.state.menuActive && classes.hide)}
                                >
                                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                                </IconButton>
                            </Collapse>
                            <Typography
                                component={Link}
                                to="/"
                                className={classNames(classes.flex, classes.titleBar)}
                                variant="title"
                                color="inherit"
                                noWrap
                            >
                                {TITULO_APLICATIVO}
                            </Typography>
                            <IconButton
                                color="inherit"
                                onClick={this.onGoDB}
                            >
                                <BugReportIcon />
                            </IconButton>
                            <IconButton
                                color="inherit"
                                onClick={this.onHelp}
                            >
                                <CodeIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="permanent"
                        classes={{
                            paper: classNames(classes.drawerPaper, !this.state.menuActive && classes.drawerPaperClose),
                        }}
                        open={this.state.menuActive}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        <div className={classes.drawerInner}>
                            <div className={classes.drawerHeader}>
                                <IconButton onClick={this.onMenuCerrar}>
                                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                                </IconButton>
                            </div>
                            <Divider />
                            <List className={classes.list}>
                                { funcionesItems(classes) }
                            </List>
                        </div>
                    </Drawer>
                    <div className={classes.content}>
                        <RouterApp />
                    </div>
                </div>
            </div>
        );
    }
}

PageHome.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PageHome);