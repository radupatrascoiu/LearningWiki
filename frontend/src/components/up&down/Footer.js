import React from 'react';
import '../../styles/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Despre noi</h2>
            <Link to='/'>Cum functioneaza plaforma?</Link>
            <Link to='/'>Testimoniale</Link>
            <Link to='/'>Cariere</Link>
            <Link to='/'>Investitori</Link>
            <Link to='/'>Termeni si conditii</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/'>Telefon</Link>
            <Link to='/'>Suport</Link>
            <Link to='/'>Sponsori</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videoclipuri</h2>
            <Link to='/'>Videoclipuri trimise</Link>
            <Link to='/'>Ambasadori</Link>
            <Link to='/'>Agentie</Link>
            <Link to='/'>Influenceri</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Learning Wiki
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>Patrascoiu Ion - Radu © 2022</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;