import React from 'react'
import { connect } from 'react-redux'
import CollectionItem from '../../components/collection-item/CollectionItem'
import { selectCollection } from '../../selectors/shopSelector'

import './CollectionPage.scss'

const CollectionPage = ({ collection }) => {
  const { title, items } = collection

  const renderCollection = () => items.map(item => <CollectionItem key={item.id} item={item} />)

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">{renderCollection()}</div>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  console.log(state, ownProps)
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  }
}
export default connect(mapStateToProps)(CollectionPage)
