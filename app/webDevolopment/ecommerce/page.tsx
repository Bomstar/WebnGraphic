"use client"; // Mark this as a client component

import {
  ShoppingCart,
  Check,
  Code,
  Smartphone,
  CreditCard,
  Search,
  Shield,
  Settings,
  Database,
  ArrowRightCircle,
} from "lucide-react";
import ServicePage from "@/app/webDevolopment/commponent/IndServicePage";
import FeaturesSection from "../commponent/features";

const services = [
  {
    id: 1,
    icon: <ShoppingCart className="h-6 w-6 text-[#0093dc]" />,
    title: "Custom E-commerce",
    description:
      "Fully customized e-commerce platforms tailored to your business needs.",
  },
  {
    id: 2,
    icon: <Code className="h-6 w-6 text-[#0093dc]" />,
    title: "Shopify Development",
    description:
      "Expert Shopify store setup, customization, and theme development.",
  },
  {
    id: 3,
    icon: <Check className="h-6 w-6 text-[#0093dc]" />,
    title: "WooCommerce Development",
    description: "Powerful WooCommerce solutions integrated with WordPress.",
  },
  {
    id: 4,
    icon: <Smartphone className="h-6 w-6 text-[#0093dc]" />,
    title: "Mobile Commerce",
    description:
      "Build mobile-optimized e-commerce websites or progressive web apps (PWAs).",
  },
  {
    id: 5,
    icon: <CreditCard className="h-6 w-6 text-[#0093dc]" />,
    title: "Payment Integration",
    description:
      "Secure payment gateway integration (Stripe, PayPal, Razorpay, etc.).",
  },
  {
    id: 6,
    icon: <Search className="h-6 w-6 text-[#0093dc]" />,
    title: "E-commerce SEO",
    description:
      "Optimize your e-commerce site for search engines to drive organic traffic.",
  },
  {
    id: 7,
    icon: <Shield className="h-6 w-6 text-[#0093dc]" />,
    title: "Security & Compliance",
    description:
      "Ensure your e-commerce platform is secure and compliant with industry standards.",
  },
  {
    id: 8,
    icon: <Settings className="h-6 w-6 text-[#0093dc]" />,
    title: "Maintenance & Support",
    description:
      "Ongoing maintenance, updates, and technical support for your e-commerce site.",
  },
  {
    id: 9,
    icon: <Database className="h-6 w-6 text-[#0093dc]" />,
    title: "Data Migration",
    description:
      "Seamlessly migrate your existing e-commerce data to a new platform.",
  },
  {
    id: 10,
    icon: <ArrowRightCircle className="h-6 w-6 text-[#0093dc]" />,
    title: "Headless E-commerce",
    description:
      "Build flexible and high-performance headless e-commerce solutions.",
  },
];

const pricingPlans = [
  {
    id: 1,
    title: "Basic",
    description: "Perfect for small businesses and startups.",
    price: "$999",
    features: ["Custom Design", "Up to 50 Products", "Basic SEO"],
    buttonText: "Get Started",
    buttonLink: "/contact",
    popular: false,
  },
  {
    id: 2,
    title: "Standard",
    description: "Ideal for growing businesses and teams.",
    price: "$1999",
    features: ["Custom Design", "Up to 200 Products", "Advanced SEO"],
    buttonText: "Get Started",
    buttonLink: "/contact",
    popular: true,
  },
  {
    id: 3,
    title: "Premium",
    description: "Best for large-scale e-commerce businesses.",
    price: "$4999",
    features: [
      "Custom Design",
      "Unlimited Products",
      "Advanced SEO + Marketing",
    ],
    buttonText: "Get Started",
    buttonLink: "/contact",
    popular: false,
  },
];

const headerData = {
  title: "Professional E-commerce Development Services",
  discription:
    "We build high-performance, scalable, and user-friendly e-commerce websites tailored to your business needs",
  boxTitle: "Our E-commerce Development Services",
};

export default function EcommerceServicePage() {
  return (
    <main>
      <ServicePage
        pricingPlans={pricingPlans}
        services={services}
        headerData={headerData}
      ></ServicePage>
      <FeaturesSection></FeaturesSection>
    </main>
  );
}
