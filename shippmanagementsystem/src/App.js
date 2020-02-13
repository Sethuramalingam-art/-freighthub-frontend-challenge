import React, { Component, Suspense, lazy  } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';


const UserLogin = lazy(() => import('./components/userLogin/userLogin'));
const UserRegistration = lazy(() => import('./components/userRegistration/userRegistration'));
const ShippmentDetails = lazy(() => import('./components/shipManagement/shippmentDetails'));
const ShippmentDetailView = lazy(() => import('./components/shipManagement/shippmentDetailView'));

class App extends React.Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={ UserLogin }></Route>
            <Route path="/userRegister" exact component={ UserRegistration }></Route>
            <Route path="/shippmentDetails" exact component={ ShippmentDetails }></Route>
            <Route path="/shippmentDetailView/:id" exact component={ ShippmentDetailView }></Route>
          </Switch>
        </Suspense>
      </Router>
    );

  }
}

export default App;
