import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../actions/cartActions'
import { CollectionItemContainer, CustomButtonStyled, CollectionFooter } from './CollectionItem.styles'

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item
  return (
    <CollectionItemContainer>
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <CollectionFooter>
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </CollectionFooter>
      <CustomButtonStyled onClick={() => addItem(item)}>Add To Cart</CustomButtonStyled>
    </CollectionItemContainer>
  )
}
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem)
