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
    userInfo: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    userPicture: {
        borderRadius: '50%',
    },
    userName: {
        '&:hover': {
            backgroundColor: 'none',
        },
    },
    iconButton: {
        maxHeight: '64px',
    },
}));

const StyledMenu = withStyles({
    paper: {
        border: `1px solid #d3d4d5`,
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
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
            backgroundColor: theme.palette.secondary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
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
                        Why Should I Vote For
                    </Typography>

                    {/* if not logged in -> user icon  */}
                    {!isAuthenticated && (
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
                    {/* if logged in -> linkedin profile picture  */}
                    {isAuthenticated && (
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenuClick}
                            color="inherit"
                            className={classes.iconButton}
                        >
                            <div className={classes.userInfo}>
                                <img src={user.picture} alt="Profile" className={classes.userPicture} width="50" />
                            </div>
                        </IconButton>
                    )}
                    {/* logged in */}
                    {isAuthenticated && (
                        <StyledMenu
                            id="user menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            autoFocus={false}
                        >
                            <MenuItem onClick={handleMenuClose}>
                                <div className={classes.userName}>
                                    <Typography variant="h6">{user.name}</Typography>
                                </div>
                            </MenuItem>
                            <StyledMenuItem onClick={handleMenuClose}>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                                </ListItemIcon>
                                <ListItemText primary="Profile" />
                            </StyledMenuItem>
                            <StyledMenuItem onClick={() => logoutWithRedirect()}>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon="power-off" />
                                </ListItemIcon>
                                <ListItemText primary="Log out" />
                            </StyledMenuItem>
                        </StyledMenu>
                    )}
                    {/* logged out */}
                    {!isAuthenticated && (
                        <StyledMenu
                            id="user menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            autoFocus={false}
                        >
                            <StyledMenuItem
                                onClick={() => {
                                    loginWithRedirect();
                                    handleMenuClose();
                                    return null;
                                }}
                            >
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                                </ListItemIcon>
                                <ListItemText primary="Log in" />
                            </StyledMenuItem>
                        </StyledMenu>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;
