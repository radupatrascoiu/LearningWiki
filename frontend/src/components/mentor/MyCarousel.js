import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import prof1 from "../../img/prof1.png"
import prof2 from "../../img/prof2.png"
import prof3 from "../../img/prof3.png"
import prof4 from "../../img/prof4.png"
import prof5 from "../../img/prof5.png"
import "../../styles/myCarousel.css"
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { userApi } from "../../services/userApi";
import { useKeycloak } from '@react-keycloak/web';

const MyCarousel = () => {
  const [open, setOpen] = useState(false)
  const { initialized, keycloak } = useKeycloak();
  const [professors, setProfessors] = useState([]);
  const [myMentor, setMyMentor] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const refreshComponent = () => setRefreshFlag(!refreshFlag)

  const handleClickOpen = async (professorId) => {
    console.log("AICIIIIIIIIIIIIIII = " + professorId);
    setOpen(true);
    try {
      const response = await userApi.addNewMentoring(keycloak?.token, professorId);
    } catch (e) {
      console.log(e)
    }
  };

  const handleClose = () => {
    setOpen(false);
    refreshComponent();
  };

  const theme = createTheme({
    typography: {
      body2: {
        fontSize: [20, "!important"]
      }
    },
    overrides: {
      MuiTypography: {
        body2: {
          fontSize: [20, "!important"]
        }
      }
    }
  });

  const CARD_STYLE = {
    height: '400px',
    width: '400px',
    paddingTop: '20px',
    textAlign: 'center',
    background: '#52C0F5',
    color: '#FFF',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '10px',
  }

  useEffect(async () => {
    if (keycloak && initialized) {
      try {
        const response1 = await userApi.getAllProfessors(keycloak?.token);
        console.log("Professors = " + response1.data);
        setProfessors(response1.data);

        const response2 = await userApi.getMyMentor(keycloak?.token);
        console.log("MyMentor = " + response2.data.name)
        if (response2?.data !== null && response2?.data !== undefined && response2?.data != '') {
          setMyMentor(response2.data);
        }

        console.log("AICI |" + myMentor + "|");

      } catch (error) {
        console.log(error);
      }
    }
  }, [initialized, keycloak, refreshFlag]);

  return (
    <div>
      <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
        {
          professors && professors.map((professor, idx) => (
            <div key={idx} style={CARD_STYLE}>

              <Typography
                variant="h6"
                color="textSecondary"
                align="center"
              >
                {professor.name}
              </Typography>

              <ThemeProvider theme={theme}>
                <div className="App">
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    align="center"
                    padding="10px">
                    {
                      professor.name === 'Profesorul Nr 1' ? 'Menține standardele impuse elevilor săi' : ''
                    }
                    {
                      professor.name === 'Profesorul Nr 2' ? 'Rabdare, pasiune pentru numere si logica' : ''
                    }
                    {
                      professor.name === 'Profesorul Nr 3' ? 'Dragoste pentru oameni, lucrul in echipa' : ''
                    }
                    {
                      professor.name === 'Profesorul Nr 4' ? 'Excelente abilitati de comunicare' : ''
                    }
                    {
                      professor.name === 'Profesorul Nr 5' ? 'Invatare motivanta si semnificativa' : ''
                    }
                  </Typography>
                </div>
              </ThemeProvider>

              {
                professor.name === 'Profesorul Nr 1' ? <img className="logo-card" src={prof1} alt="Learning Wiki" /> : ''
              }
              {
                professor.name === 'Profesorul Nr 2' ? <img className="logo-card" src={prof2} alt="Learning Wiki" /> : ''
              }
              {
                professor.name === 'Profesorul Nr 3' ? <img className="logo-card" src={prof3} alt="Learning Wiki" /> : ''
              }
              {
                professor.name === 'Profesorul Nr 4' ? <img className="logo-card" src={prof4} alt="Learning Wiki" /> : ''
              }
              {
                professor.name === 'Profesorul Nr 5' ? <img className="logo-card" src={prof5} alt="Learning Wiki" /> : ''
              }
              <div className="btn">
                {
                  (myMentor !== null && myMentor !== undefined && myMentor !== '')
                    ? <Button disabled>Select</Button>
                    : <Button variant="contained" color="secondary" href="#" onClick={() => handleClickOpen(professor.id)}>Select</Button>
                }

                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Felicitari, ti-ai ales cu succes mentorul!"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Vei putea discuta cu el oricand ai nevoie folosind chat-ul. De asemenea, iti va face un review pe testele date.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                      Ok
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </div>
          ))
        }
      </ReactCardCarousel>
      {
        (myMentor !== null && myMentor !== undefined && myMentor !== '') &&
        <div className="second-text">
          <Typography
            color="textPrimary"
            gutterBottom
            variant="overline"
          >
            *Ti-ai ales deja mentorul.
          </Typography>
        </div>
      }

    </div>
  );
}

export default MyCarousel;