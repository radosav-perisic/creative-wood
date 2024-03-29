import React from "react";
import about from "/PCabout.jpg";
import aboutMob from "/MOBabout.jpg";
import MDabout from "/MDabout.jpg";
import { useMediaQuery } from "@react-hook/media-query";

const About = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");

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
