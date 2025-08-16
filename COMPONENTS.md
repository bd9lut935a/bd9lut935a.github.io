# 🌐 Landing Page Components

This file documents the core components for the React landing page.  
Each section includes a short description and a usage example.

---

## Header

Displays a logo at the top of the page.

```jsx
import { Header } from "./components/Header";

<Header logo="/images/my-logo.png" />;
```

---

## Slideshow

A rotating banner with optional overlay text and buttons.

```jsx
import { Slideshow } from "./components/Slideshow";

const slides = [
  {
    image: "/images/slide1.jpg",
    heading: "Welcome",
    subheading: "Discover more",
    buttonText: "Learn More",
    buttonLink: "/about",
  },
  {
    image: "/images/slide2.jpg",
    heading: "Fresh Ideas",
    subheading: "Innovation at work",
  },
];

<Slideshow slides={slides} interval={5000} darkOverlay alignLeft fontColor="#fff" />;
```

---

## Info

Two-column section with image and description.

```jsx
import { Info } from "./components/Info";

<Info
  image="/images/info.jpg"
  heading="Our Mission"
  subheading="We strive to deliver the best."
  buttonText="Contact Us"
  buttonLink="/contact"
  reverse
/>;
```

---

## FullImage (Cover)

A full-width image with optional dark overlay and centered text.

```jsx
import { FullImage } from "./components/FullImage";

<FullImage
  image="/images/hero.jpg"
  darkOverlay
  heading="Welcome to Our Site"
  subheading="We build cool things"
/>;
```

---

## Socials

Links to social media profiles.

```jsx
import { Socials } from "./components/Socials";

<Socials
  brandColor="#1a1a1a"
  fontColor="#fff"
  text="Stay connected!"
  links={[
    { href: "https://twitter.com/yourhandle", label: "Twitter" },
    { href: "https://instagram.com/yourhandle", label: "Instagram" },
  ]}
/>;
```

---

## Footer

Simple footer bar.

```jsx
import { Footer } from "./components/Footer";

<Footer brandColor="#222" />;
```
