import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GA from './utils/GoogleAnalytics';
import PageLayout from './components/Layout';

import Home from './pages/Home';
import DateTimeFormat from './pages/DateTimeFormat';
import RelativeTimeFormat from './pages/RelativeTimeFormat';
import ListFormat from './pages/ListFormat';
import NoMatch from './components/404';
import PluralRules from './pages/PluralRules';

function App() {
  return (
    <Router>
      {GA.init() && <GA.RouteTracker />}
      <PageLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/DateTimeFormat" component={DateTimeFormat} />
          <Route
            exact
            path="/RelativeTimeFormat"
            component={RelativeTimeFormat}
          />
          <Route exact path="/ListFormat" component={ListFormat} />
          <Route exact path="/PluralRules" component={PluralRules} />
          <Route component={NoMatch} />
        </Switch>
      </PageLayout>
    </Router>
  );
}

export default App;
