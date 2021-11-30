import { loadStripe } from "@stripe/stripe-js";

export async function getStripeJs() {
  //@ts-ignore
  const stripeJS = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

  return stripeJS;
}
