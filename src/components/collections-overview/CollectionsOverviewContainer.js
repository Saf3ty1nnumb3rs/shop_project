import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import WithSpinner from '../../components/with-spinner/WithSpinner'
import { selectIsCollectionFetching } from '../../selectors/shopSelector'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionsOverview)

export default CollectionsOverviewContainer
