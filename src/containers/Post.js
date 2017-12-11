import React from 'react'
import { getRouteProps, Link } from 'react-static'
import { GridCell } from 'rmwc/Grid'
import {
  Card,
  CardSupportingText,
  CardPrimary,
  CardTitle,
  CardSubtitle,
  CardActions,
} from 'rmwc/Card'
import { Typography } from 'rmwc/Typography'
//

let path = '/post/00'
let returnUri = '/blog/'

export default getRouteProps(({ post }) => (
  <GridCell span="12">
    <Card>
      <CardPrimary>
        <CardActions>
          <Link tag="a" className="mdc-button mdc-button--stroked mdc-theme--primary mdc-ripple-upgraded" to={returnUri}>{'<'} Back</Link>
        </CardActions>
        <CardTitle large><Typography style={{ textAlign: 'center' }} use="display2">{post.title}</Typography></CardTitle>
        <CardSubtitle />
      </CardPrimary>
      <CardSupportingText>
        <p>{post.body}</p>
      </CardSupportingText>
    </Card>
  </GridCell>
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
