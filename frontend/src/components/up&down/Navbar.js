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

function Navbar() {
    const [isProfessor, setIsProfessor] = useState(false);
    const { initialized, keycloak } = useKeycloak();

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
                                <img className="logo" src={logo} alt="Learning Wiki" />
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h7" component="div">
                                <Button color="inherit">
                                    <Link to="/">Home</Link>
                                </Button>
                                {initialized && keycloak?.authenticated &&
                                    <Button color="inherit">
                                        <Link to="/courses">Courses</Link>
                                    </Button>
                                }
                                {initialized && keycloak?.authenticated &&
                                    <Button color="inherit">
                                        <Link to="/cautaMentor">Cauta Mentor</Link>
                                    </Button>}
                                {initialized && keycloak?.authenticated &&
                                    <Button color="inherit">
                                        <Link to="/chat">Chat</Link>
                                    </Button>}
                                {initialized && keycloak?.authenticated &&
                                    <Button color="inherit">
                                        <Link to="/raporteazaOGreseala">Raporteaza o greseala</Link>
                                    </Button>
                                }
                                {initialized && keycloak?.authenticated &&
                                    <Button color="inherit">
                                        <Link to="/greseliRaportate">Greseli Raportate</Link>
                                    </Button>
                                }
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid className="rightGrid">
                        {initialized && keycloak?.authenticated ?
                            <div style={{ display: 'inline-block' }}>
                                {/* <Avatar src={profil} /> */}
                                <User keycloak={keycloak} />
                                <Logout keycloak={keycloak} />
                            </div> : <LoginPage></LoginPage>
                        }
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Navbar;