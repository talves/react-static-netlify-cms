import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'
import { Typography } from 'rmwc/Typography'
//

let path = '/about'

export default () => (
  <Grid>
    <GridCell span="3" />
    <GridCell span="6"><Typography tag="h1" style={{ textAlign: 'center' }} use="display1">This is what we're all about.{'😀'}</Typography></GridCell>
    <GridCell span="3" />
    <GridCell span="3" />
    <GridCell span="6">
      <Typography use="body2">React, static sites, performance, speed. It's the stuff that makes us tick.</Typography></GridCell>
    <GridCell span="3" />
  </Grid>
)

export const router = {
  route: config => {
    path = (config && config.route) ? config.route : path
    return { path }
  },
}
