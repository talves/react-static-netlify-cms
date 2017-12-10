
import React from 'react'
import { getRouteProps, Switch, Route, Link } from 'react-static'
//
import Post, { router as postRouter } from './Post'

let path = '/blog'
let childPath = '/post'
let posts = []
const getProps = () => ({
  posts,
})

export default getRouteProps(({ match, posts }) => (
  <div>
    <Switch>
      <Route
        path={match.url}
        exact
        render={() => (
          <div>
            <h1>It's blog time.</h1>
            <br />
            All Posts:
            <ul>
              {posts.map(post => (
                <li key={post.id}>
                  <Link to={`${path}${childPath}/${post.id}/`}>{post.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      />
      <Route path={`${match.url}${childPath}/:postID/`} component={Post} />
    </Switch>
  </div>
))

export const router = {
  route: (config, data) => {
    path = (config && config.route) ? config.route : path
    childPath = (config && config.childroute) ? config.childroute : childPath
    posts = data || posts

    return {
      path,
      getProps,
      children: posts.map(post => (postRouter.route({ route: `${childPath}/${post.id}`, parentroute: path }, post))),
    }
  },
}
