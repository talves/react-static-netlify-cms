
import React from 'react'
//

let path = '/about'

export default () => (
  <div>
    <h1>This is what we're all about.</h1>
    <p>React, static sites, performance, speed. It's the stuff that makes us tick.</p>
  </div>
)

export const router = {
  route: config => {
    path = (config && config.route) ? config.route : path
    return { path }
  },
}
