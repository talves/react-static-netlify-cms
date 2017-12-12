import React, { Component } from 'react'

export default class CustomHTML extends Component {
  render () {
    const { Html, Head, Body, children } = this.props

    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <script src="https://identity-js.netlify.com/v1/netlify-identity-widget.js" />
        </Head>
        <Body>
          {children}
        </Body>
      </Html>
    )
  }
}
