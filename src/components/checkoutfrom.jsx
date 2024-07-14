import React, { useEffect, useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import "./CheckoutForm.css";

const CheckoutForm = ({ cartList }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState(null);

  useEffect(() => {
    const fetchPaymentIntent = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/create-payment-intent/', { cart_items: cartList });
        setClientSecret(response.data.client_secret);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchPaymentIntent();
  }, [cartList]);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!stripe || !elements || !clientSecret) {
      return;
    }
  
    try {
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: 'Jenny Rosen', // Replace with actual user data
          },
        },
      });
  
      if (result.error) {
        console.error('Payment failed:', result.error.message);
        setPaymentError(result.error.message);
        setPaymentSuccess(false);
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          console.log('Payment succeeded:', result.paymentIntent);
          setPaymentError(null);
          setPaymentSuccess(true);
          setPaymentDetails(result.paymentIntent);
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setPaymentError('An error occurred while processing your payment.');
      setPaymentSuccess(false);
    }
  };

  return (
    <div className="checkout-container">
      {!paymentSuccess && (
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button type="submit" disabled={!stripe || !clientSecret}>
            Pay
          </button>
          {paymentError && <p className="error-message">{paymentError}</p>}
        </form>
      )}
      {paymentSuccess && (
        <div className="success-message">
          <p>Payment succeeded!</p>
          <p>Payment ID: {paymentDetails.id}</p>
          <p>Amount: ${(paymentDetails.amount / 100).toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
