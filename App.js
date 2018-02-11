import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { onLoad } from './actions/userAction';
import { OnAddUser, OnUpdateUser, deleteUser, OnSearchUser, OnRefreshUser } from './actions/userAction';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './components/home/home';
import { Layout } from './components/layout/Layout'
import { BasicTable } from './components/Others/Table';
import { Nav } from './components/Others/Nav';
import { LayoutExample } from './components/Others/List';
import { BootstrapTemplates } from './components/Others/BootstrapTemplates';
import { BootstrapCarousel } from './components/Others/BootstrapCarousel';
import { FanctualTable } from './components/Others/FanctualTable';
import { HomePage } from './components/Others/HomePage';

class App extends Component {
    componentWillMount() {
        // this.props.onLoad();
    }
    render() {
        return (
            <div>                 
                <BrowserRouter>
                    <div>
                        <Layout />
                        <div className="container">
                            <Route exact path="/"
                                render={(props) => <HomePage></HomePage>} />
                            <Route exact path="/functional_table"
                                render={(props) => <FanctualTable></FanctualTable>} />
                            <Route exact path="/list"
                                render={(props) => <Home></Home>} />
                            <Route exact path="/table"
                                render={(props) => <BasicTable />} />
                            <Route exact path="/nav"
                                render={(props) => <Nav></Nav>} />        
                            <Route exact path="/layout"
                                render={(props) => <LayoutExample />} />
                            <Route exact path="/bootstrapTemplates"
                                render={(props) => <BootstrapTemplates />} />  
                            <Route exact path="/carousel"
                                render={(props) => <BootstrapCarousel />} />    
                                                                                 
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
function mapStateToProps(store, ownProps) {
    return {
        data: store.data,
        FilterList: store.FilterList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        delete: (id) => dispatch(deleteUser(id)),
        onLoad: () => dispatch(onLoad()),
        add: (user) => dispatch(OnAddUser(user)),
        update: (user) => dispatch(OnUpdateUser(user)),
        Search: (value) => dispatch(OnSearchUser(value)),
        Refresh: () => dispatch(OnRefreshUser())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);