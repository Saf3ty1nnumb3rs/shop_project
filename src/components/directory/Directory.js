import React from 'react'
import MenuItem from '../menu-item/MenuItem'

import directories from '../../utils/directories'

import './Directory.scss'

const renderItems = items => {
  return items.map(({ id, ...sectionProps }) => <MenuItem key={id} {...sectionProps} />)
}
const Directory = () => {
  return <div className="directory-menu">{renderItems(directories)}</div>
}

export default Directory
