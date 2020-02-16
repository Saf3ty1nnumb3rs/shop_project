import React, { useState, useEffect } from 'react'
import CollectionPreview from '../../components/collection-preview/CollectionPreview'
import collections from '../../utils/shopItems'

const ShopPage = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(collections)
  }, [])
  const renderCollections = () => {
    return items.map(({ id, ...collectionProps }) => <CollectionPreview {...collectionProps} key={id} />)
  }
  return (
    <div className="shop-page">
      <div>Shop</div>
      {renderCollections()}
    </div>
  )
}

export default ShopPage
