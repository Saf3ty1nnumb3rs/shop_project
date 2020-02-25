import React from 'react'
import { connect } from 'react-redux'

import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'

import './CartDropdown.scss'
const CartDropdown = ({ cartItems }) => {
  const renderCartItems = () => {
    return cartItems.map(item => <CartItem key={item.id} item={item} />)
  }
  return (
    <div className="cart-dropdown">
      <div className="cart-items">{renderCartItems()}</div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}
const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
})
export default connect(mapStateToProps)(CartDropdown)
