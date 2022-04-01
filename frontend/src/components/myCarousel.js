import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import popcorn from "../img/popcorn.png"
import dobre from "../img/dobre.png"
import ghiu from "../img/ghiu.png"
import boicea from "../img/boicea.png"
import negru from "../img/negru.png"
import "../styles/myCarousel.css"
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { margin } from '@mui/system';
import { Typography } from '@mui/material';
import { ThemeProvider, createTheme } from "@mui/material/styles";

const MyCarousel = () =>  {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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

  return (
    <ReactCardCarousel autoplay={ true } autoplay_speed={ 2500 }>
      <div style={ CARD_STYLE }>
        <Typography
              variant="h6"
              color="textSecondary"
              align="center"
        >
          Cornel Popescu
        </Typography>

        <ThemeProvider theme={theme}>
          <div className="App">
            <Typography
              variant="body2"
              color="textSecondary"
              align="center"
              padding="10px">
              Un profesor bun se menține el însuși la standardele impuse elevilor săi.
            </Typography>
          </div>
        </ThemeProvider>
        <img className="logo-card" src={popcorn} alt="Learning Wiki"/>
        <div className="btn">
            <Button variant="contained" color="secondary" href="#" onClick={handleClickOpen}>Select</Button>
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
                  Vei putea discuta cu el oricand ai nevoie. De asemenea, iti va face un review pe testele date.
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
      <div style={ CARD_STYLE }>
        <Typography
              variant="h6"
              color="textSecondary"
              align="center"
        >
          Ciprian Dobre
        </Typography>

        <ThemeProvider theme={theme}>
          <div className="App">
            <Typography
              variant="body2"
              color="textSecondary"
              align="center"
              padding="10px">
              Un profesor bun se menține el însuși la standardele impuse elevilor săi.
            </Typography>
          </div>
        </ThemeProvider>

        <img className="logo-card" src={dobre} alt="Learning Wiki"/>
        <div className="btn">
              <Button variant="contained" color="secondary" href="#">Select</Button>
        </div>
      </div>
      <div style={ CARD_STYLE }>
        <Typography
              variant="h6"
              color="textSecondary"
              align="center"
        >
          Cristian Ghiu 
        </Typography>

        <ThemeProvider theme={theme}>
          <div className="App">
            <Typography
              variant="body2"
              color="textSecondary"
              align="center"
              padding="10px">
              Un profesor bun se menține el însuși la standardele impuse elevilor săi.
            </Typography>
          </div>
        </ThemeProvider>
        <img className="logo-card" src={ghiu} alt="Learning Wiki"/>
        <div className="btn">
              <Button variant="contained" color="secondary" href="#">Select</Button>
        </div>
      </div>
      <div style={ CARD_STYLE }>
        <Typography
              variant="h6"
              color="textSecondary"
              align="center"
        >
          Alexandru Boicea
        </Typography>

        <ThemeProvider theme={theme}>
          <div className="App">
            <Typography
              variant="body2"
              color="textSecondary"
              align="center"
              padding="10px">
              Un profesor bun se menține el însuși la standardele impuse elevilor săi.
            </Typography>
          </div>
        </ThemeProvider>
        <img className="logo-card" src={boicea} alt="Learning Wiki"/>
        <div className="btn">
              <Button variant="contained" color="secondary" href="#">Select</Button>
        </div>
      </div>
      <div style={ CARD_STYLE }>
        <Typography
              variant="h6"
              color="textSecondary"
              align="center"
        >
          Catalin Negru
        </Typography>

        <ThemeProvider theme={theme}>
          <div className="App">
            <Typography
              variant="body2"
              color="textSecondary"
              align="center"
              padding="10px">
              Un profesor bun se menține el însuși la standardele impuse elevilor săi.
            </Typography>
          </div>
        </ThemeProvider>
        <img className="logo-card" src={negru} alt="Learning Wiki"/>
        <div className="btn">
              <Button variant="contained" color="secondary" href="#">Select</Button>
        </div>
      </div>
    </ReactCardCarousel>
  );
}

export default MyCarousel;