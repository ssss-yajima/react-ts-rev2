import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Redirect, Route, Switch } from 'react-router';

import TaskList from './components/TaskList';
// import Detail from './containers/Detail';

// import './App.css';

const title = 'ToDo List';

const App: FC = () => (
  <>
    <Helmet htmlAttributes={{ lang: 'ja' }}>
      <title>{title}</title>
    </Helmet>

    <header className="App-header">
      <h1>{title}</h1>
    </header>
    <Switch>
      <Route path="/" exact component={TaskList} />
      {/* <Route path="/:taskId/detail" component={Detail} /> */}
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
