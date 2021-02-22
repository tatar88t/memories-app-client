import React from 'react'

import { AppBar, Typography, Toolbar, Button, Avatar} from '@material-ui/core';

import {useDispatch} from 'react-redux';

import {Link, useHistory, useLocation} from 'react-router-dom';

import decode from 'jwt-decode';

import {LOGOUT} from '../../constants/actionTypes';
import memories from '../../images/memories.jpg';
import useStyles from './styles';

const Navbar = (props)  => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('profile')));

    console.log(user, 'USER');

    const logout = () => {
        dispatch({type: LOGOUT});

        history.push('/')
        setUser(null);

    };

    React.useEffect(() => {
        const token = user?.token;

        if(token) {
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) {
                logout()
            }
        };
        // JWT
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to='/' className={classes.heading} variant="h2" align="center">
                    FlashBack
                </Typography>
                <div className={classes.imageWrapper}>
                    <img className={classes.image} src={memories} alt="memories" height="50" />
                </div>
            </div>
                
                <Toolbar className={classes.toolbar}>
                    {user ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                            <Typography classes={classes.userName} variant="h6">{user.result.name}</Typography>
                            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                        </div>
                    ) : (
                        <Button component={Link} to="/auth" variant="contained" className={classes.logout} color="primary">Sign In</Button>            
                    )}

                </Toolbar>
            
                
        </AppBar>
    )
}

export default Navbar