import React from "react";
import { Link } from "react-router-dom";
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import { slide as Menu } from 'react-burger-menu';
import {Row, Col ,Grid} from 'react-bootstrap';
export class Layout extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            collapsed: true,
            today: new Date(),
            isClosed:true,
            toggleStyle:"hidden"
        };   
        this.openNav=this.openNav.bind(this);   
        this.closeNav=this.closeNav.bind(this);           
    }
    items = [
        <SidebarItem><a href="/list">List</a></SidebarItem>,
        <SidebarItem><a href="/functional_table">Functional table</a></SidebarItem>,        
        <SidebarItem><a href="/table">Table</a></SidebarItem>,
        <SidebarItem><a href="/nav">Navs</a></SidebarItem>,
        <SidebarItem><a href="/layout">Layout</a></SidebarItem>,
        <SidebarItem><a href="/bootstrapTemplates">Template</a></SidebarItem>,
        <SidebarItem><a href="/carousel">Carousel</a></SidebarItem>        
      ]; 
    openNav = () => {
        this.setState({isClosed:false});
    }
    showSettings (event) {
        debugger
        event.preventDefault();

      }
    closeNav = () => {
        this.setState({isClosed:true});
    }
    toggleCollapse = () => {
        const collapsed = !this.state.collapsed;
        this.setState({ collapsed });
    }

    button = { mayrgin: '0.5%', float: 'right' };
    render() {
        const { collapsed } = this.state;
        const navClass = collapsed ? "collapse" : ""; 
        return (
            <div>
                <div className="sidebar2">
                    <div id="mySidenav" className={"sidenav " + (this.state.isClosed==true  ? "closed" : "opened")}>
                        <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                        <a className="shift" href="/list">List</a>
                        <a className="shift" href="/functional_table">Functional table</a>
                        <a className="shift" href="/table">Table</a>
                        <a className="shift" href="/nav">Navs</a>
                        <a className="shift" href="/layout">Layout</a>
                        <a className="shift" href="/bootstrapTemplates">Templates</a>   
                        <a className="shift" href="/carousel">Carousel</a>                     
                    </div>
                    <span className="span" onClick={this.openNav}>&#9776;</span>
                </div>
                <div className="sidebar1">
                    <Sidebar content={this.items}></Sidebar>
                </div>
                <div className="sidebar3">
                    <Menu>
                        <Grid fluid style={{ lineHeight: '32px' }}>
                            <Row >
                                <Col xs={1} md={1} className="menu-item">
                                    <a id="list" className="menu-item" href="/list">List</a>
                                </Col>
                                <Col xs={1} md={1} className="menu-item">
                                    <a id="list" className="menu-item" href="/functional_table">Table #1</a>
                                </Col>
                                <Col xs={1} md={1} className="menu-item">
                                    <a id="table" className="menu-item" href="/table">Table #2</a>
                                </Col>
                                <Col xs={1} md={1} className="menu-item">
                                    <a id="nav" className="menu-item" href="/nav">Navs</a>
                                </Col>
                                <Col xs={1} md={1} className="menu-item">
                                    <a id="layout" className="menu-item" href="/layout">Layout</a>
                                </Col>
                                <Col xs={1} md={1} className="menu-item">
                                    <a id="bootstrapTemplates" className="menu-item" href="/bootstrapTemplates">Templates</a> 
                                </Col>
                                <Col xs={1} md={1} className="menu-item">
                                    <a id="carousel" className="menu-item" href="/carousel">Carousel</a>
                                </Col>
                            </Row>
                        </Grid>
                    </Menu>
                </div>

            </div>
        );
    }
}

export default Layout;