import React, { useEffect, lazy, Suspense } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { requestCollections } from '../../actions/shopActions'
import Spinner from '../../components/spinner/Spinner'

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/CollectionsOverviewContainer')
)
const CollectionPageContainer = lazy(() => import('../collection-page/CollectionPageContainer'))

const ShopPage = ({ match, getCollections }) => {
  useEffect(() => {
    getCollections()
  }, [getCollections])

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
      </Suspense>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  getCollections: () => dispatch(requestCollections())
})
export default connect(null, mapDispatchToProps)(ShopPage)
