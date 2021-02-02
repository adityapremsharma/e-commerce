import React from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom"
import Login from "./Login"
import Home from './Home'

const Base = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/home" component={Home}/>
                {/* <Route exact path="/404" component={NotFound}/> */}
                <Redirect to="/404"/>
            </Switch>
            
        </BrowserRouter>
    )
}

export default Base