import React from 'react'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../actions/cartActions'
import { createStructuredSelector } from 'reselect'

import { selectCartItemsCount } from '../../selectors/cartSelector'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './CartIcon.scss'

const CartIcon = ({ toggleCartView, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartView}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})
const mapDispatchToProps = dispatch => ({
  toggleCartView: () => dispatch(toggleCartHidden())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
