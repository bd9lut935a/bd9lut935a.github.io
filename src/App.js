import React from "react";

import {
  Header,
  Slideshow,
  Info,
  Cover,
  Socials,
  Footer,
} from "./components/LandingSections";

export default function App() {
  return (
    <>
      <Header logo="/landing/bd5.logo.title.01.png" />

      <Slideshow
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
      <Info
        image="/storefront/info_01/bd9_assembly.gif"
        heading="Handcrafted Quality"
        subheading="Our products are made with care and attention to detail."
        buttonText="Learn More"
        buttonLink="#"
      />
      <Info
        image="/storefront/info_02/screenshot_from_2025-08-14_14-57-29.png"
        heading="Sustainable Materials"
        subheading="We prioritize eco-friendly production."
        reverse
        buttonText="Learn More"
        buttonLink="#"
      />

      <Slideshow
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
      <Cover image="/storefront/cover_01/screenshot_from_2025-08-14_15-33-12.png" />

      <Cover image="/storefront/cover_02/screenshot_from_2025-08-14_14-27-27.png" darkOverlay={true} />

      <Socials
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
