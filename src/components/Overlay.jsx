import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white  rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div class="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-['gilroy'] font-serif text-2xl">
            Hello, I'm Vrutansh Patel.
          </h1>
          <p className="text-gray-500">Welcome to my beautiful portfolio</p>
          <p className="mt-3">I know:</p>
          <ul className="leading-9">
            <li>🧑‍💻 How to code</li>
            <li>🧑‍🏫 How to learn</li>
            <li>📦 How to deliver</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl font-['poppins'] ">
            Here are My Skillsets 🔥
          </h1>
          <p className="text-gray-500">PS: I never test</p>
          <p className="mt-3">
            <b>Frontend 🚀</b>
          </p>
          <ul className="leading-9 font-['pp_mori']">
            <li>HTML</li>
            <li>CSS </li>
            <li>JS</li>
            <li>ReactJS</li>
            <li>BOOTSTRAP 3&4 </li>
            <li>Tailwind</li>
          </ul>
          <p className="mt-3">
            <b>Backend 🔬</b>
          </p>
          <ul className="leading-9 font-[pp_mori]">
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-[Circular_bold] text-2xl">
            🤙 Contact me maybe?
          </h1>
          <p className="text-gray-500">
            I'm very expensive but you won't regret it
          </p>
          
          <p className="mt-6 p-3 bg-zinc-200 flex items-center justify-center gap-10  rounded-lg">
             <a className="text-4xl " href="https://github.com/vrutansh"><FaGithub /></a> 
             <a className="text-4xl" href="#"><CiMail /></a>
             <a className="text-4xl" href="https://www.instagram.com/thenameisvrutansh/"><FaInstagram/></a>
             <a className="text-3xl" href=""><FaFacebookF /></a>
          </p>
          
        </Section>
      </div>
    </Scroll>
  );
};