/* eslint-disable jest/expect-expect */
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
