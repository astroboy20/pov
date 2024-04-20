import React from "react";
import { Image } from "next/image";

const BouncingImages = () => {
  const images = [
    { src: "/images/a.svg", alt: "bouncing-img", delay: 0 },
    { src: "/images/b.svg", alt: "bouncing-img", delay: 1 },
    { src: "/images/c.svg", alt: "bouncing-img", delay: 2 },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            animation: `bounce 2s infinite alternate ${
              image.delay * 0.5
            }s`, // Adjust the animation duration and delay as needed
            marginRight: "20px", // Adjust spacing between images
          }}
        >
          <Image src={image.src} height={120} width={120} alt={image.alt} />
        </div>
      ))}
      <style jsx global>{`
        @keyframes bounce {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
};

export default BouncingImages;
