import React from 'react';

import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import HomePage from "./Components/Pages/HomePage";
import ExamensPage from "./Components/Pages/ExamensPage";
import SettingsPage from "./Components/Pages/SettingsPage";
import LogoutPage from "./Components/Pages/LogoutPage";
import QuestionPage from "./Components/Pages/QuestionPage";
import AdminPage from "./Components/Pages/AdminPage";
import CreateExamPage from "./Components/Pages/CreateExamPage";
import CreateQuestionPage from "./Components/Pages/CreateQuestionPage";
import CreateExamItemPage from "./Components/Pages/CreateExamItemPage";
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
                <Route path="/instellingen">
                    <SettingsPage/>
                </Route>
                <Route path="/logout">
                    <LogoutPage/>
                </Route>
                <Route path="/question">
                    <QuestionPage/>
                </Route>
                <Route path="/admin">
                <AdminPage/>
            </Route>
                <Route path="/create-exam">
                    <CreateExamPage/>
                </Route>
                <Route path="/create-question">
                    <CreateQuestionPage/>
                </Route>
                <Route path="/create-examItem">
                    <CreateExamItemPage/>
                </Route>
                <Route path="/login">
                    <LoginPage/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App