import { MagicButton } from '@/components/ui/MagicButton';
import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
    return (
      <div className="relative flex items-center justify-center h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.1]">
        {/* Spotlights */}
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white/[0.01]" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="blue" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="white" />

        {/* Radial gradient for the faded look */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        {/* Text content */}
        <div className="relative z-10 max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center space-y-4 px-4">
            <h2 className="uppercase tracking-widest text-xs text-blue-100">
                Data-Driven Driven Solutions
            </h2>
            <TextGenerateEffect 
                className="text-[28px] sm:text-[36px] md:text-5xl lg:text-6xl leading-tight"
                words="Transformed Through Computational Design"
            />
            <p className="md:tracking-wider text-sm md:text-lg lg:text-xl text-[#D8B4FE]">
                with code and intuition
            </p>
            <a href="#about">
                <MagicButton 
                    title="Show my work"
                    icon={<FaLocationArrow />}
                    position='right' 
                />

            </a>
        </div>
      </div>
    );
};  

export default Hero;
