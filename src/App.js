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
            image: "/storefront/slideshow_01/screenshot_from_2025-08-14_11-16-05.png",
            heading: "New Arrivals",
            subheading: "Check out our latest products",
            buttonText: "Learn More",
            buttonLink: "#",
          },
          {
            image: "/storefront/slideshow_01/screenshot_from_2025-08-14_11-18-01.png",
            heading: "Summer Sale",
            subheading: "Up to 50% off selected items",
            buttonText: "Learn More",
            buttonLink: "#",
          },
          {
            image: "/storefront/slideshow_01/screenshot_from_2025-08-14_11-19-21.png",
            heading: "Summer Sale",
            subheading: "Up to 50% off selected items",
            buttonText: "Learn More",
            buttonLink: "#",
          },
        ]}
        interval={3000}
        darkOverlay={true}
        fontColor="#ffffffff"
      />

      {/* Info sections */}
      <ImageTextSection
        image="/storefront/info_01/bd9_assembly.gif"
        heading="Handcrafted Quality"
        subheading="Our products are made with care and attention to detail."
        buttonText="Learn More"
        buttonLink="#"
      />
      <ImageTextSection
        image="/storefront/info_02/screenshot_from_2025-08-14_14-57-29.png"
        heading="Sustainable Materials"
        subheading="We prioritize eco-friendly production."
        reverse
        buttonText="Learn More"
        buttonLink="#"
      />

      <Carousel
  slides={[
    {
      image: "/storefront/slideshow_02/screenshot_from_2025-08-14_15-28-14.png",
      heading: "Bestsellers",
      subheading: "Customer favorites all in one place",
      buttonText: "Learn More",
      buttonLink: "#",
    },
    {
      image: "/storefront/slideshow_02/screenshot_from_2025-08-14_15-28-49.png",
      heading: "Exclusive Deals",
      subheading: "Members get special discounts",
      buttonText: "Learn More",
      buttonLink: "#",
    },
    {
      image: "/storefront/slideshow_02/screenshot_from_2025-08-14_15-29-06.png",
      heading: "Fresh Picks",
      subheading: "Latest additions you’ll love",
      buttonText: "Learn More",
      buttonLink: "#",
    },
  ]}
  alignLeft={true}
  interval={3000}
  fontColor="#000000"
  textBelowOnMobile={true}
/>

      {/* Full images */}
      <FullImage image="/storefront/cover_01/screenshot_from_2025-08-14_15-33-12.png" />
      <FullImageDark
        image="/storefront/cover_02/screenshot_from_2025-08-14_14-27-27.png"
        heading=""
        subheading=""
      />

      <SocialBar
        brandColor="#ffffffff"
        fontColor="#3b3838ff"
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
