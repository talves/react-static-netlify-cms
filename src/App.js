import React from 'react'
import { Router, Route, Switch } from 'react-static'
//
import NotFound from 'containers/404'
import menus from './menus'
import './app.scss'

export default () => (
  <Router>
    <div>
      <nav>
        { menus.navigation }
      </nav>
      <div className="content">
        <Switch>
          { menus.content }
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </Router>
)
