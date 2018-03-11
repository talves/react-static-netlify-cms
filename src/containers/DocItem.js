import React from 'react'
import { withRouteData, Link } from 'react-static'
import { GridCell } from 'rmwc/Grid'
import {
  Card,
  CardPrimaryAction,
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
      <CardPrimaryAction>
        <DocImage src={item.data.image} />
      </CardPrimaryAction>
      <Typography style={{ textAlign: 'center' }} use="display2">{item.data.title}</Typography>
      <Typography style={{ padding: '30px' }}>
        <div dangerouslySetInnerHTML={{ __html: item.contents }} />
      </Typography>
      <CardActions>
        <Link tag="a" className="mdc-button mdc-button--stroked mdc-theme--primary mdc-ripple-upgraded" to={returnUri}>{'<'} Back</Link>
      </CardActions>
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
