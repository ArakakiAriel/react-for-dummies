import React from 'react'
import { Navbar } from '../components/ui/NavBar'
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/hero/HeroScreen';
import { SearchScreen } from '../components/search/SearchScreen';


export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>

            <div className="container mt-4">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/dc" component={DcScreen} />
                    <Route exact path="/hero/:hero_id" component={HeroScreen} />
                    <Route exact path="/search" component={SearchScreen}/>
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}
