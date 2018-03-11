import React from 'react'
import { withSiteData } from 'react-static'
import { Grid, GridCell } from 'rmwc/Grid'
import { Typography } from 'rmwc/Typography'
import { Elevation } from 'rmwc/Elevation'
//
import logoImg from '../images/logo.png'
import logoMDCImg from '../images/material-components-logo.svg'
import logoCMSImg from '../images/netlify-cms-logo.svg'

let path = '/'

export default withSiteData(() => (
  <Grid>
    <GridCell span="2" />
    <GridCell span="8"><Typography tag="h1" style={{ textAlign: 'center' }} use="display2">Welcome to</Typography></GridCell>
    <GridCell span="2" />
    <GridCell span="2" />
    <GridCell span="8">
      <a href="https://www.netlifycms.org/" target="_blank" rel="noopener noreferrer">
        <img className="nc-Page-logo" src={logoCMSImg} alt="Netlify CMS" />
      </a>
    </GridCell>
    <GridCell span="2" />
    <GridCell span="2" />
    <GridCell span="8">
      <a href="https://github.com/nozzle/react-static" target="_blank" rel="noopener noreferrer">
        <img style={Object.assign({}, { height: 'auto', width: '100%' })} src={logoImg} alt="" />
      </a>
    </GridCell>
    <GridCell span="2" />
    <GridCell span="2" />
    <GridCell span="8">
      <a href="https://github.com/nozzle/react-static" target="_blank" rel="noopener noreferrer">
        <Elevation z="8">
          <Typography tag="h1" style={{ textAlign: 'center' }} use="display2">
            <img style={Object.assign({}, { height: 'auto', width: '2.0em' })} src={logoMDCImg} alt="" /> Using Material Design Web Components
          </Typography>
          <Typography tag="div" style={{ textAlign: 'center' }} use="headline">RMWC - React Material Web Components - by James Friedman</Typography>
        </Elevation>
      </a>
    </GridCell>
    <GridCell span="2" />
  </Grid>
))

export const router = {
  route: config => {
    path = (config && config.route) ? config.route : path
    return { path }
  },
}
