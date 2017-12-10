import React from 'react'
import { getSiteProps } from 'react-static'
//
import logoImg from '../logo.png'

let path = '/'

export default getSiteProps(() => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
    <img src={logoImg} alt="" />
  </div>
))

export const router = {
  route: config => {
    path = (config && config.route) ? config.route : path
    return { path }
  },
}
