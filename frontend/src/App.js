import React, { Fragment } from 'react';
import Navigation from './components/shared/Navigation/Navigation';
import MainRoute from './MainRoutes';

function App() {
  return (
    <Fragment>
      <Navigation />
      <MainRoute />
    </Fragment>
  );
}

export default App;
