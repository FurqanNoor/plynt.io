import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "For individuals just getting started",
    features: [
      { name: "5 habits", available: true },
      { name: "Basic analytics", available: true },
      { name: "Community access", available: true },
      { name: "Daily reminders", available: true },
      { name: "Unlimited habits", available: false },
      { name: "Advanced analytics", available: false },
      { name: "Priority support", available: false },
    ],
  },
  {
    name: "Pro",
    price: "$9.99",
    description: "For dedicated habit builders",
    features: [
      { name: "Unlimited habits", available: true },
      { name: "Advanced analytics", available: true },
      { name: "Priority support", available: true },
      { name: "Custom challenges", available: true },
      { name: "Habit streaks", available: true },
      { name: "Data export", available: true },
      { name: "API access", available: true },
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl" />
      </div>
      <div className="pt-20 pb-10 text-white flex flex-col items-center justify-center px-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-purple-400">
            Pricing Plans
          </h1>
          <p className="text-gray-400 mt-4">
            Find a plan that works for you and start building better habits
            today!
          </p>
        </header>
        <main className="w-full max-w-5xl flex justify-center">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className="bg-black/50 border border-purple-700/40 shadow-lg rounded-lg"
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-300 font-bold text-center">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-white text-4xl font-bold text-center mt-2">
                    {plan.price}
                    <span className="text-lg font-normal text-gray-400">
                      /month
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-400 text-center mb-4">
                    {plan.description}
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature.name}
                        className="flex items-center text-gray-200"
                      >
                        {feature.available ? (
                          <svg
                            className="w-5 h-5 mr-2 text-purple-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5 mr-2 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        )}
                        <span
                          className={feature.available ? "" : "text-gray-500"}
                        >
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-6">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 transition-all py-2 text-lg font-semibold">
                    Choose {plan.name} Plan
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
