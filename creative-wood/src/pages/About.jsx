import React from "react";
import cwlogo from '../../public/cwlogo.png'

const About = () => {
  return (
    <div
      name="about"
      className="relative h-screen w-full bg-gradient-about flex flex-col justify-center items-center px-4 lg:px-10"
    >
      <div className="relative z-10 flex flex-col justify-center items-center text-center">
        <h1 className="text-white text-3xl lg:text-5xl font-bold mb-6 lg:mb-8">
          ABOUT US
        </h1>
        <p className="text-white text-sm lg:text-lg leading-relaxed max-w-screen-md mx-auto">
          Experience the magic of Creative Wood's laser-cut wooden products.
          From meticulously crafted cigar boxes to stunning wall lamps adorned
          with LED lighting, our collection encompasses a variety of stylish
          accessories. With a commitment to quality and craftsmanship, we bring
          personalized touches to every creation.
          <br />
          <br />
          We offer the possibility of shipping products via express mail across
          Serbia, so your favorite pieces can arrive directly at your doorstep.
          No matter where you are, you can enjoy our unique products and bring
          warmth and elegance to your home.
          <br />
          <br />
          Our workshop is located in the beautiful town of Vrbas, where every
          product is carefully crafted by our team. Each piece is the result of
          precise work and careful material selection, allowing us to provide
          you with products of the highest quality.
          <br />
          <br />
          In addition to express mail, we also offer the possibility of personal
          pickup. This way, you can come directly to our town and pick up the
          piece that will complete your space.
        </p>
      </div>
      
      <div className="absolute bottom-50 w-full flex justify-center items-center z-0 opacity-80 pointer-events-none">
        <img src={cwlogo} alt="Creative Wood Logo" className="w-3/4 lg:w-1/3" />
      </div>
    </div>
  );
};

export default About;
