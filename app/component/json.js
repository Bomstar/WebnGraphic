import { Check } from "lucide-react";

export const PricingPlans = [
  {
    title: "Starter",
    discountPrice: "$45",
    regularPrice: "68",
    deuTime: "Per mounth",
    check: (
      <Check
        size={32}
        className="!w-[18px] p-1 group-hover:bg-[#00b1dc] group-hover:text-white text-[#01D2A1] !h-[18px] mt-1 rounded-full bg-[#30A8201A]"
      />
    ),
    points: [
      "Basic Web Design (Up to 3 pages)",
      "Simple Logo Design (2 concepts, 2 revisions)",
      "Basic Graphic Design (Social media banner or business card)",
      "Mobile-friendly design",
      "Standard delivery (5-7 days)",
    ],
  },
  {
    title: "Professional",
    discountPrice: "$99",
    regularPrice: "139",
    deuTime: "Per mounth",
    popularTag: true,
    check: (
      <Check
        size={32}
        className="!w-[18px] p-1 group-hover:bg-[#00b1dc] group-hover:text-white text-[#01D2A1] !h-[18px] mt-1 rounded-full bg-[#30A8201A]"
      />
    ),
    points: [
      "Advanced Web Design (Up to 6 pages)",
      "Custom Logo Design (3 concepts, 4 revisions)",
      "Professional Graphic Design (Brochures, banners, or social media kit)",
      "Responsive & SEO-friendly website",
      "Premium stock images",
      "Faster delivery (3-5 days)",
    ],
  },
  {
    title: "Exclusive",
    discountPrice: "$299",
    regularPrice: "399",
    deuTime: "Per mounth",
    check: (
      <Check
        size={32}
        className="!w-[18px] p-1 group-hover:bg-[#00b1dc] group-hover:text-white text-[#01D2A1] !h-[18px] mt-1 rounded-full bg-[#30A8201A]"
      />
    ),
    points: [
      "Premium Web Design (Up to 10 pages)",
      "High-End Logo Design (5 concepts, unlimited revisions)",
      "Exclusive Graphic Design (Full branding kit: social media, business cards, flyers, brochures)",
      "E-commerce Integration (Shop setup, payment gateway)",
      "Custom animations & interactive UI",
      "VIP priority support",
      "Super-fast delivery (2-3 days)",
    ],
  },
];
