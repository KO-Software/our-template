"use client";

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

const stripePromise = loadStripe(process.env.NEXT__STRIPE_PUBLISHABLE_KEY!);

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: string;
  description: string;
  buttonText: string;
  benefitList: string[];
  stripeProductId: string;
}

const plans: PlanProps[] = [
  {
    title: "starter",
    popular: PopularPlan.NO,
    price: "free",
    description: "try out our service at no cost",
    buttonText: "start now",
    benefitList: [
      "1 project",
      "5 team members",
      "2 gb storage",
      "community support",
      "7-day access",
    ],
    stripeProductId: "price_free_trial",
  },
  {
    title: "growth",
    popular: PopularPlan.YES,
    price: "$49",
    description: "scale up with more resources",
    buttonText: "upgrade",
    benefitList: [
      "10 projects",
      "20 team members",
      "20 gb storage",
      "priority support",
      "14-day trial",
    ],
    stripeProductId: "price_growth",
  },
  {
    title: "enterprise",
    popular: PopularPlan.NO,
    price: "custom",
    description: "tailored solutions for large teams",
    buttonText: "get in touch",
    benefitList: [
      "unlimited projects",
      "unlimited team members",
      "unlimited storage",
      "dedicated support",
      "custom setup",
    ],
    stripeProductId: "price_enterprise",
  },
];

export const PricingSection = () => {
  const [loading, setLoading] = useState(false);

  const handleSubscription = async (priceId: string) => {
    setLoading(true);
    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to initialize.');

      const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: priceId, quantity: 1 }],
        mode: 'subscription',
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/canceled`,
      });

      if (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container py-24 sm:py-32 bg-background text-foreground">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider lowercase">
        pricing
      </h2>
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 lowercase bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        select your plan
      </h3>
      <p className="text-xl text-muted-foreground text-center mb-8 lowercase">
        options for teams of all sizes
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList, stripeProductId }) => (
            <Card
              key={title}
              className={`modern-component ${
                popular === PopularPlan?.YES
                  ? "border-primary shadow-lg"
                  : "border-muted"
              }`}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold lowercase">{title}</CardTitle>
                <CardDescription className="text-lg lowercase">
                  {description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold mb-4 lowercase">{price}</p>
                <ul className="space-y-2">
                  {benefitList.map((benefit) => (
                    <li key={benefit} className="flex items-center text-sm lowercase">
                      <Check className="text-primary mr-2 size-4" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant={popular === PopularPlan?.YES ? "default" : "secondary"}
                  className="w-full text-lg lowercase modern-component"
                  onClick={() => handleSubscription(stripeProductId)}
                  disabled={loading}
                >
                  {loading ? 'Processing...' : buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
