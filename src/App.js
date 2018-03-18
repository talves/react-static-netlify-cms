import React from 'react'
import { Router, Route, Switch, Link } from 'react-static'
import { Toolbar, ToolbarRow, ToolbarTitle, ToolbarSection } from 'rmwc/Toolbar'
//
import NotFound from 'containers/404'
import menus from './menus'
import './sass/app.scss'

export default () => (
  <Router>
    <div>
      <Toolbar fixed>
        <ToolbarRow>
          <ToolbarTitle><Link className="mdc-button mdc-theme--text-primary-on-primary" to="/" >React-Static Site</Link></ToolbarTitle>
          <ToolbarSection alignEnd>
            {menus.navigation}
          </ToolbarSection>
        </ToolbarRow>
      </Toolbar>
      <div className="content mdc-toolbar-fixed-adjust">
        <Switch>
          {menus.content}
          <Route component={NotFound} />
        </Switch>
      </div>
      <div id="no-auto" />
    </div>
  </Router>
)
