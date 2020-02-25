import React from 'react'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../actions/cartActions'

import { withRouter } from 'react-router-dom'

import { createStructuredSelector } from 'reselect'

import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'
import { selectCartItems } from '../../selectors/cartSelector'

import './CartDropdown.scss'
const CartDropdown = ({ cartItems, history, dispatch }) => {
  const renderCartItems = () => {
    return cartItems.map(item => <CartItem key={item.id} item={item} />)
  }
  return (
    <div className="cart-dropdown">
      {cartItems.length ? (
        <div className="cart-items">{renderCartItems()}</div>
      ) : (
        <span className="empty-message">Your Cart Is Empty</span>
      )}
      <CustomButton
        onClick={() => {
          dispatch(toggleCartHidden())
          history.push('/checkout')
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown))
