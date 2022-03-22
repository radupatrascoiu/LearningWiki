import React, { Component } from 'react';
// import styles from '../styles/Footer.module.scss';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
const Footer = () => {
    return (
        <div>
            <div>
                <Grid stackable>
                    <Grid.Row>
                        <Grid.Column computer={6} mobile={16}>
                            <div>
                                <h1><b>Pellerex</b></h1>
                                <div>
                                    <a href="mailto:info@pellerex.com" target={"_blank"} rel="noopener noreferrer">
                                        <img src={'https://cdn.pellerex.com/public/ecosystem/web/home/pellerex-email.svg'} alt="Email link to send a message to Technology Leads." />
                                    </a>

                                    <a href="https://twitter.com/pellerex" target={"_blank"} rel="noopener noreferrer">
                                        <img src={'https://cdn.pellerex.com/public/ecosystem/web/home/pellerex-twitter.svg'} alt="Technology Leads twitter account to contact us." />
                                    </a>
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column computer={5} mobile={16}>
                            <div>
                                <div>LINKS</div>
                                <div>Use of our platform is subject to <br />our <Link to="/terms">terms</Link> and <Link to="/policies">policies.</Link></div>
                                <a href="/contact-us">Contact Us</a>
                            </div>
                        </Grid.Column>
                        <Grid.Column computer={5} mobile={16}>
                            <div>
                                <p>NOTICES</p>

                                <div>
                                    Copyright © <a href="https://technologyleads.io" target="_blank" rel="noopener noreferrer">Technology Leads</a> {moment().format('YYYY')}.
                                    <br /> All rights reserved.
                                </div>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div>
    );
}

export default Footer;