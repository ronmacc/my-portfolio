import { FaLocationArrow } from "react-icons/fa6";
import { useState } from "react";
import { socialMedia } from "@/data";
import { MagicButton } from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

const Footer = () => {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        const email = "ronmacc1487@gmail.com";
        navigator.clipboard.writeText(email);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
            }, 2000);
        }
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      {/* background grid */}

      <div className="flex flex-col items-center ">
        <div className="mt-4">
            <MagicButton
                title={copied ? "Email is Copied!" : "Let's get in touch"}
                icon={<IoCopyOutline />}
                position="right"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
            />
        </div>        
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Andres Roncal
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map(({id, img, link}) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
                <img 
                    src={img} 
                    alt="icons" 
                    width={20} 
                    height={20} 
                />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

