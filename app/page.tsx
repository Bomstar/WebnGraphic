import HowItsWorks from "./component/HowItsWorks";
import ServiceSec from "@/app/component/ServiceSec";
import PricingPlan from "./component/PricingPlan";
import WebDesignServices from "./component/WebDesignServices";
import LogoDesignServices from "./component/LogoDesignServices";

export default function Home() {
  return (
    <div>
      <HowItsWorks />
      <ServiceSec />
      <PricingPlan />
      <WebDesignServices />
      <LogoDesignServices />
    </div>
  );
}
