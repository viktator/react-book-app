import React from "react";
import {Route, Switch} from "react-router-dom";
import Search from './Search/Search'
import WellcomePage from './WellcomePage'
import AboutBook from './AboutBook'
import Favorite from './Favorite'


export default () => {

    return (
        <Switch>
            <Route path="/" exact component={WellcomePage}/>
            <Route path="/search" component={Search}/>
            <Route path="/favorite" component={Favorite}/>
            <Route path="/books/:id" component={AboutBook}/>
        </Switch>
    )
}