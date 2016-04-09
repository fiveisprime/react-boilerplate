import {createHistory} from 'history'
import React from 'react'
import {render} from 'react-dom'
import {IndexRoute, Route, Router} from 'react-router'

import App from './containers/App'
import CSS from './styles/main.scss'
import Home from './containers/Home'

const routes = (
  <Router history={createHistory()}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
)

render(routes, document.getElementById('root'))
