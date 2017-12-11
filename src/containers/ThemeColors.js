import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'
import { Theme } from 'rmwc/Theme'
//

let path = '/theme'

export default () => (
  <Grid>
    <GridCell span="3" />
    <GridCell span="6" style={{ backgroundColor: '#fcfcfc' }}>
      {[
        'primary',
        'primary-light',
        'primary-dark',
        'secondary',
        'secondary-light',
        'secondary-dark',
        'background',
        'dark',
        'primary-bg',
        'primary-light-bg',
        'primary-dark-bg',
        'secondary-bg',
        'secondary-light-bg',
        'secondary-dark-bg',
        'text-primary-on-background',
        'text-secondary-on-background',
        'text-hint-on-background',
        'text-disabled-on-background',
        'text-icon-on-background',
        'text-primary-on-light',
        'text-secondary-on-light',
        'text-hint-on-light',
        'text-disabled-on-light',
        'text-icon-on-light',
      ].map((theme, i) => (
        <Theme style={{ height: '60px', textAlign: 'center', fontSize: '2em' }} tag="div" use={theme} key={theme}>
          {theme}
        </Theme>
      ))}
    </GridCell>
    <GridCell span="3" />
    <GridCell span="3" />
    <GridCell span="6" style={{ backgroundColor: '#3c3c3c' }}>
      {[
        'text-primary-on-primary',
        'text-secondary-on-primary',
        'text-hint-on-primary',
        'text-disabled-on-primary',
        'text-icon-on-primary',
        'text-primary-on-secondary',
        'text-secondary-on-secondary',
        'text-hint-on-secondary',
        'text-disabled-on-secondary',
        'text-icon-on-secondary',
        'text-primary-on-dark',
        'text-secondary-on-dark',
        'text-hint-on-dark',
        'text-disabled-on-dark',
        'text-icon-on-dark',
      ].map((theme, i) => (
        <Theme style={{ height: '60px', textAlign: 'center', fontSize: '2em' }} tag="div" use={theme} key={theme}>
          {theme}
        </Theme>
      ))}
    </GridCell>
    <GridCell span="3" />
  </Grid>
)

export const router = {
  route: config => {
    path = (config && config.route) ? config.route : path
    return { path }
  },
}
