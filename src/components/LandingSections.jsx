import React, { useState, useEffect } from "react";

// HEADER BAR with Logo Prop
export const HeaderBar = ({ logo }) => (
  <header className="bg-white shadow py-4 px-6 flex justify-center">
    <img src={logo} alt="Brand Logo" className="h-14" />
  </header>
);

export const Carousel = ({
  slides,
  interval = 4000,
  darkOverlay = false,
  alignLeft = false,
  fontColor = darkOverlay ? "#fff" : "#000",
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  const buttonClasses = darkOverlay
    ? "mt-4 inline-block border border-white text-white bg-transparent font-semibold py-2 px-4 rounded hover:bg-white hover:text-black transition-colors duration-300"
    : "mt-4 inline-block border border-black text-black bg-transparent font-semibold py-2 px-4 rounded hover:bg-black hover:text-white transition-colors duration-300";

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="relative w-full h-96 flex-shrink-0 flex"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "gray",
            }}
          >
            {darkOverlay && (
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            )}
            <div
              className={`relative z-10 ${
                alignLeft
                  ? "flex flex-col justify-center px-6 w-1/3 text-left"
                  : "flex flex-col justify-center px-6 max-w-max mx-auto items-center"
              }`}
              style={{ color: fontColor }}
            >
              <h2 className="text-3xl font-bold">{slide.heading}</h2>
              <p className="mt-2">{slide.subheading}</p>
              {slide.buttonText && slide.buttonLink && (
                <a
                  href={slide.buttonLink}
                  className={buttonClasses + " self-start"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {slide.buttonText}
                </a>
              )}
            </div>
            {alignLeft && <div className="flex-1" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export const ImageTextSection = ({
  image,
  heading,
  subheading,
  reverse,
  buttonText,
  buttonLink,
}) => {
  const buttonClasses =
    "inline-block border border-black text-black bg-transparent font-semibold py-2 px-4 rounded hover:bg-black hover:text-white transition-colors duration-300";

  return (
    <section className="flex flex-col md:flex-row items-center">
      <div className={`md:w-1/2 ${reverse ? "order-2" : ""}`}>
        <img src={image} alt={heading} className="w-full h-full object-cover" />
      </div>
      <div className="md:w-1/2 p-8">
        <h3 className="text-2xl font-bold mb-4">{heading}</h3>
        <p className="text-gray-600 mb-4">{subheading}</p>
        {buttonText && buttonLink && (
          <a
            href={buttonLink}
            className={buttonClasses}
            target="_blank"
            rel="noopener noreferrer"
          >
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
};


// FULL IMAGE
export const FullImage = ({ image }) => (
  <div>
    <img src={image} alt="" className="w-full h-auto" />
  </div>
);

// FULL IMAGE DARK OVERLAY
export const FullImageDark = ({ image, heading, subheading }) => (
  <div
    className="relative w-full h-96 flex items-center justify-center text-white"
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative text-center">
      <h2 className="text-3xl font-bold">{heading}</h2>
      <p className="mt-2">{subheading}</p>
    </div>
  </div>
);

export const SocialBar = ({
  brandColor = "#111827",
  fontColor = "#ffffff",
  text = "Follow us for updates",
  links = [
    { href: "#", label: "Facebook" },
    { href: "#", label: "Instagram" },
    { href: "#", label: "Twitter" },
  ],
}) => (
  <div
    className="py-6 text-center"
    style={{ backgroundColor: brandColor, color: fontColor }}
  >
    <p className="mb-2">{text}</p>
    <div className="space-x-4">
      {links.map(({ href, label }, i) => (
        <a
          key={i}
          href={href}
          className="hover:underline"
          style={{ color: fontColor }}
        >
          {label}
        </a>
      ))}
    </div>
  </div>
);


// FOOTER with Brand Color Prop
export const Footer = ({ brandColor }) => (
  <footer className="text-white py-8 px-6 text-center" style={{ backgroundColor: brandColor }}>
    <p>© {new Date().getFullYear()} Your Store Name. All rights reserved.</p>
  </footer>
);
