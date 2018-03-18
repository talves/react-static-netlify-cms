import React from 'react'
// import { init, reset, registry } from 'netlify-cms/dist/cms'
import 'netlify-cms/dist/cms.css'
//
import DocumentPreview from './components/DocumentPreview'
import config from './config.json'

let path = '/admin'

export default class Admin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cms: require('netlify-cms/dist/cms')
    }
    console.log('CMS stored in state of component Admin')
  }
  componentDidMount () {
    const { cms } = this.state
    console.log('CMS', cms)
    cms.init({ config })
    cms.registry.registerPreviewStyle('/admin/site.css')
    cms.registry.registerPreviewTemplate('docs', DocumentPreview)
    cms.registry.registerEditorComponent({
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
  componentWillUnmount () {
    const { cms } = this.state
    console.log('Admin componentWillUnmount')
    cms.reset()
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
