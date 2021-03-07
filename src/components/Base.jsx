import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Auth from "./login/Auth"
// import Home from './Home'

const Base = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Auth}/>
                {/* <Route path="" component={}/> */}
                {/* <Route exact path="/404" component={NotFound}/> */}
                <Redirect to="/404"/>
            </Switch>
            
        </BrowserRouter>
    )
}

export default Base