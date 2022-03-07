import React, { Component } from 'react';
import Faq from 'react-faq-component';
import logo2 from "../img/logo.png"
import '../styles/home.css';

const Home = () => {
    const data = {
        title: <p style={
          {
          color: "white",
          backgroundColor: 'lightblue',
          borderRadius: '8px',
          textAlign: 'center',
          width: 330,
          pading: 10
          }}> 
          FAQ (How it works?) </p>,
        rows: [
          {
            title: "Cum îmi fac un cont nou?",
            content: "Accesând secțiunea 'Sign in'. Te poți conecta fie prind mail, fie folosind contul Google."
          },
          {
            title: "Cum mă înrolez la un curs?",
            content: "Pentru a te înrola la un curs trebuie să ai un cont de student și să accesezi secțiunea 'Courses'. "
          }]
      }

    return (
        <div className="container">
          {/* <img className='logo2' src={logo2} alt="Learning Wiki"/> */}
          <h2>Bine ati venit pe platforma Learning Wiki, site-ul destinat acumularii rapide a cunostintelor in domendiul matematicii si al informaticii!</h2>
          <h4>Pregateste-te pentru evaluarile din timpul liceului, bacalaureat si admitere!</h4>
          <h5>Mult succes!</h5>
          <Faq data={data} style = {{pading:'0px 10px'}}/>
        </div>
  
      );
}
 
export default Home;
