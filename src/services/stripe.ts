import Stripe from "stripe";

//@ts-ignore
export const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  apiVersion: "2020-08-27",
  appInfo: {
    name: "ig.news",
    version: "0.1.0",
  },
});
