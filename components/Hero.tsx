import { MagicButton } from "@/components/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Spotlights */}
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white/[0.01]"
      />
      <Spotlight
        className="top-10 left-full h-[80vh] w-[50vw]"
        fill="blue"
      />
      <Spotlight
        className="top-28 left-80 h-[80vh] w-[50vw]"
        fill="white"
      />

      {/* Radial gradient for the faded look */}
      <div className="radial-mask"></div>

      {/* Text content */}
      <div className="hero-content">
        <h2 className="subheading">Data-Driven Solutions</h2>
        <TextGenerateEffect
          className="hero-text"
          words="Transformed Through Computational Design"
        />
        <p className="subheading">with code and intuition</p>
        <a href="#projects">
          <MagicButton
            title="See my work"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
