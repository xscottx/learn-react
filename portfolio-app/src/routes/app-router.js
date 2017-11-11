import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/header';
import Home from '../components/home';
import Portfolio from '../components/portfolio';
import PortfolioDetail from '../components/portfolio-detail';
import Contact from '../components/contact';
import NotFound from '../components/not-found';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/portfolio" exact={true} component={Portfolio} />
        <Route path="/portfolio/:id" component={PortfolioDetail} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;