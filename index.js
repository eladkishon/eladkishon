// bundle in some libs
require('./css/skeleton.css');
require('./css/main.css');

import {app} from 'hyperapp';
import actions from './actions';
import state from './state';
import view from './components/main';

app(
  state,
  actions,
  view,
  document.body,
);