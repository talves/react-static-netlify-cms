import React from 'react'
import { withRouteData, Link } from 'react-static'
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
import DocImage from './DocImage'
//

let path = '/document' // default and must be overwritten, see router.route.slug here
let returnUri = '/docs/' // default

export default withRouteData(({ item }) => (
  <GridCell span="12">
    <Card>
      <DocImage src={item.data.image} />
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
    path = (item.data.slug) ? item.data.slug : `${path}-${Math.random()}`
    returnUri = (config && config.parentroute) ? `${config.parentroute}/` : returnUri

    return {
      path,
      getData: () => ({
        item,
      }),
    }
  },
}
