import React, { Component } from 'react';
import Faq from 'react-faq-component';
import logo from "../img/logo2.png"
import profesori_cu_exp from "../img/profesori_cu_exp.png"
import lectii_conform_programei from "../img/lectii_conform_programei.png"
import acces_gratuit from "../img/acces_gratuit.png"
import resurse_digitale from "../img/resurse_digitale.png"
import '../styles/home.css';
import Typography from '@mui/material/Typography';
import FooterComponent from '../components/up&down/Footer';
import { Button } from '@mui/material';
import { useKeycloak } from '@react-keycloak/web';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { withHooksKC } from '../utils/withHooksKC';
import { userApi } from '../services/userApi';
import User from '../components/authentication/User';

const Home = () => {
  const { initialized, keycloak } = useKeycloak();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false)
  const [error, setError] = useState(false);
  const [username, setUsername] = useState(null)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(async () => {
    if (keycloak && initialized) {
      keycloak.loadUserInfo().then(userInfo => {
        setUsername(userInfo.name)
      });
    }
  }, [keycloak, initialized])

  const data = {
    title: <p style={
      {
        color: "white",
        backgroundColor: 'lightblue',
        borderRadius: '8px',
        textAlign: 'center',
        width: 430,
        pading: 10
      }}>
      FAQ (Cum functioneaza?) </p>,
    rows: [
      {
        title: "Cum îmi fac un cont nou?",
        content: "Accesând secţiunea 'Sign in'. Te poţi conecta fie prind creandu-ti un cont nou, fie folosind contul Google."
      },
      {
        title: "Cum pot accesa un curs?",
        content: "Pentru a accesa un curs trebuie să fii logat și să accesezi secțiunea 'Cursuri'. "
      }
      , {
        title: "Cum pot rezolva teste?",
        content: "Pentru a rezolva teste trebuie sa alegi materia dorita din sectiunea de 'Cursuri' si apoi sa mergi la 'Teste'. "
      }, {
        title: "Cum stiu cand am primit feedback?",
        content: "Odata primite un feedback de la mentor, vei fi notificat prin email. "
      }]
  }

  return (
    <div className="container">
      <div>
        <div className="motto">
          {initialized && keycloak?.authenticated ?
            <Typography
              style={{ fontWeight: 600 }}
              color="textPrimary"
              gutterBottom
              variant="h5"
            >
              Cursuri online <mark className="red"> gratuite</mark> pentru {username}
            </Typography>
            :
            <Typography
              style={{ fontWeight: 600 }}
              color="textPrimary"
              gutterBottom
              variant="h5"
            >
              Cursuri online <mark className="red"> gratuite</mark> pentru toți elevii
            </Typography>
          }
        </div>

        <div className="first-part-content">
          <img className='logo2' src={logo} alt="Learning Wiki" />

          <Typography
            color="textPrimary"
            gutterBottom
            variant="h4"
          >
            Bine ați venit pe platforma Learning Wiki, site-ul destinat acumulării rapide a cunoștințelor în domeniul matematicii și al informaticii!
          </Typography>

          <Typography
            color="textPrimary"
            gutterBottom
            variant="h5"
          >
            Pregătește-te pentru evaluările din timpul liceului, bacalaureat și admitere!
          </Typography>

          <div className='descopera-button'>
            <Button
              size="large"
              variant="contained"
              color="error"
              onClick={() => {
                if (initialized && keycloak?.authenticated) {
                  navigate("/courses")
                } else {
                  handleClickOpen()
                }
              }}
            >
              👉 Descopera
            </Button>

            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Trebuie sa fii logat!"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Poti merge in coltul din dreapta sus pentru a te loga.
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

        <div className="avantajele-tale-container">

          <Typography
            color="textPrimary"
            variant="h4"
          >
            Avantajele tale
          </Typography>


          <div className="avantajele-tale">


            <div className="element">
              <img className='photo' src={profesori_cu_exp} alt="Learning Wiki" />

              <Typography
                color="textPrimary"
                variant="h5"
              >
                Profesori cu experiență
              </Typography>

              <Typography
                color="textSecondary"
                variant="body1"
              >
                Mentorii pe care îi întâlnești aici au o experiență de peste 15 de ani în domeniul școlar
              </Typography>

            </div>


            <div className="element">
              <img className='photo' src={lectii_conform_programei} alt="Learning Wiki" />

              <Typography
                color="textPrimary"
                variant="h5"
              >
                Lecții conform Programei
              </Typography>

              <Typography
                color="textSecondary"
                variant="body1"
              >
                Resursele video, testele și materialele sunt realizate în conformitate cu Programa școlară oficială
              </Typography>

            </div>


            <div className="element">
              <img className='photo' src={acces_gratuit} alt="Learning Wiki" />

              <Typography
                color="textPrimary"
                variant="h5"
              >
                Access gratuit
              </Typography>

              <Typography
                color="textSecondary"
                variant="body1"
              >
                Odată creat contul ai acces la materiale, teste si videoclipuri.
              </Typography>

            </div>


            <div className="element">
              <img className='photo' src={resurse_digitale} alt="Learning Wiki" />

              <Typography
                color="textPrimary"
                variant="h5"
              >
                Resurse digitale
              </Typography>

              <Typography
                color="textSecondary"
                variant="body1"
              >
                #LearningWiki știe că uneori lecțiile tradiționale pot fi descurajante, așa că resursele noastre sunt moderne, digitale și fun
              </Typography>

            </div>
          </div>
        </div>

        <div className="faq">
          <Faq data={data} style={{ pading: '0px 10px' }} />
        </div>

      </div>
      <FooterComponent />
    </div>

  );
}

export default withHooksKC(Home);
