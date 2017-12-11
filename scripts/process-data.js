#!/usr/bin/env node
'use strict'

const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const remark = require('remark')
const html = require('remark-html')

const rootPath = path.resolve(__dirname, '../')
const dataPath = path.resolve(rootPath, './src/data')

/* Documentation Data */
const remarkParser = remark().use(html)
const dirPath = path.resolve(rootPath, './documentation')
const documentation = fs.readdirSync(dirPath)
  .filter(file => fs.statSync(path.resolve(dirPath, file)).isFile())
  .map(file => {
    const { data, content } = matter(fs.readFileSync(path.resolve(dirPath, file), 'utf8'))
    console.log(file)
    data.slug = (data.slug) ? data.slug : data.slug = file.split('.').slice(0, file.split('.').length - 1).join('.')
    const { contents } = remarkParser.processSync(content)
    return { data, contents }
  })

const docsFile = path.join(dataPath, './docs.json')

fs.writeFileSync(docsFile, JSON.stringify(documentation), { encoding: 'utf8', flag: 'w' });
/* * * * * * * * * * */
