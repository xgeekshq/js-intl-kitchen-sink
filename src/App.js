import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Result } from 'antd';

import GA from './utils/GoogleAnalytics';
import PageLayout from './components/Layout';

import Home from './pages/Home';
import DateTimeFormat from './pages/DateTimeFormat';

// Temp
const notImplemented = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you intended is still under development."
    extra={
      <Link to="/">
        <span className="nav-text">Home</span>
      </Link>
    }
  />
);

function App() {
  return (
    <Router>
      {GA.init() && <GA.RouteTracker />}
      <PageLayout>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/DateTimeFormat"
          component={
            process.env.NODE_ENV === 'production'
              ? notImplemented
              : DateTimeFormat
          }
        />
        <Route exact path="/NumberFormat" component={notImplemented} />
        <Route exact path="/Collator" component={notImplemented} />
        <Route exact path="/PluralRules" component={notImplemented} />
        <Route exact path="/RelativeTimeFormat" component={notImplemented} />
        <Route exact path="/getCanonicalLocales" component={notImplemented} />
      </PageLayout>
    </Router>
  );
}

export default App;
