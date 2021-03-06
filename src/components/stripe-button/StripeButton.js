import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_jswO2TdQ9iMqYRz3VSk1CLxo00IrTH3oBB'
  const onToken = token => {
    console.log(token)
    alert('Payment Successful')
  }
  return (
    <StripeCheckout
      label="Pay Now"
      name="MJSTC Threads"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeButton
