import React, {Component} from 'react'
import {Route, Switch}    from 'react-router-dom';
import Home from "./components/Home";
import Store from "./components/Store";

class RouterProtected extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/store' component={Store}/>
            </Switch>
        )
    }
}

export default RouterProtected;