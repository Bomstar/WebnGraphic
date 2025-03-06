import Image from "next/image";
import { logoServices } from "./json";
import Box from "./Box";
import GlobalSection from "./GlobalSection";
import GlobalTitle from "./GlobalTitle";

export default function LogoDesignServices() {
  return (
    <GlobalSection>
      <GlobalTitle>Logo Design services</GlobalTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {logoServices.map((service, index) => (
          <Box key={index}>
            <Image
              src={service.img}
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
    // <section className="md:p-16 p-5 bg-gray-100">
    //   <div className="lg:max-w-[1440px] space-y-10 m-0 md:m-auto">
    //     <h2 className="text-4xl font-bold text-center">Logo Design services</h2>
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //       {logoServices.map((service, index) => (
    //         <Box key={index}>
    //           <Image
    //             src={service.img}
    //             alt={service.title}
    //             width={60}
    //             height={60}
    //           />
    //           <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
    //           <p className="mt-2 text-gray-600">{service.description}</p>
    //         </Box>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
}
