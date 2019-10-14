import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Result } from 'antd';
import GA from './utils/GoogleAnalytics';
import PageLayout from './components/Layout';

import Home from './pages/Home';
import DateTimeFormat from './pages/DateTimeFormat';
import RelativeTimeFormat from './pages/RelativeTimeFormat';
import NoMatch from './components/404';

function App() {
  return (
    <Router>
      {GA.init() && <GA.RouteTracker />}
      <PageLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/DateTimeFormat"
            component={
              process.env.NODE_ENV === 'production' ? NoMatch : DateTimeFormat
            }
          />
          <Route
            exact
            path="/RelativeTimeFormat"
            component={
              process.env.NODE_ENV === 'production'
                ? NoMatch
                : RelativeTimeFormat
            }
          />
          <Route component={NoMatch} />
        </Switch>
      </PageLayout>
    </Router>
  );
}

export default App;
