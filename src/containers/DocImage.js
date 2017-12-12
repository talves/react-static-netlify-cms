import React from 'react'
import {
  CardMedia,
} from 'rmwc/Card'

export default ({ src }) => {
  let returnContainer = ('')
  if (src) {
    returnContainer = (
      <CardMedia style={{
        backgroundImage: `url(${src})`,
        height: '20rem',
      }}
      />
    )
  }
  return returnContainer
}
