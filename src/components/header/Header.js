import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { ReactComponent as Logo } from '../../assets/crown.svg'

import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
import { requestSignOut } from '../../actions/userActions'
import { selectCartHidden } from '../../selectors/cartSelector'
import { selectCurrentUser } from '../../selectors/userSelector'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './Header.styles'

const Header = ({ currentUser, cartHidden, requestSignOut }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={requestSignOut}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {!cartHidden && <CartDropdown />}
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden
})
const mapDispatchToProps = dispatch => ({
  requestSignOut: () => dispatch(requestSignOut())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)
