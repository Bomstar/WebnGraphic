import { Check } from "lucide-react";

export const PricingPlans = [
  {
    title: "Starter",
    discountPrice: "$45",
    regularPrice: "68",
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

// Web Design Services

export const webServices = [
  {
    icon: "/icons/responsive-design.png",
    title: "Responsive Design",
    description:
      "We create fully responsive websites that work seamlessly on desktops, tablets, and mobile devices. Our designs adapt to different screen sizes, ensuring a consistent user experience and better engagement. A responsive site improves accessibility and helps retain visitors longer.",
  },
  {
    icon: "/icons/ui-ux.png",
    title: "UI/UX Optimization",
    description:
      "Our UI/UX experts design intuitive and visually appealing interfaces that enhance user interaction. We focus on usability, aesthetics, and functionality to create an immersive experience that aligns with your brand identity and business goals.",
  },
  {
    icon: "/icons/seo.png",
    title: "SEO-Friendly Development",
    description:
      "Our web design services include SEO optimization to improve search engine rankings. We implement best practices such as fast loading speeds, structured content, and mobile-friendliness, helping your site attract more organic traffic and visibility.",
  },
  {
    icon: "/icons/ecommerce.png",
    title: "E-Commerce Solutions",
    description:
      "We specialize in crafting high-performance e-commerce websites with seamless navigation and engaging product displays. Our e-commerce solutions ensure smooth checkout processes and secure payment gateways to enhance customer satisfaction and sales.",
  },
  {
    icon: "/icons/speed-optimization.png",
    title: "Performance Optimization",
    description:
      "Ensuring fast-loading websites with optimized assets, caching strategies, and minimal downtime for an exceptional user experience.",
  },
  {
    icon: "/icons/custom-dev.png",
    title: "Custom Web Development",
    description:
      "We build custom websites tailored to your unique needs. Whether you need a portfolio, business site, or web application, we develop solutions with scalability, flexibility, and performance in mind, ensuring long-term success.",
  },
];

export const logoServices = [
  {
    img: "/icons/custom-logo.png",
    title: "Custom Logo Design",
    description:
      "Get a unique and creative logo tailored specifically for your brand. Our expert designers ensure that your logo represents your brand identity effectively and stands out from the competition.",
  },
  {
    img: "/icons/branding.png",
    title: "Brand Identity Design",
    description:
      "We create complete brand identity packages, including logos, color schemes, and typography, ensuring a cohesive and professional look for your business across all platforms.",
  },
  {
    img: "/icons/modern-logo.png",
    title: "Modern & Minimalist Logos",
    description:
      "If you prefer a sleek and contemporary design, our minimalist logos convey your message effectively while maintaining simplicity and elegance in their visual appeal.",
  },
  {
    img: "/icons/mascot.png",
    title: "Mascot & Illustration Logos",
    description:
      "Bring your brand to life with custom mascot and illustration logos that add personality and uniqueness, making your business instantly recognizable.",
  },
  {
    img: "/icons/vector.png",
    title: "Vector & Scalable Logos",
    description:
      "Our high-quality vector logos are designed to be scalable without losing clarity, ensuring your brand looks great on all mediums, from business cards to billboards.",
  },
  {
    img: "/icons/3d-logo.png",
    title: "3D & Animated Logos",
    description:
      "Enhance your brand presence with dynamic 3D and animated logos that grab attention and create a strong visual impact for digital and video content.",
  },
];
