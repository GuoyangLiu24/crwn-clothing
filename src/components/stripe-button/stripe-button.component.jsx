import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const PriceForStripe = price * 100;
  const publishableKey = 'pk_test_51GuvG4JQgOxarmdyePgUpGXyzmd63l1pwALaE9dG2nou80SylnLvo2OOCZXLkag1qHThgU5aFgDclczl0T8NvY5500ouDJ4yDm';

const onToken = token => {
  console.log(token);
  alert('Payment Successfule');
}

  return(
    <StripeCheckout 
    label='Pay Now'
    name='CRWN Clothing Ltd.'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    amount={PriceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;