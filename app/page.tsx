
import HowItsWorks from './component/HowItsWorks'
import ServiceSec from '@/app/component/ServiceSec'
import PricingPlan from './component/PricingPlan';

export default function Home() {
  return (
    <div>
      <HowItsWorks/>
      <ServiceSec/>
      <PricingPlan/>
    </div>
  );
}
