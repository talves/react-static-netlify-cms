import React from 'react'
import axios from 'axios'
import { Link, Route } from 'react-static'

import Home, { router as homeRouter } from '../containers/Home'
import About, { router as aboutRouter } from '../containers/About'
import Blog, { router as blogRouter } from '../containers/Blog'
import Docs, { router as docsRouter } from '../containers/Docs'
import ThemeColors, { router as themesRouter } from '../containers/ThemeColors'

import config from './config.json'
import documentation from '../data/docs.json'

const components = { Home, About, Blog, ThemeColors, Docs }
const routers = {
  Home: { router: homeRouter },
  About: { router: aboutRouter },
  Blog: { router: blogRouter },
  Docs: { router: docsRouter },
  ThemeColors: { router: themesRouter },
}

export default {
  components,
  navigation: config.menus.filter(menu => menu.display).map(menu => <Link className="mdc-button mdc-theme--text-primary-on-primary" key={menu.name} to={menu.link}>{menu.name}</Link>),
  content: config.menus.map(menu => (
    <Route
      key={menu.name}
      exact={menu.link === menu.route}
      path={menu.route}
      component={components[menu.componentName]}
    />
  )),
  routes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return config.menus.map(menu => {
      let route
      switch (menu.componentName) {
        case 'Blog':
          route = routers[menu.componentName].router.route(menu, posts)
          break
        case 'Docs':
          route = routers[menu.componentName].router.route(menu, documentation)
          break
        default:
          route = routers[menu.componentName].router.route(menu)
          break
      }
      return route
    })
  },
}
