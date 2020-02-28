import React from 'react'
import { Link } from 'react-router-dom'
import CollectionItem from '../collection-item/CollectionItem'
import './CollectionPreview.scss'

const CollectionPreview = ({ title, items }) => {
  const renderCollection = () => {
    return items
      .filter((item, i) => i < 4)
      .map(item => {
        return <CollectionItem key={item.id} item={item} />
      })
  }
  return (
    <div className="collection-preview">
      <Link to={`/shop/${title.toLowerCase()}`}>
        <h1 className="title">{title.toUpperCase()}</h1>
      </Link>
      <div className="preview">{items && renderCollection()}</div>
    </div>
  )
}

export default CollectionPreview
