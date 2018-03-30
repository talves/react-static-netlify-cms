import React from 'react'
import './setup.js'
import 'netlify-cms/dist/cms.css'
//
import DocumentPreview from './components/DocumentPreview'
import config from './config.json'

let path = '/admin'

export default class Admin extends React.Component {
  constructor(props) {
    super(props)
    const CMSExport = require('netlify-cms')
    const CMS = CMSExport.default
    CMS.init = CMSExport.init
    console.log('CMS stored in state of component Admin', CMS)
    this.state = {
      CMS,
    }
    CMS.registerPreviewStyle('/admin/site.css')
    CMS.registerPreviewTemplate('docs', DocumentPreview)
    CMS.registerEditorComponent({
      id: 'youtube',
      label: 'Youtube',
      fields: [{ name: 'id', label: 'Youtube Video ID' }],
      pattern: /^{{<\s?youtube (\S+)\s?>}}/,
      fromBlock: match => ({
        id: match[1],
      }),
      toBlock: obj => `{{< youtube ${obj.id} >}}`,
      toPreview: obj => `<img src="http://img.youtube.com/vi/${obj.id}/maxresdefault.jpg" alt="Youtube Video"/>`,
    })
  }
  componentDidMount () {
    const { CMS } = this.state
    CMS.init({ config })
    console.log('componentDidMount')
  }
  render () {
    return (
      <div id="nc-root" />
    )
  }
}

export const router = {
  route: config => {
    path = (config && config.route) ? config.route : path
    return { path }
  },
}
