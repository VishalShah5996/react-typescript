import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {Login} from "./Login/Login";
import {Signup} from "./Signup/Signup";
import {Welcome} from "./Welcome/Welcome";

export const RouterPreauth = () => {
    return (
        <Switch>
            <Route exact path={"/"}>
                <Redirect to="/welcome"/>
            </Route>
            <Route exact path={"/login"}>
                <Login />
            </Route>
            <Route exact path={"/signup"}>
                <Signup/>
            </Route>
            <Route exact path={"/welcome"}>
                <Welcome/>
            </Route>
        </Switch>
    );
};
