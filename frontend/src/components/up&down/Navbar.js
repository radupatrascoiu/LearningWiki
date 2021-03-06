import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import '../../App.css';
import logo from "../../img/logo.png"
import { useKeycloak } from '@react-keycloak/web';
import LoginPage from '../authentication/Login';
import User from '../authentication/User';
import Logout from '../authentication/Logout';
import { userApi } from '../../services/userApi';
import AuthorizedFunction from '../../utils/authorizedFunction';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate } from "react-router-dom";
import Administrare from '../authentication/Administrare';

function Navbar() {
    const [isProfessor, setIsProfessor] = useState(false);
    const { initialized, keycloak } = useKeycloak();
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(async () => {
        if (keycloak && initialized) {
            setIsProfessor(AuthorizedFunction(keycloak, ['professor']));
            console.log("Profesor = " + isProfessor);
        }
    }, [initialized, keycloak]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: "Black" }}>
                <Toolbar>
                    <Grid className="leftGrid" container>
                        <Grid item>
                            <Typography type="title" variant="h6" component="div">
                                <Button color="inherit" onClick={() => navigate("/")}>
                                    <img className="logo" src={logo} alt="Learning Wiki" />
                                </Button>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h7" component="div">
                                {initialized && keycloak?.authenticated &&
                                    <Button color="inherit">
                                        <Link to="/courses">Cursuri</Link>
                                    </Button>
                                }
                                {initialized && keycloak?.authenticated && !AuthorizedFunction(keycloak, ['professor']) &&
                                    <Button color="inherit">
                                        <Link to="/cautaMentor">Cauta Mentor</Link>
                                    </Button>}
                                {initialized && keycloak?.authenticated && AuthorizedFunction(keycloak, ['professor']) &&
                                    <Button color="inherit">
                                        <Link to="/feedback">Feedback</Link>
                                    </Button>}
                                {initialized && keycloak?.authenticated &&
                                    <Button color="inherit">
                                        <Link to="/chat">Chat</Link>
                                    </Button>}
                                {initialized && keycloak?.authenticated && !AuthorizedFunction(keycloak, ['professor']) &&
                                    <Button color="inherit">
                                        <Link to="/raporteazaOGreseala">Raporteaza o greseala</Link>
                                    </Button>
                                }
                                {initialized && keycloak?.authenticated && AuthorizedFunction(keycloak, ['professor']) &&
                                    <Button color="inherit">
                                        <Link to="/greseliRaportate">Greseli Raportate</Link>
                                    </Button>
                                }
                                {initialized && keycloak?.authenticated && !AuthorizedFunction(keycloak, ['professor']) &&
                                    < Button color="inherit">
                                        <Link to="/statistics">Statistici</Link>
                                    </Button>
                                }
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid className="rightGrid">
                        {initialized && keycloak?.authenticated ?
                            <div style={{ display: 'inline-block' }}>
                                <div>
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleMenu}
                                        color="inherit"
                                    >
                                        <AccountCircle />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        {initialized && keycloak?.authenticated && !AuthorizedFunction(keycloak, ['admin']) &&
                                            <MenuItem onClick={handleClose}><User keycloak={keycloak} /></MenuItem>
                                        }
                                        {initialized && keycloak?.authenticated && AuthorizedFunction(keycloak, ['admin']) &&
                                            <MenuItem onClick={handleClose}><Administrare keycloak={keycloak} /></MenuItem>
                                        }
                                        <MenuItem onClick={handleClose}><Logout keycloak={keycloak} /></MenuItem>
                                    </Menu>
                                </div>

                            </div>
                            : <LoginPage></LoginPage>
                        }
                    </Grid>


                </Toolbar>
            </AppBar >
        </Box >
    );
}
export default Navbar;