import React, { Fragment } from 'react';
import {Navigation} from './components/shared';
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
