import React, { Component } from 'react';
import { List } from '../game/game';
export class Home extends Component {
    render() {
        return (
            <div>
                <div className='home' >
                    <div className="App">
                    <List />
                    </div> 
                </div>
            </div>
        );
    }
}