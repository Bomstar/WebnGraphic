import Image from "next/image";
import { webServices } from "./json";
import Box from "./Box";
import GlobalSection from "./GlobalSection";
import GlobalTitle from "./GlobalTitle";

export default function WebDesignServices() {
  return (
    <GlobalSection>
      <GlobalTitle>Web Design services</GlobalTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {webServices.map((service, index) => (
          <Box key={index}>
            <Image
              src={service.icon}
              alt={service.title}
              width={60}
              height={60}
            />
            <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-gray-600">{service.description}</p>
          </Box>
        ))}
      </div>
    </GlobalSection>
  );
}
