import React, {Component} from 'react'
import {Route, Switch}    from 'react-router-dom';
import Home from "./components/Home";
import Store from "./components/Store";
import Detail from "./components/Detail";
import Books from "./components/Books";

class RouterProtected extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/store' component={Store}/>
                <Route exact path='/books' component={Books}/>
                <Route exact path='/books/:id' component={Detail}/>
            </Switch>
        )
    }
}

export default RouterProtected;