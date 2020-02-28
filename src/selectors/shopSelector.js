import { createSelector } from 'reselect'

const selectShop = state => state.collections

export const selectCollections = createSelector([selectShop], collections =>
  collections ? collections.collections : null
)

export const selectCollectionsForPreview = createSelector([selectCollections], collections =>
  collections ? Object.keys(collections).map(key => collections[key]) : []
)
export const selectCollection = collectionUrlParam =>
  createSelector([selectCollections], collections => (collections ? collections[collectionUrlParam] : null))

export const selectIsCollectionFetching = createSelector([selectShop], collections => collections.isFetching)
export const selectIsCollectionLoaded = createSelector([selectShop], collections => !!collections.collections)
