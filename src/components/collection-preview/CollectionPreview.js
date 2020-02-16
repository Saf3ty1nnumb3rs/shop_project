import React from 'react'
import CollectionItem from '../collection-item/CollectionItem'
import './CollectionPreview.scss'

const CollectionPreview = ({ title, items }) => {
  const renderCollection = () => {
    return items
      .filter((item, i) => i < 4)
      .map(({ id, ...otherProps }) => {
        return <CollectionItem key={id} {...otherProps} />
      })
  }
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">{items && renderCollection()}</div>
    </div>
  )
}

export default CollectionPreview
