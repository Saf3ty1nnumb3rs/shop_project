import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import CollectionsOverviewContainer from '../../components/collections-overview/CollectionsOverviewContainer'
import CollectionPageContainer from '../collection-page/CollectionPageContainer'
import { requestCollections } from '../../actions/shopActions'

const ShopPage = ({ match, getCollections }) => {
  useEffect(() => {
    getCollections()
  }, [getCollections])

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
      <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  getCollections: () => dispatch(requestCollections())
})
export default connect(null, mapDispatchToProps)(ShopPage)
