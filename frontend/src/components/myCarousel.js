import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import Button from '@mui/material/Button';
import popcorn from "../img/popcorn.png"
import dobre from "../img/dobre.png"
import ghiu from "../img/ghiu.png"
import boicea from "../img/boicea.png"
import negru from "../img/negru.png"
import "../styles/myCarousel.css"

const MyCarousel = () =>  {

  const CARD_STYLE = {
      height: '400px',
      width: '400px',
      paddingTop: '10px',
      textAlign: 'center',
      background: '#52C0F5',
      color: '#FFF',
      fontSize: '12px',
      textTransform: 'uppercase',
      borderRadius: '10px'
  }

  return (
    <ReactCardCarousel autoplay={ true } autoplay_speed={ 2500 }>
      <div style={ CARD_STYLE }>
        <h4>Cornel Popescu</h4>
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
        <img className="logo-card" src={popcorn} alt="Learning Wiki"/>
        <div className="btn">
              <Button variant="contained" color="secondary" href="/">Select</Button>
        </div>
      </div>
      <div style={ CARD_STYLE }>
        <h4>Ciprian Dobre</h4>
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
        <img className="logo-card" src={dobre} alt="Learning Wiki"/>
        <div className="btn">
              <Button variant="contained" color="secondary" href="#">Select</Button>
        </div>
      </div>
      <div style={ CARD_STYLE }>
        <h4>Ghiu Cristian</h4>
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
        <img className="logo-card" src={ghiu} alt="Learning Wiki"/>
        <div className="btn">
              <Button variant="contained" color="secondary" href="#">Select</Button>
        </div>
      </div>
      <div style={ CARD_STYLE }>
        <h4>Boicea Alexandru</h4>
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
        <img className="logo-card" src={boicea} alt="Learning Wiki"/>
        <div className="btn">
              <Button variant="contained" color="secondary" href="#">Select</Button>
        </div>
      </div>
      <div style={ CARD_STYLE }>
        <h4>Catalin Negru</h4>
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
        <img className="logo-card" src={negru} alt="Learning Wiki"/>
        <div className="btn">
              <Button variant="contained" color="secondary" href="#">Select</Button>
        </div>
      </div>
    </ReactCardCarousel>
  );
}

export default MyCarousel;