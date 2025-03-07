import { webServices } from "./json";
import ServiceCard from "@/app/component/card/ServiceCard";
import GlobalSection from "./GlobalSection";
import GlobalTitle from "./GlobalTitle";

export default function WebDesignServices() {
  return (
    <GlobalSection>
      <GlobalTitle>Web Design services</GlobalTitle>
      <div className="grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {webServices.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </GlobalSection>
  );
}
