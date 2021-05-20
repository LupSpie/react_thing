import React from "react";
import "./Content.css";

import { Switch, Route } from "react-router-dom";
import Home from "../../views/contents/Home";
import Content01 from "../../views/contents/Content01";
import Content02 from "../../views/contents/Content02";
import Content03 from "../../views/contents/Content03";
import NotFound from "../../views/contents/NotFound";

const Content = (props) => (
    <main className='Content'>
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/content01/:user'>
                <Content01 />
            </Route>
            <Route path='/content02'>
                <Content02 />
            </Route>
            <Route path='/content03'>
                <Content03 />
            </Route>
            <Route path='*'>
                <NotFound />
            </Route>
        </Switch>
    </main>
);

export default Content;
