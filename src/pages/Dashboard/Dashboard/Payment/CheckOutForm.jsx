import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";


const CheckOutForm = () => {
 const elements = useElements();
 const stripe = useStripe();
 const handleSubmit = async (event) => {
  event.preventDefault();
  if (!stripe || !elements) {
 return 
}
  const card = elements.getElement(CardElement);
  if (card === null) {
   return 
  }

  const { error, paymentMethod } = await stripe.createPaymentMethod({
   type: 'card',
   card
  })
  if (error) {
   console.log('error', error);
  } else {
   console.log('paymentMethod', paymentMethod);
  }
 }
 
 return (
   <div className="max-w-screen-sm mx-auto">
     <form onSubmit={handleSubmit}>
       <CardElement
         options={{
           style: {
             base: {
               fontSize: '16px',
               color: '#424770',
               '::placeholder': {
                 color: '#aab7c4',
               },
             },
             invalid: {
               color: '#9e2146',
             },
           },
         }}
    />
    <button className="btn btn-primary" type="submit" disabled={!stripe}>
     Pay
    </button>
     </form>
   </div>
 );
};

export default CheckOutForm;