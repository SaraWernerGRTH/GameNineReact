import React, { Component } from 'react';
import {Row, Col ,Grid} from 'react-bootstrap';
export class HomePage extends Component {
    render() {
        return (
                <div>   
                    <br />
                     <br />
                     <h2>Welcome To My Responsive Website !!!</h2>                    
                     <br />
                     <br />
                    <div className="jumbotron">
                        <div className="container-fluid">                           
                            <p>In today's world internet is the most popular way of connecting with the people. Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.</p>
                            <p>Bootstrap is an open-source JavaScript framework developed by the team at Twitter. It is a combination of HTML, CSS, and JavaScript code designed to help build user interface components. Bootstrap was also programmed to support both HTML5 and CSS3.
                                Also it is called Front-end-framework.
                                Bootstrap is a free collection of tools for creating a websites and web applications.
                                It contains HTML and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions.
                            </p>
                            <h3>Here Is A Good Link For Beginners: </h3>
                            <p><a href="https://getbootstrap.com/" target="_blank" className="btn btn-success btn-lg">Get started today</a></p>
                        </div>
                    </div>
                    <Grid fluid style={{ lineHeight: '32px' }}>
                        <Row>
                            <Col xs={12} md={4}>
                                <h2>HTML</h2>
                                <p>HTML is a markup language that is used for creating web pages. The HTML tutorial section will help you understand the basics of HTML, so that you can create your own web pages or website.</p>
                                <p><a href="https://www.tutorialrepublic.com/html-tutorial/" target="_blank" className="btn btn-success">Learn More &raquo;</a></p>
                            </Col>
                            <Col xs={12} md={4}>
                                <h2>CSS</h2>
                                <p>CSS is used for describing the presentation of web pages. The CSS tutorial section will help you learn the essentials of CSS, so that you can fine control the style and layout of your HTML document.</p>
                                <p><a href="https://www.tutorialrepublic.com/css-tutorial/" target="_blank" className="btn btn-success">Learn More &raquo;</a></p>
                            </Col>
                            <Col xs={12} md={4}>
                                <h2>Bootstrap</h2>
                                <p>Bootstrap is a powerful front-end framework for faster and easier web development. The Bootstrap tutorial section will help you learn the techniques of Bootstrap so that you can quickly create your own website.</p>
                                <p><a href="https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/" target="_blank" className="btn btn-success">Learn More &raquo;</a></p>
                            </Col>
                        </Row>
                        <br />
                    </Grid> 
                    <br /><br /><br /><br />
                </div>
        );
    }
}