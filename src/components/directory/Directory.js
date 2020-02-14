import React from 'react'
import MenuItem from '../menu-item/MenuItem'

import directories from '../../utils/directories'

import './Directory.scss'

const renderItems = items => {
  return items.map(({ title, imageUrl, id, size }) => (
    <MenuItem key={title} title={title} image={imageUrl} id={id} size={size} />
  ))
}
const Directory = () => {
  return <div className="directory-menu">{renderItems(directories)}</div>
}

export default Directory
