import { createSelector } from 'reselect'

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
}

const selectShop = state => state.collections

export const selectCollections = createSelector([selectShop], collections => collections.shopItems)

export const selectCollection = collectionUrlParam =>
  createSelector([selectCollections], collections =>
    collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
  )
