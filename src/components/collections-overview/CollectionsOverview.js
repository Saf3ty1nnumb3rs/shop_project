import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollections } from '../../selectors/shopSelector'
import CollectionPreview from '../../components/collection-preview/CollectionPreview'

import './CollectionsOverview.scss'

const CollectionsOverview = ({ collections }) => {
  const renderCollections = () => {
    return collections.map(({ id, ...collectionProps }) => <CollectionPreview {...collectionProps} key={id} />)
  }

  return <div className="collections-overview">{renderCollections()}</div>
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)
