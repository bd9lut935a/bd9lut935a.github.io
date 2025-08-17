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
      <Header logo="/landing/bd9_logo_title_01.png" />

      <Slideshow
        slides={[
          {
            image: "/storefront/slideshow_01/screenshot_from_2025-08-14_11-16-05.png",
            heading: "Home Reimagined",
            subheading: "Architecture that Speaks to the Soul.",
            buttonText: "Learn More",
            buttonLink: "#",
          },
          {
            image: "/storefront/slideshow_01/screenshot_from_2025-08-14_11-18-01.png",
            heading: "Home Reimagined",
            subheading: "Architecture that Speaks to the Soul.",
            buttonText: "Learn More",
            buttonLink: "#",
          },
          {
            image: "/storefront/slideshow_01/screenshot_from_2025-08-14_11-19-21.png",
            heading: "Home Reimagined",
            subheading: "Architecture that Speaks to the Soul.",
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
        heading="Affordable Scaleable Homes 🌲"
        subheading="Step outside the box and into a dwelling that fits your living style, and grows with you and your community."
        buttonText="Learn More"
        buttonLink="#"
        reverse
      />
      <Info
        image="/storefront/info_02/screenshot_from_2025-08-14_14-57-29.png"
        heading="Ancient Architecture, Modern Materials"
        subheading="From honeycomb, to a foxes den, spheres are a friend of nature. Buckminster Fuller, to whom coined the geodesic dome, recognized the strength of stepping outside the traditional housing box."
        buttonText="Learn More"
        buttonLink="#"
      />

      <Info
        image="/storefront/info_03/screenshot_from_2025-08-14_15-13-07.png"
        heading="Designed with the Human Spirit in Mind."
        subheading="🔧 Concrete Composite Components
🌧️ Silicone Sealed Seams
🌞 Configurable Windows and Skylights
🏠 Easy Modular Assembly"
        buttonText="Learn More"
        buttonLink="#"
        reverse
      />

      <Slideshow
  slides={[
    {
      image: "/storefront/slideshow_02/screenshot_from_2025-08-14_15-28-14.png",
      heading: "Single",
      subheading: "1 bd | 1 ba | 1 kit | 774 sqft",
      buttonText: "Learn More",
      buttonLink: "#",
    },
    {
      image: "/storefront/slideshow_02/screenshot_from_2025-08-14_15-28-49.png",
      heading: "Double",
      subheading: "2 bd | 1 ba | 1 kit | 975 sqft",
      buttonText: "Learn More",
      buttonLink: "#",
    },
    {
      image: "/storefront/slideshow_02/screenshot_from_2025-08-14_15-29-06.png",
      heading: "Family",
      subheading: "3 bd | 2 ba | 1 kit | 1,221 sqft",
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
      <Footer brandColor="#00153dff" heading={"Terago - Live Wisely"} />
    </>
  );
}
