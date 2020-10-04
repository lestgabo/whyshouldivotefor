import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const StyledMenu = withStyles({
    paper: {
        border: `1px solid #d3d4d5`,
    },
})((props) => (
    <Menu
        elevation={0}
        genContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const NavBar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const logoutWithRedirect = () => {
        logout({
            returnTo: window.location.origin,
        });
    };

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    console.log('isAuthenticated ->', isAuthenticated);
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <FontAwesomeIcon icon="bars" />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Why should I vote for x?
                    </Typography>

                    {isAuthenticated && (
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenuClick}
                            color="inherit"
                        >
                            <FontAwesomeIcon icon="user" />
                        </IconButton>
                    )}
                    <StyledMenu id="user menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleMenuClose}>
                        <StyledMenuItem onClick={handleMenuClose}>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </StyledMenuItem>
                        <StyledMenuItem onClick={handleMenuClose}>
                            <ListItemIcon>
                                <FontAwesomeIcon icon="power-off" />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </StyledMenuItem>
                    </StyledMenu>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;
