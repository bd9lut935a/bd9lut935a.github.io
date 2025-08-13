import React, { useState, useEffect } from "react";

// HEADER BAR with Logo Prop
export const HeaderBar = ({ logo }) => (
  <header className="bg-white shadow py-4 px-6 flex justify-center">
    {/* scaled up from h-14 to h-21 (1.5x) */}
    <img src={logo} alt="Brand Logo" className="h-20" />
  </header>
);

export const Carousel = ({
  slides,
  interval = 4000,
  darkOverlay = false,
  alignLeft = false,
  fontColor = "#000",
  textBelowOnMobile = false, // NEW toggle
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const isLightColor = (hex) => {
    const c = hex.replace("#", "");
    const r = parseInt(c.substring(0, 2), 16);
    const g = parseInt(c.substring(2, 4), 16);
    const b = parseInt(c.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.6;
  };

  const lightBase = isLightColor(fontColor);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval, isPaused]);

  const buttonBaseStyle = {
    color: fontColor,
    borderColor: fontColor,
    backgroundColor: "transparent",
    minWidth: 0,
    transition: "all 0.3s ease",
  };

  const buttonHoverStyle = {
    color: lightBase ? "#000" : "#fff",
    backgroundColor: fontColor,
    borderColor: fontColor,
  };

  const arrowButtonStyle = {
    position: "absolute",
    bottom: "1rem",
    backgroundColor: "rgba(0,0,0,0.3)",
    border: "none",
    color: "#fff",
    padding: "0.5rem 1rem",
    fontSize: "2rem",
    cursor: "pointer",
    zIndex: 30,
    userSelect: "none",
    borderRadius: "0.375rem",
    transition: "background-color 0.3s ease",
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Arrows */}
      <button
        style={{ ...arrowButtonStyle, left: "1rem" }}
        onClick={handlePrev}
        aria-label="Previous Slide"
      >
        ‹
      </button>
      <button
        style={{ ...arrowButtonStyle, right: "1rem" }}
        onClick={handleNext}
        aria-label="Next Slide"
      >
        ›
      </button>

      {/* Slides */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="relative w-full flex-shrink-0"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "gray",
              aspectRatio: "16 / 9",
              minHeight: "60vh",
              width: "100%",
            }}
          >
            {darkOverlay && (
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            )}

            {/* Overlayed Text (hidden on mobile if textBelowOnMobile) */}
            <div
              className={`absolute z-20 px-6 py-4 flex flex-col space-y-4 transition-all duration-300 
                ${textBelowOnMobile ? "hidden md:flex" : "flex"}
                ${
                  alignLeft
                    ? "left-0 top-1/2 transform -translate-y-1/2 w-1/3 text-left"
                    : "inset-0 justify-center items-center max-w-max mx-auto text-center"
                }`}
              style={{ color: fontColor, minWidth: alignLeft ? "250px" : "auto" }}
            >
              <h2 className="text-5xl font-bold leading-tight">
                {slide.heading}
              </h2>
              <p className="text-xl">{slide.subheading}</p>
              {slide.buttonText && slide.buttonLink && (
                <a
                  href={slide.buttonLink}
                  className={`border font-semibold py-3 px-5 rounded text-xl inline-block max-w-full truncate ${
                    alignLeft ? "self-start" : "mx-auto"
                  }`}
                  style={buttonBaseStyle}
                  onMouseEnter={(e) =>
                    Object.assign(e.target.style, buttonHoverStyle)
                  }
                  onMouseLeave={(e) =>
                    Object.assign(e.target.style, buttonBaseStyle)
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {slide.buttonText}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Text Below (mobile-only if textBelowOnMobile) */}
      {textBelowOnMobile && (
        <div className="md:hidden px-6 py-4 space-y-4 text-center" style={{ color: fontColor }}>
          <h2 className="text-3xl font-bold leading-tight">
            {slides[currentIndex].heading}
          </h2>
          <p className="text-lg">{slides[currentIndex].subheading}</p>
          {slides[currentIndex].buttonText && slides[currentIndex].buttonLink && (
            <a
              href={slides[currentIndex].buttonLink}
              className="border font-semibold py-2 px-4 rounded text-lg inline-block"
              style={buttonBaseStyle}
              onMouseEnter={(e) =>
                Object.assign(e.target.style, buttonHoverStyle)
              }
              onMouseLeave={(e) =>
                Object.assign(e.target.style, buttonBaseStyle)
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              {slides[currentIndex].buttonText}
            </a>
          )}
        </div>
      )}
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
  fontColor = "#000", // new prop
}) => {
  const isLightColor = (hex) => {
    const c = hex.replace("#", "");
    const r = parseInt(c.substring(0, 2), 16);
    const g = parseInt(c.substring(2, 4), 16);
    const b = parseInt(c.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.6;
  };

  const lightBase = isLightColor(fontColor);

  const buttonBaseStyle = {
  color: fontColor,
  border: `1px solid ${fontColor}`, // restore border
  backgroundColor: "transparent",
  transition: "all 0.3s ease",
};

const buttonHoverStyle = {
  color: lightBase ? "#000" : "#fff",
  backgroundColor: fontColor,
  border: `1px solid ${fontColor}`, // keep border consistent on hover
};

  return (
    <section className="flex flex-col md:flex-row items-start md:items-center">
      {/* Image */}
      <div className={`order-1 md:w-1/2 ${reverse ? "md:order-2" : "md:order-1"}`}>
        <img src={image} alt={heading} className="w-full h-full object-cover" />
      </div>

      {/* Text */}
      <div className={`order-2 md:w-1/2 p-8 text-left ${reverse ? "md:order-1" : "md:order-2"}`}>
        <h3 className="text-4xl font-bold mb-4" style={{ color: fontColor }}>
          {heading}
        </h3>
        <p className="text-xl mb-4" style={{ color: fontColor }}>
          {subheading}
        </p>
        {buttonText && buttonLink && (
          <a
            href={buttonLink}
            style={buttonBaseStyle}
            onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.target.style, buttonBaseStyle)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-semibold py-3 px-5 rounded text-xl"
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
      {/* text-3xl → text-5xl */}
      <h2 className="text-5xl font-bold">{heading}</h2>
      {/* subheading base → text-xl */}
      <p className="mt-2 text-xl">{subheading}</p>
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
    className="text-center"
    style={{ backgroundColor: brandColor, color: fontColor, paddingTop: "10rem", paddingBottom: "10rem" }}
  >
    <h3 className="text-5xl font-bold mb-4">{text}</h3>
    <div className="space-x-4">
      {links.map(({ href, label }, i) => (
        <a
          key={i}
          href={href}
          className="hover:underline text-lg"
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
  <footer
    className="text-white py-8 px-6 text-center text-lg"
    style={{ backgroundColor: brandColor }}
  >
    <p>© {new Date().getFullYear()} Your Store Name. All rights reserved.</p>
  </footer>
);
