import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useKeycloak } from '@react-keycloak/web';
import { userApi } from '../services/userApi';
import { useParams } from "react-router";
import '../styles/course.css'

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Alert, Button } from "@mui/material"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SchoolIcon from '@mui/icons-material/School';
import { capitalizeFirstLetter } from '../utils/util';

const Course = () => {
  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [course, setCourse] = useState(null);
  const [error, setError] = useState(false);
  const { initialized, keycloak } = useKeycloak();

  const navigate = useNavigate();
  const { courseName } = useParams();
  const [myMentor, setMyMentor] = useState(null);
  const [tests, setTests] = useState([]);
  const [solvedTests, setSolvedTests] = useState([]);

  useEffect(async () => {
    if (keycloak && initialized) {
      try {
        const response = await userApi.getCourse(keycloak?.token, courseName);
        setCourse(response.data);

        const response2 = await userApi.getMyMentor(keycloak?.token);
        if (response2?.data !== null && response2?.data !== undefined && response2?.data != '') {
          setMyMentor(response2.data);
        }

        const response3 = await userApi.getAllTestsByCourseName(keycloak.token, courseName);
        if (response3?.data !== null && response3?.data !== undefined && response3?.data != '') {
          setTests(response3.data);
        }

        const response4 = await userApi.getSolvedTestsByUserEmailAndCourseName(keycloak.token, keycloak.userInfo?.email, courseName);
        if (response4?.data !== null && response4?.data !== undefined && response4?.data != '') {
          setSolvedTests(response4.data);
        }

      } catch (error) {
        setError(true);
      }
    }
  }, [keycloak, initialized])

  return (
    <div className="courseContainer">
      {course &&
        <Card sx={{ maxWidth: "100%" }}>
          <CardContent>
            <Typography sx={{ my: "20px" }} gutterBottom variant="h5" component="div">{capitalizeFirstLetter(course.name)}</Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: "50%" }} aria-label="spanning table">
                <TableBody>
                  <TableRow key={1 + "professor"}>
                    <TableCell>Mentorul meu 🙍</TableCell>
                    <TableCell className="sizedText" style={{ fontWeight: "bold" }} align="center">{myMentor?.name}</TableCell>
                  </TableRow>
                  <TableRow key={1 + "credits"}>
                    <TableCell>Progresul meu 💰</TableCell>
                    <TableCell className="sizedText" style={{ fontWeight: "bold" }} align="center">{solvedTests.length}/{tests.length} teste</TableCell>
                  </TableRow>
                  <TableRow key={1 + "infos"}>
                    <TableCell>Informatii ℹ️</TableCell>
                    <TableCell align="center" sx={{ width: "50%" }}>
                      <Typography className="sizedText" fontSize="13px">{course?.infos}</Typography>

                    </TableCell>
                  </TableRow>
                  <TableRow key={1 + "requirements"}>
                    <TableCell>Cerinte minime ⚔️</TableCell>
                    <TableCell align="center" sx={{ width: "50%" }}>
                      <Typography className="sizedText" fontSize="13px">{course?.requirements}</Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
          <CardActions sx={{ my: "20px" }}>

            <Button
              variant="contained"
              sx={{ mx: "auto", marginBottom: "10px" }}
              size="large"
              onClick={() => navigate(`/courses/${course.name}/teste`)}>
              Teste
            </Button>

            <Button
              variant="contained"
              sx={{ mx: "auto", marginBottom: "10px" }}
              size="large"
              onClick={() => navigate(`/courses/${course.name}/materiale`)}>
              Materiale
            </Button>

            <Button
              variant="contained"
              sx={{ mx: "auto", marginBottom: "10px" }}
              size="large"
              onClick={() => navigate(`/courses/${course.name}/videoclipuri`)}>
              Videoclipuri
            </Button>

            {/* <Button 
                            id="demo-customized-button"
                            aria-controls={open ? 'demo-customized-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            variant="contained"
                            disableElevation
                            onClick={handleClick}
                            sx={{ mx: "auto", marginBottom: "10px" }}
                            endIcon={<KeyboardArrowDownIcon />}
                        >Videoclipuri
                        </Button> */}

            {/* <StyledMenu
                            id="demo-customized-menu"
                            MenuListProps={{
                            'aria-labelledby': 'demo-customized-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => navigate("/courses/matematica/materiale")} disableRipple>
                                <LocalLibraryIcon />
                                Clasa a IX - a
                            </MenuItem>
                            <MenuItem onClick={() => navigate("/courses/matematica/materiale")} disableRipple>
                                <CastForEducationIcon />
                                Clasa a X - a
                            </MenuItem>
                            <MenuItem onClick={() => navigate("/courses/matematica/materiale")} disableRipple>
                                <LightbulbIcon />
                                Clasa a XI - a
                            </MenuItem>
                            <MenuItem onClick={() => navigate("/courses/matematica/materiale")} disableRipple>
                                <SchoolIcon />
                                Clasa a XII - a
                            </MenuItem>
                        </StyledMenu> */}
          </CardActions>
        </Card>
      }
    </div>
  );
}

export default Course;