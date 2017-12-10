import React from 'react'
import { getRouteProps, Link } from 'react-static'
//

let path = '/post/00'
let returnUri = '/blog/'

export default getRouteProps(({ post }) => (
  <div>
    <Link to={returnUri}>{'<'} Back</Link>
    <br />
    <h3>{post.title}</h3>
    <p>{post.body}</p>
  </div>
))

export const router = {
  route: (config, post) => {
    path = (config && config.route) ? config.route : path
    returnUri = (config && config.parentroute) ? `${config.parentroute}/` : returnUri

    return {
      path,
      getProps: () => ({
        post,
      }),
    }
  },
}
