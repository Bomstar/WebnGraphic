import { logoServices } from "./json";
import ServiceCard from "@/app/component/card/ServiceCard";
import GlobalSection from "./GlobalSection";
import GlobalTitle from "./GlobalTitle";

export default function LogoDesignServices() {
  return (
    <GlobalSection>
      <GlobalTitle>Logo Design services</GlobalTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {logoServices.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </GlobalSection>
  );
}
