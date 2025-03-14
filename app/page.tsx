"use client";

import HowItsWorks from "./component/HowItsWorks";
import ServiceSec from "@/app/component/ServiceSec";
import PricingPlan from "./component/PricingPlan";
import WebDesignServices from "./component/WebDesignServices";
import LogoDesignServices from "./component/LogoDesignServices";
import HeroTheme from "./component/Hero-theme";
import Test from "./component/test";
import Work from "./component/Work";
import SignUp from "./component/SignUp";

export default function Home() {
  return (
    <div>
      <SignUp />
      <HeroTheme></HeroTheme>
      <HowItsWorks />
      <Work />
      <ServiceSec />
      <PricingPlan />
      <WebDesignServices />
      <LogoDesignServices />
      <Test />
    </div>
  );
}
