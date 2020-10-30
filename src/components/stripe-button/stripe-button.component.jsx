import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const live_publishableKey = 'pk_live_51HcjX3HhMENGjXj7Ei8ZrXfhwN2hqZcyIKvAJ57rXDt3ZbqSDixjaiIl78z2LG3MLsa1eGbFdQuUZ3rPr7kpLWPs00155qTftX';
    const live_secretKey = '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';
    const publishableKey = 'pk_test_51HcjX3HhMENGjXj7EApMyOrtqXQoQaKCPFQTFFmpOzaFqoSP6FAAUwfBMjU1SfSgd7EhEmH1dMAyabU19a9DAQbA00Gj54Hz8w';
    const secretKey = 'sk_test_51HcjX3HhMENGjXj73ZwFIdnZMfsAaDE5lQTlUeX0R2TTJfosfGJ7US8qZRCb4S3ydOpFS6UwI4bgfOaQ2vSD6Srd00Ej01hN5B';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddressimage='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amout={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;