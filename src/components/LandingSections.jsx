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
  fontColor = darkOverlay ? "#fff" : "#000",
  buttonColor,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return; // pause auto sliding when true

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval, isPaused]);

  const defaultTextColor = darkOverlay ? "#fff" : "#000";
  const defaultBorderColor = darkOverlay ? "#fff" : "#000";

  const btnTextColor = buttonColor || defaultTextColor;
  const btnBorderColor = buttonColor || defaultBorderColor;

  const buttonStyle = {
    color: btnTextColor,
    borderColor: btnBorderColor,
    backgroundColor: "transparent",
    minWidth: 0,
  };

  const buttonHoverStyle = {
    color: btnBorderColor,
    backgroundColor: btnTextColor,
  };

  const arrowButtonStyle = {
    position: "absolute",
    bottom: "1rem",              // moved to bottom
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
      {/* Left Arrow */}
      <button
        style={{ ...arrowButtonStyle, left: "1rem" }}
        onClick={handlePrev}
        aria-label="Previous Slide"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        style={{ ...arrowButtonStyle, right: "1rem" }}
        onClick={handleNext}
        aria-label="Next Slide"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        ›
      </button>

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
              height: "auto",
              minHeight: "60vh",
              width: "100%",
            }}
          >
            {darkOverlay && (
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            )}

            {/* Text + Button Overlay */}
            <div
              className={`absolute z-20 px-6 py-4 flex flex-col space-y-4 ${
                alignLeft
                  ? "left-0 top-1/2 transform -translate-y-1/2 w-1/3 text-left"
                  : "inset-0 justify-center items-center max-w-max mx-auto text-center"
              }`}
              style={{ color: fontColor, minWidth: alignLeft ? "250px" : "auto" }}
            >
              <h2 className="text-5xl font-bold leading-tight">{slide.heading}</h2>
              <p className="text-xl">{slide.subheading}</p>
              {slide.buttonText && slide.buttonLink && (
                <a
                  href={slide.buttonLink}
                  className={`border font-semibold py-3 px-5 rounded text-xl transition-colors duration-300 inline-block max-w-full truncate ${
                    alignLeft ? "self-start" : "mx-auto"
                  }`}
                  style={hovered ? buttonHoverStyle : buttonStyle}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
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
    "inline-block border border-black text-black bg-transparent font-semibold py-3 px-5 rounded hover:bg-black hover:text-white transition-colors duration-300 text-xl";

  return (
    <section className="flex flex-col md:flex-row items-start md:items-center">
      {/* Image always order-1 on mobile, changes to order 1 or 2 on md depending on reverse */}
      <div
        className={`order-1 md:w-1/2 ${
          reverse ? "md:order-2" : "md:order-1"
        }`}
      >
        <img src={image} alt={heading} className="w-full h-full object-cover" />
      </div>

      {/* Text always order-2 on mobile, changes to order 1 or 2 on md depending on reverse */}
      <div
        className={`order-2 md:w-1/2 p-8 text-left ${
          reverse ? "md:order-1" : "md:order-2"
        }`}
      >
        <h3 className="text-4xl font-bold mb-4">{heading}</h3>
        <p className="text-gray-600 mb-4 text-xl">{subheading}</p>
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
