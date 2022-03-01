import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import '../App.css';
import img from "../img/logo.png"

function Navbar() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{background: "Black" }}>
                <Toolbar>
                    <Grid className="leftGrid" container>
                        <Grid item>
                            <Typography type="title" variant="h6" component="div">
                                    <img className="logo" src={img} alt="Learning Wiki"/>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h7" component="div">
                                <Button color="inherit">
                                    <Link to="/">Home</Link>
                                </Button>
                                {
                                    <Button color="inherit">
                                        <Link to="/courses">Courses</Link>
                                    </Button>
                                }
                                {<Button color="inherit">
                                    <Link to="/cautaMentor">Cauta Mentor</Link>
                                </Button>}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid className="rightGrid">
                        {/* {initialized && keycloak?.authenticated ? */}
                            <div style={{ display: 'inline-block' }}>
                                Login
                                {/* <User keycloak={keycloak} />
                                <Logout keycloak={keycloak} /> */}
                            </div>
                            {/* </div> : <LoginPage></LoginPage>
                        } */}
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Navbar;