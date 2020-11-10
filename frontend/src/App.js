import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import ExamensPage from "./Components/Pages/ExamensPage";
import AdvicePage from "./Components/Pages/AdvicePage"
import CoursesPage from "./Components/Pages/CoursesPage";
import SettingsPage from "./Components/Pages/SettingsPage";
import LogoutPage from "./Components/Pages/LogoutPage";
import LoginPage from "./Components/Pages/LoginPage";


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route path="/examens">
                    <ExamensPage/>
                </Route>
                <Route path="/courses">
                    <CoursesPage/>
                </Route>
                <Route path="/instellingen">
                    <SettingsPage/>
                </Route>
                <Route path="/advice">
                    <AdvicePage/>
                </Route>
                <Route path="/logout">
                    <LogoutPage/>
                </Route>
                <Route path="/login">
                    <LoginPage/>
                </Route>
            </Switch>
        </Router>
    );

}

export default App