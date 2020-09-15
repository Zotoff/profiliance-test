import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../components/Home/Home'
import Login from '../components/Login/Login'
import NewsList from '../components/NewsList/NewsList'
import NavigationMenu from '../components/Nav/Nav'
import NewsItem from '../components/NewsItem/NewsItem'

const Routes = () => {
    return (
        <BrowserRouter>
            <NavigationMenu />
            <Switch>
                <Route path="/news/:newsId" component={NewsItem} />
                <Route path="/news" component={NewsList} />
                <Route path="/login" component={Login} />
                <Route path="/" component={Home} exact />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;