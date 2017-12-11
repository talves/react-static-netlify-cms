import React from 'react'
import { getRouteProps, Link } from 'react-static'
import { GridCell } from 'rmwc/Grid'
import { Icon } from 'rmwc/Icon'
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

let path = '/document' // default and must be overwritten, see router.route.path here
let returnUri = '/docs/' // default

export default getRouteProps(({ item }) => (
  <GridCell span="12">
    <Card>
      <CardPrimary>
        <CardActions>
          <Link tag="a" className="mdc-button mdc-button--stroked mdc-theme--primary mdc-ripple-upgraded" to={returnUri}>{'<'} Back</Link>
        </CardActions>
        <CardTitle large><Typography style={{ textAlign: 'center' }} use="display2">{item.data.title}</Typography></CardTitle>
        <CardSubtitle />
      </CardPrimary>
      <CardSupportingText>
        <div dangerouslySetInnerHTML={{ __html: item.contents }} />
      </CardSupportingText>
    </Card>
  </GridCell>
))

export const router = {
  route: (config, item) => {
    path = (item.data.path) ? item.data.path : `${path}-${Math.random()}`
    returnUri = (config && config.parentroute) ? `${config.parentroute}/` : returnUri

    return {
      path,
      getProps: () => ({
        item,
      }),
    }
  },
}
