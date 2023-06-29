import React from "react";
import about from "../assets/PCabout.jpg";
import aboutMob from "../assets/MOBabout.jpg";
import MDabout from "../assets/MDabout.jpg";
import { useMediaQuery } from "@react-hook/media-query";

const About = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isMobile = useMediaQuery("(max-width: 767px)");

  let background;

  if (isTablet) {
    background = `url(${MDabout})`;
  } else if (isDesktop) {
    background = `url(${about})`;
  } else {
    background = `url(${aboutMob})`;
  }

  return (
    <div
    name="about"
    className="h-screen w-full bg-cover"
    style={{ backgroundImage: background}}
  >
    </div>
  );
};

export default About;
