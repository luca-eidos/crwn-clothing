import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios';

export default function StripeCheckoutButton({ price }) {
    const priceForStripe = price*100;
    const publishableKey = "pk_test_51IknTvKoEJnCAQM1CvvyYqltWQmjeLTgOV2Gb4I7CjkmwiAiqpWPO0VwlEsDepCBTofEhI7UAB2msh0mYiBsFI9x00aucEItm2"

    const onToken = token => {
        axios({
            url: "payment",
            method: "post",
            data: { 
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert("Payment successful")
        }).catch(error => {
            console.log("Payment error: ", JSON.parse(error));
            alert("There was an issue with your payment. Please use the provided credit card");
        })
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}
