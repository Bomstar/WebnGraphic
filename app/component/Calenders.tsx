"use client";
import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

// Sample corporate team data with circular images
const teamMembers = [
  {
    id: 1,
    image: "/assets/Ourlegacy.png",
  },
  {
    id: 2,
    image: "/assets/Ourlegacy.png",
  },
  {
    id: 3,
    image: "/assets/Ourlegacy.png",
  },
  {
    id: 4,
    image: "/assets/Ourlegacy.png",
  },
  {
    id: 5,
    image: "/assets/Ourlegacy.png",
  },
];

export default function CorporateTeam() {
  const [selectedImage, setSelectedImage] = useState(0);
  console.log(selectedImage);
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Circular Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`text-center w-full h-[300px] ${
                member.id === selectedImage
                  ? "fixed z-20 overflow-hidden !h-full inset-0"
                  : ""
              } cursor-pointer`}
              onClick={() => setSelectedImage(member.id)}
            >
              <div className="relative w-full h-full">
                <Image src={member.image} alt="Graphics" fill></Image>
              </div>
            </div>
          ))}
        </div>
        {selectedImage && (
          <X
            onClick={() => setSelectedImage(0)}
            className="fixed bg-amber-500 z-30 top-20 right-20"
          ></X>
        )}
      </div>
    </div>
  );
}
