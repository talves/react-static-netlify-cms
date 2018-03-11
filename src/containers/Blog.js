import React from 'react'
import { withRouteData, Switch, Route, Link } from 'react-static'
import { Grid, GridCell, GridInner } from 'rmwc/Grid'
import { List, ListItem, ListItemGraphic, ListItemText } from 'rmwc/List'
import { Elevation } from 'rmwc/Elevation'
import { Icon } from 'rmwc/Icon'
import { Typography } from 'rmwc/Typography'
//
import Post, { router as postRouter } from './Post'

let path = '/blog'
let childPath = '/post'
let posts = []
const getData = () => ({
  posts,
})

export default withRouteData(({ match, posts }) => (
  <Grid>
    <Switch>
      <Route
        path={match.url}
        exact
        render={() => (
          <GridCell span="12">
            <GridInner>
              <GridCell span="3" />
              <GridCell span="6"><Typography tag="h1" style={{ textAlign: 'center' }} use="display2">It's blog time.</Typography></GridCell>
              <GridCell span="3" />
              <GridCell span="3" />
              <GridCell span="6"><Typography tag="h1" use="Headline">All Posts:</Typography></GridCell>
              <GridCell span="3" />
              <GridCell span="3" />
              <GridCell span="6">
                {posts.map(post => (
                  <List key={post.id}>
                    <Link to={`${path}${childPath}/${post.id}/`}>
                      <Elevation style={{ padding: '10px' }} z={6}>
                        <ListItem ripple>
                          <ListItemGraphic><Icon>bookmark_outline</Icon></ListItemGraphic>
                          <ListItemText>
                            <Typography className="post-link" tag="div" use="Headline">{post.volumeInfo.authors[0]} - {post.volumeInfo.title}</Typography>
                          </ListItemText>
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
      <Route path={`${match.url}${childPath}/:postID/`} component={Post} />
    </Switch>
  </Grid>
))

export const router = {
  route: (config, data) => {
    path = (config && config.route) ? config.route : path
    childPath = (config && config.childroute) ? config.childroute : childPath
    posts = data || posts

    return {
      path,
      getData,
      children: posts.map(post => (postRouter.route({ route: `${childPath}/${post.id}`, parentroute: path }, post))),
    }
  },
}
