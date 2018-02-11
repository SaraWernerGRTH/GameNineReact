import React, { Component } from 'react';
import {Row, Col ,Grid} from 'react-bootstrap';
export class LayoutExample extends Component {
    render() {
        return (
            <div className="lists">
               <Grid fluid style={{ lineHeight: '32px' }}>
                    <Row >
                        <Col xs={12} md={8}  className="clr1">a</Col>
                        <Col xs={6} md={4}  className="clr2">b</Col>
                    </Row>
                    <br />
                    <Row >
                        <Col xs={6} md={4}  className="clr1">c</Col>
                        <Col xs={6} md={4}  className="clr2">d</Col>
                        <Col xs={6} md={4}  className="clr3">e</Col>
                    </Row>
                    <br />
                    <Row >
                        <Col xs={6}  className="clr1">f</Col>
                        <Col xs={6}  className="clr2">g</Col>
                    </Row>
                    <br />
                    <Row >
                        <Col xs={12} md={8}  className="clr1">a</Col>
                        <Col xs={6} md={4}  className="clr2">b</Col>
                    </Row>
                    <br />
                    <Row >
                        <Col xs={6} md={4}  className="clr1">c</Col>
                        <Col xs={6} md={4}  className="clr2">d</Col>
                        <Col xs={6} md={4}  className="clr3">e</Col>
                    </Row>
                    <br />
                    <Row >
                        <Col xs={6}  className="clr1">f</Col>
                        <Col xs={6}  className="clr2">g</Col>
                    </Row>
                  <h4>justify-content-md-center:  </h4>
                    <Row className="justify-content-md-center">
                        <Col xs={6} lg={2}  className="clr1">xs={4} lg={4}</Col>
                        <Col xs={8} lg={3}  className="clr2">xs={8} lg={3}</Col>
                        <Col xs={12} lg={6}  className="clr1">xs={12} lg={5}</Col>
                        <Col xs={9} lg={4}  className="clr2">xs={9} lg={6}</Col>
                    </Row>
                    <h4>d-flex justify-content-end:  </h4>
                    <div className="d-flex justify-content-end">
                        <div className="mr-auto p-2 clr1">Flex item : mr-auto p-2</div>
                        <div className="p-2 clr2">Flex item: p-2</div>
                        <div className="p-2 clr1">Flex item : p-2</div>
                    </div>
                    <h4>d-flex justify-content-start:  </h4>
                    <div className="d-flex justify-content-start">
                        <div className="p-2 clr2">Flex item : p-2</div>
                        <div className="p-2 clr1">Flex item : p-2</div>
                        <div className="ml-auto p-2 clr2">Flex item : ml-auto p-2</div>
                    </div>
                </Grid>
            </div>
        );
    }
}