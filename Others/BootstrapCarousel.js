import React, { Component } from 'react';
import {Row, Col ,Grid} from 'react-bootstrap';
var Carousel = require('react-responsive-carousel');
export class BootstrapCarousel extends Component {
    constructor(props, context) {    
        super(props, context);  
        this.handleSelectRight = this.handleSelectRight.bind(this);  
        this.handleSelectLeft = this.handleSelectLeft.bind(this);
        this.state={
            collapsed:"collapse",
            index: 0,
            images:[{src:"https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1450820945%2FAurora-Borealis-Iceland-Winter-SPIRIT1215.jpg%3Fitok%3DX0r5DGTo&w=800&q=85" , alt:"Los Angeles"},
            {src:"https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1450820945%2FGornergrat-Switzerland-winter-SPIRIT1215.jpg%3Fitok%3D86N-XYo4&w=800&q=85" , alt:"Chicago"},
            {src:"https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1450820945%2FSnow-Bamboo-Path-Winter-SPIRIT1215.jpg%3Fitok%3DXZVRNzuq&w=800&q=85" , alt:"Chicago"},
            {src:"https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1450820945%2FHammerfest-Norway-Northern-Lights-Winter-SPIRIT1215.jpg%3Fitok%3DPNMnP9ky&w=800&q=85" , alt:"Chicago"},
            {src:"https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1450820945%2FWinter-Tromso-night-coastal-town-snow-SPIRIT1215.jpg%3Fitok%3D5P41uJDm&w=800&q=85" , alt:"Chicago"},
            {src:"https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1450820945%2Fsnowy-english-street-red-telephone-booth-winter-SPIRIT1215.jpg%3Fitok%3Dx-1xHYfa&w=800&q=85" , alt:"Chicago"},
            {src:"https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1450820945%2Fhot-air-balloons-Cappadocia-winter-snow-SPIRIT1215.jpg%3Fitok%3DHOGBaLBJ&w=800&q=85" , alt:"New york"}]
        }
    }
    componentDidMount(){
        var is_mobile = false;
        window.screen.width <= 992?is_mobile =true:false;
        if(is_mobile){
            this.setState({collapsed:"collapse"})
        } else{
            this.setState({collapsed:"collapse.in"})            
        } 
    }
    
    handleSelectLeft(e) {
    var index=this.state.index;
    index--;
    index=index==-1?this.state.images.length-1:index;
    this.setState({index});
    e.preventDefault();
  }
  handleSelectRight(e) {
    var index=this.state.index;
    index++;
    index=index==this.state.images.length?0:index;
    this.setState({index});
    e.preventDefault();
  }

    toggleCollapse = () => { 
        const collapsed = this.state.collapsed=="collapse.in"?"collapse":"collapse.in";
        this.setState({ collapsed });
    }
    render() {
        var src=this.state.images[this.state.index].src;
        var alt=this.state.images[this.state.index].alt;
        return (
            <div className="carousel-wrapper">
              <div className="container">
                <h2>Carousel Example</h2>  
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="item active">
                      <img src={src} alt={alt} style={{ width: '100%' }} />
                    </div>
                  </div> 
                  <a className="left carousel-control" href="#myCarousel" data-slide="prev" onClick={this.handleSelectLeft}>
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="right carousel-control" href="#myCarousel" data-slide="next" onClick={this.handleSelectRight}>
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <Grid fluid style={{ lineHeight: '32px' }}>   
                <h3>What We Do</h3>
                <br />
                <Row>
                  <Col  sm={4}> 
                    <img src="https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1450820945%2Fsheep-snow-mountain-winter-SPIRIT1215.jpg%3Fitok%3DdCX9_6Q0&w=800&q=85" className="img-responsive" alt="Image" />
                    <p>Current Project</p>
                  </Col>
                  <Col  sm={4}> 
                    <img src="https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1450820945%2Fsnowy-mountains-glacial-lake-winter-SPIRIT1215.jpg%3Fitok%3DcO1TV9RH&w=800&q=85" className="img-responsive"alt="Image" />
                    <p>Project 2</p>    
                  </Col>
                  <Col  sm={4}>
                    <div className="well">
                      <p>Some text..</p>
                    </div>
                    <div className="well">
                      <p>Some text..</p>
                    </div>
                  </Col>
                </Row>
              </Grid> 
              <br />
              <footer className="container-fluid text-center" style={{ backgroundColor: 'transparent' }}></footer> 
            </div>
        );
    }
}