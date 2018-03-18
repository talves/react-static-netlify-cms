import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'
import {
  Card,
  CardPrimaryAction,
} from 'rmwc/Card'
import { Typography } from 'rmwc/Typography'

import DocImage from '../../DocImage'

export default class DocumentPreview extends React.Component {
  render () {
    const { entry } = this.props
    const image = entry.getIn(['data', 'image'])
    const title = entry.getIn(['data', 'title'])
    const body = this.props.widgetFor('body')
    return (
      <Grid>
        <GridCell span="12">
          <Card>
            <CardPrimaryAction>
              <DocImage src={image} />
            </CardPrimaryAction>
            <Typography style={{ textAlign: 'center' }} use="display2">{title}</Typography>
            <Typography style={{ padding: '30px' }}>
              { body }
            </Typography>
          </Card>
        </GridCell>
      </Grid>
    )
  }
}