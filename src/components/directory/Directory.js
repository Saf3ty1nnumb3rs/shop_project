import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import MenuItem from '../menu-item/MenuItem'

import { selectDirectorySections } from '../../selectors/directorySelector'

import './Directory.scss'

const renderItems = items => {
  return items.map(({ id, ...sectionProps }) => <MenuItem key={id} {...sectionProps} />)
}
const Directory = ({ sections }) => {
  return <div className="directory-menu">{renderItems(sections)}</div>
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory)
