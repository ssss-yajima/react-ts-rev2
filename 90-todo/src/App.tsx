import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Redirect, Route, Switch } from 'react-router';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TaskList from './containers/TaskList';

const title = 'ToDo List';

const App: FC = () => (
  <>
    <Helmet htmlAttributes={{ lang: 'ja' }}>
      <title>{title}</title>
    </Helmet>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
    </AppBar>
    <Paper>
      <Switch>
        <Route path="/" exact component={TaskList} />
        {/* <Route path="/:taskId/detail" component={Detail} /> */}
        <Redirect to="/" />
      </Switch>
    </Paper>
  </>
);

export default App;
