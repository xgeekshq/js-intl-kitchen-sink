import React from 'react';
import { Result } from 'antd';
import GithubCorner from 'react-github-corner';

import logo from './assets/images/xGeeksLogo.png';

function App() {
  if (process.env.NODE_ENV === 'production') {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
          <Result
            status="warning"
            title="The kick-off for this project hasn't happen yet, please try again later"
          />
        </header>
        <GithubCorner
          bannerColor="#70B7FD"
          octoColor="#e8e8e8"
          href="https://github.com/xgeekshq/js-intl-kitchen-sink"
        />
      </div>
    );
  }

  return (
    <div className="App">
      Start developing...
      <GithubCorner
        bannerColor="#70B7FD"
        octoColor="#e8e8e8"
        href="https://github.com/xgeekshq/js-intl-kitchen-sink"
      />
    </div>
  );
}

export default App;
