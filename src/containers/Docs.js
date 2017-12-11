import React from 'react'
import { getRouteProps, Switch, Route, Link } from 'react-static'
import { Grid, GridCell, GridInner } from 'rmwc/Grid'
import { List, ListItem, ListItemStartDetail, ListItemText, ListItemEndDetail } from 'rmwc/List'
import { IconToggle } from 'rmwc/IconToggle'
import { Elevation } from 'rmwc/Elevation'
import { Icon } from 'rmwc/Icon'
import { Typography } from 'rmwc/Typography'
//
import DocItem, { router as docsRouter } from './DocItem'

let path = '/docs'
let docs = []
const getProps = () => ({
  docs,
})

export default getRouteProps(({ match, docs }) => (
  <Grid>
    <Switch>
      <Route
        path={match.url}
        exact
        render={() => (
          <GridCell span="12">
            <GridInner>
              <GridCell span="3" />
              <GridCell span="6"><Typography tag="h1" style={{ textAlign: 'center' }} use="display2">
                List of Documentation.</Typography></GridCell>
              <GridCell span="3" />
              <GridCell span="3" />
              <GridCell span="6">
                {docs.map(item => (
                  <List key={item.data.path}>
                    <Link to={`${path}/${item.data.path}/`}>
                      <Elevation style={{ padding: '10px' }} z={6}>
                        <ListItem ripple>
                          <ListItemStartDetail><Icon>book</Icon></ListItemStartDetail>
                          <ListItemText>
                            <Typography className="post-link" tag="div" use="Headline">{item.data.title}</Typography>
                          </ListItemText>
                          <ListItemEndDetail><Icon>info</Icon></ListItemEndDetail>
                        </ListItem>
                      </Elevation>
                    </Link>
                  </List>
                ))}
              </GridCell>
              <GridCell span="3" />
            </GridInner>
          </GridCell>
        )}
      />
      <Route path={`${match.url}/`} component={DocItem} />
    </Switch>
  </Grid>
))

export const router = {
  route: (config, documentation) => {
    path = (config && config.route) ? config.route : path
    docs = documentation || docs

    return {
      path,
      getProps,
      children: documentation.map(item => (docsRouter.route({ route: `${item.data.path}`, parentroute: path }, item))),
    }
  },
}
