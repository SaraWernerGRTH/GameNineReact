import React, { Component } from 'react';
import { Game } from '../game/game';
export class Nav extends Component {
    constructor(props, context) {
        super(props, context);    
        this.state={
            collapsed:"collapse",
            dropdown:" ",
            dropdown2:" "
        }
    }
    componentDidMount(){
        var is_mobile = false;
        window.screen.width <= 992?is_mobile =true:false;
        if(is_mobile){
            this.setState({nav4Collapsed:"collapse"})
        } else{
            this.setState({nav4Collapsed:"collapse.in"})            
        } 
    }
    toggleDropDown = () => { 
        const dropdown = this.state.dropdown=="collapse.in"?" ":"collapse.in";
        this.setState({ dropdown });
    }
    toggleDropDown2 = () => { 
        const dropdown2 = this.state.dropdown2=="collapse.in"?" ":"collapse.in";
        this.setState({ dropdown2 });
    }
    toggleCollapse = () => { 
        const collapsed = this.state.collapsed=="collapse.in"?"collapse":"collapse.in";
        this.setState({ collapsed });
    }
    render() {
        return (
            <div className="navs">
                <ul className="nav a-nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                                {/* ///////////////////////////// */}
                <ul className="nav nav-pills a-nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                {/* //////////////////////////////////// */}
                <ul  className="nav nav-tabs a-nav">
                    <li  className="nav-item">
                        <a  className="nav-link active" href="#">Active</a>
                    </li>
                    <li  className="nav-item dropdown">
                        <a  className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" onClick={this.toggleDropDown}>Dropdown</a>
                        <div  className={"dropdown-menu"+this.state.dropdown}>
                            <a  className="dropdown-item" href="#">Action</a>
                            <a  className="dropdown-item" href="#">Another action</a>
                            <a  className="dropdown-item" href="#">Something else here</a>
                            <div  className="dropdown-divider"></div>
                            <a  className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </li>
                    <li  className="nav-item">
                        <a  className="nav-link" href="#">Link</a>
                    </li>
                    <li  className="nav-item">
                        <a  className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                {/* //////////////////// */}
                <div  className="pos-f-t a-nav">
                    <div  className={this.state.collapsed} id="navbarToggleExternalContent">
                        <div  className="bg-dark p-4">
                            <h4  className="text-white">Collapsed content</h4>
                            <span  className="text-muted">Toggleable via the navbar brand.</span>
                        </div>
                    </div>
                    <nav  className="navbar navbar-dark bg-dark">
                        <button  className="navbar-toggler" type="button" onClick={this.toggleCollapse}>
                            <span  className="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                </div>
            </div>
        );
    }
}