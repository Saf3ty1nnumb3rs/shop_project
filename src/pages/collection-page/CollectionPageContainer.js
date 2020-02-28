import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import CollectionPage from '../collection-page/CollectionPage'
import WithSpinner from '../../components/with-spinner/WithSpinner'
import { selectIsCollectionLoaded } from '../../selectors/shopSelector'

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionLoaded(state)
})
const CollectionPageContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionPage)

export default CollectionPageContainer
