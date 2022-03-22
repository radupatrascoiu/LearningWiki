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


const MyCarousel = () =>  {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    <ReactCardCarousel autoplay={ false } autoplay_speed={ 2500 }>
      <div style={ CARD_STYLE }>
        <h4>Cornel Popescu</h4>
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
        <h4>Ciprian Dobre</h4>
        <img className="logo-card" src={dobre} alt="Learning Wiki"/>
        <div className="btn">
              <Button variant="contained" color="secondary" href="#">Select</Button>
        </div>
      </div>
      <div style={ CARD_STYLE }>
        <h4>Ghiu Cristian</h4>
        <img className="logo-card" src={ghiu} alt="Learning Wiki"/>
        <div className="btn">
              <Button variant="contained" color="secondary" href="#">Select</Button>
        </div>
      </div>
      <div style={ CARD_STYLE }>
        <h4>Boicea Alexandru</h4>
        <img className="logo-card" src={boicea} alt="Learning Wiki"/>
        <div className="btn">
              <Button variant="contained" color="secondary" href="#">Select</Button>
        </div>
      </div>
      <div style={ CARD_STYLE }>
        <h4>Catalin Negru</h4>
        <img className="logo-card" src={negru} alt="Learning Wiki"/>
        <div className="btn">
              <Button variant="contained" color="secondary" href="#">Select</Button>
        </div>
      </div>
    </ReactCardCarousel>
  );
}

export default MyCarousel;