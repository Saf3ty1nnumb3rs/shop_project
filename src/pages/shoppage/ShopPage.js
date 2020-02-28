import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import CollectionPage from '../collection-page/CollectionPage'
import WithSpinner from '../../components/with-spinner/WithSpinner'
import { updateCollections } from '../../actions/shopActions'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({ match, updateCollections }) => {
  const [loading, setLoading] = useState(true)
  const collectionRef = useRef()
  let unsubscribeFromSnapshot
  useEffect(() => {
    collectionRef.current = firestore.collection('collections')
    collectionRef.current.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
      setLoading(false)
    })
  })
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={props => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />}
      />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        render={props => <CollectionPageWithSpinner isLoading={loading} {...props} />}
      />
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})
export default connect(null, mapDispatchToProps)(ShopPage)
