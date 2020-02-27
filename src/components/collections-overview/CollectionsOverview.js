import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../selectors/shopSelector'
import CollectionPreview from '../../components/collection-preview/CollectionPreview'
import { CollectionsOverviewContainer } from './CollectionsOverview.styles'

const CollectionsOverview = ({ collections }) => {
  const renderCollections = () => {
    return collections.map(({ id, ...collectionProps }) => <CollectionPreview {...collectionProps} key={id} />)
  }

  return <CollectionsOverviewContainer>{renderCollections()}</CollectionsOverviewContainer>
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
