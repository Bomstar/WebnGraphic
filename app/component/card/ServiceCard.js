import Image from "next/image";
export default function ServiceCard({ service }) {
  return (
    <div className="group text-white h-80">
      <div className="relative rounded-2xl shadow-lg flex flex-col items-center text-center bg-white w-full h-full transition-transform duration-500 [transform-style:preserve-3d] p-6 group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-10 p-6 bg-[#23233f] rounded-lg shadow-lg [backface-visibility:hidden]">
          <Image
            src={service.icon}
            alt={service.title}
            width={60}
            height={60}
          />
          <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
        </div>
        <div className="absolute inset-0 flex items-center p-6 justify-center bg-[#23233f] rounded-lg shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className="mt-2">{service.description}</p>
        </div>
      </div>
    </div>
  );
}
