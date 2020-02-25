import React from 'react'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../actions/cartActions'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './CartIcon.scss'

const CartIcon = ({ toggleCartView }) => {
  return (
    <div className="cart-icon" onClick={toggleCartView}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  toggleCartView: () => dispatch(toggleCartHidden())
})
export default connect(null, mapDispatchToProps)(CartIcon)
