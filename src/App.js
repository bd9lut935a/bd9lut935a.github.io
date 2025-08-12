import React from "react";
import {
  HeaderBar,
  Carousel,
  ImageTextSection,
  FullImage,
  FullImageDark,
  SocialBar,
  Footer,
} from "./components/LandingSections";

export default function App() {
  return (
    <>
      <HeaderBar logo="/landing/bd5.logo.title.01.png" />

      <Carousel
        slides={[
          {
            image: "/storefront/slideshow_01/screenshot_from_2025-02-12_11-10-54.png",
            heading: "New Arrivals",
            subheading: "Check out our latest products",
            buttonText: "Learn More",
            buttonLink: "#",
          },
          {
            image: "/storefront/slideshow_01/screenshot_from_2025-02-12_11-11-21.png",
            heading: "Summer Sale",
            subheading: "Up to 50% off selected items",
            buttonText: "Learn More",
            buttonLink: "#",
          },
        ]}
        interval={3000}
        darkOverlay={true}
      />

      {/* Info sections */}
      <ImageTextSection
        image="/storefront/info_01/screenshot_from_2025-02-11_14-14-43.png"
        heading="Handcrafted Quality"
        subheading="Our products are made with care and attention to detail."
        buttonText="Learn More"
        buttonLink="#"
      />
      <ImageTextSection
        image="/storefront/info_02/screenshot_from_2025-02-11_10-13-19.png"
        heading="Sustainable Materials"
        subheading="We prioritize eco-friendly production."
        reverse
        buttonText="Learn More"
        buttonLink="#"
      />

      <Carousel
        slides={[
          {
            image: "/storefront/slideshow_02/screenshot_from_2025-02-11_11-06-45.png",
            heading: "Bestsellers",
            subheading: "Customer favorites all in one place",
            buttonText: "Learn More",
            buttonLink: "#",
          },
          {
            image: "/storefront/slideshow_02/screenshot_from_2025-02-11_11-08-22.png",
            heading: "Exclusive Deals",
            subheading: "Members get special discounts",
            buttonText: "Learn More",
            buttonLink: "#",
          },
        ]}
        alignLeft={true}
        fontColor="#000000"
      />

      {/* Full images */}
      <FullImage image="/storefront/cover_01/screenshot_from_2025-02-11_11-14-43.png" />
      <FullImageDark
        image="/storefront/cover_02/screenshot_from_2025-02-11_11-17-16.png"
        heading="Join Our Community"
        subheading="Be the first to know about new drops."
      />

      <SocialBar
        brandColor="#ffffffff"
        fontColor="#000000ff"
        text="Let's Relocate Together"
        links={[
          { href: "https://facebook.com/yourpage", label: "Facebook" },
          { href: "https://instagram.com/yourpage", label: "Instagram" },
          { href: "https://twitter.com/yourpage", label: "Twitter" },
        ]}
      />
      <Footer brandColor="#00153dff" />
    </>
  );
}
