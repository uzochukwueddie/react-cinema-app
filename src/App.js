import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './App.scss';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Details from './components/content/details/Details';
import ErrorBoundary from './components/error/ErrorBoundary';
import { appRoutes } from './redux/actions/routes';
import { AppRoutes } from './routes';

const App = (props) => {
  const { appRoutes } = props;
  const routesArray = [
    {
      id: 1,
      path: '/',
      component: Main
    },
    {
      id: 2,
      path: '/:id/:name/details',
      component: Details
    }
  ];

  useEffect(() => {
    appRoutes(routesArray);
  }, [routesArray, appRoutes]);

  return (
    <div className="app">
      <BrowserRouter>
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

App.propTypes = {
  appRoutes: PropTypes.func
};

export default connect(null, { appRoutes })(App);
