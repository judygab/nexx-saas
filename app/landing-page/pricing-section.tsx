import PricingCard from "./pricing-card";

export type PricingPlan = {
  title: string;
  price: number;
  description: string;
  isPopular: boolean;
  features: string[];
  url: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    title: "Free",
    price: 0,
    description: "For small teams just getting started",
    isPopular: false,
    url: "/dashboard",
    features: [
      "3 projects",
      "Unlimited users",
      "2GB storage",
      "Priority support",
    ],
  },
  {
    title: "Monthly",
    price: 6.99,
    description: "For growing teams",
    isPopular: true,
    url: "/payments/subscribe?plan=monthly",
    features: [
      "Unlimited projects",
      "Unlimited users",
      "5GB storage",
      "Priority support",
    ],
  },
  {
    title: "Yearly",
    price: 39.99,
    description: "Upgrade to save more!",
    isPopular: false,
    url: "/payments/subscribe?plan=yearly",
    features: [
      "Unlimited projects",
      "Unlimited users",
      "50GB storage",
      "24/7 support",
    ],
  },
]


const PricingSection = () => {
  return (
    <div className="text-center">
      <h1 className="capitalize text-3xl">Pricing</h1>
      <h2 className="font-extrabold text-3xl mb-8 pt-3">
        Flexible Pricing to Fit Your Needs
      </h2>
      <div className="mt-10 grid items-center grid-cols-1 gap-3 md:grid-cols-3 max-w-screen-xl">
        {
          pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))
        }
      </div>
    </div>
  )
}

export default PricingSection;