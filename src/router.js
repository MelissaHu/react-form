import React from 'react';
import { Router, Route } from 'dva/router';
import MainPage from './routes/MainPage';
import MainLayout from './routes/SystemMag/Common';
import WindowMag from './routes/SystemMag/WindowMag';
import DocMag from './routes/DocMag/DocInfo';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={MainPage} />
      <Route path="/systemMag" component={MainLayout}>
        <Route path="/systemMag/windowMag" component={WindowMag} />
      </Route>
      <Route path="/DocMag" component={DocMag} />
    </Router>
  );
}

export default RouterConfig;
