"use client";

import Container from "@/components/container";
import Net from "@/components/net";
import Footer from "@/components/footer";
import {
  Dosis,
  Playfair_Display,
  Merriweather,
  Poppins,
} from "next/font/google";
import { FaCode } from "react-icons/fa";
import styles from "./Page.module.css";
import { TfiRulerPencil } from "react-icons/tfi";
import { BsClipboardDataFill } from "react-icons/bs";

import Image from "next/image";

import { useState, useEffect } from "react";
import { useActive } from "@/context/ActiveContext";

const poppins = Poppins({
  subsets: ["devanagari"],
  weight: ["400", "500"],
});

const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["cyrillic"],
});

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "800"],
});

const Personal = () => {
  const [mounted, setMounted] = useState(false);
  const { setInactive } = useActive();

  useEffect(() => {
    return () => {
      setInactive();
    };
  }, []);

  return (
    <main>
      <Net
        mounted={mounted}
        setMounted={setMounted}
        className={` h-screen ${merriweather.className}`}
      >
        <Container className="min-h-full flex items-center justify-center ">
          <div className="lg:flex-row   flex-col flex gap-4 lg:gap-[80px]">
            <div className="lg:w-1/4 mx-auto">
              <div className="w-[200px] flex items-center sm:w-[300px]   dark:bg-[#ffffff27]   rounded-full shadow-xl bg-white p-2">
                <div className="w-fit dark:bg-[#dac6ff] rounded-full">
                  <Image
                    src="/ayang.jpg"
                    className="rounded-full dark:mix-blend-multiply"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                  />
                </div>
              </div>
            </div>

            <div className="w-full text-center sm:text-start lg:w-3/4 lg:items-start items-center flex flex-col">
              <span className="text-[10px] sm:text-base lg:text-lg">
                WEB DEVELOPER / BACKEND DEVELOPER
              </span>
              <h1 className="text-xl sm:text-3xl lg:text-7xl mt-auto">
                ADHIS MAULIYAHSA ASHAFAAT
              </h1>
              <div className="pt-1 font-medium sm:pt-3">
                <button
                  className={`bg-black dark:bg-white dark:text-black text-white lg:mt-auto w-fit text-xs sm:text-base  p-1 sm:p-3 rounded`}
                >
                  CONTACT ME
                </button>
              </div>
            </div>
          </div>
        </Container>
      </Net>
      {mounted && (
        <Container className={`${dosis.className} `}>
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium dark:text-[#61c434] text-[#1B6B93]">
              About Me:
            </h2>
            <p className="sm:mt-4 text-[12px] sm:text-base lg:text-xl sm:leading-8">
              Hi, my name is Adhis Mauliyahsa Ashafaat, i am a Fullstack web
              developer, UI designer, and Mobile developer. I jhave honed my
              skills in Web Development and advance i have core understanding of
              advance UI design principles. Here are the major skiills i have.
            </p>
          </div>
          <div className="flex pt-2 sm:pt-5 gap-2 sm:gap-6 items-center">
            <div className="dark:text-[#61c434] text-4xl sm:text-7xl text-[#1B6B93]">
              <span>5+</span>
            </div>
            <div className="text-[13px] sm:text-lg lg:text-xl">
              Years of experience. Specialised in building apps, while ensuring
              a seamless web experience for end users.
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl  font-medium mt-5 sm:mt-12 dark:text-[#61c434] text-[#1B6B93]">
                My Skills:
              </h2>
            </div>
            {/* card */}
            <div className="block sm:flex  gap-4 pt-2 sm:pt-5  ">
              <div className="h-[200px] sm:h-[320px] mb-4 gap-1 sm:gap-4 border px-6 items-center justify-center flex flex-col border-[#1B6B93] dark:border-[#61c434]  flex-1 rounded-xl   shadow  backdrop-blur ">
                <p className="text-[26px] sm:text-[32px]">
                  <TfiRulerPencil />
                </p>
                <span className="text-[18px] sm:text-[22px] text-center">
                  FRONT-END DEVELOPER
                </span>
                <span className="text-[12px] sm:text-[16px] text-center">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Autem, minus..
                </span>
              </div>
              <div className="h-[200px] sm:h-[320px] text-center mb-4 border-black dark:border-white gap-1 sm:gap-4 border px-6 items-center justify-center flex flex-col  flex-1 rounded-xl   shadow backdrop-blur ">
                <p className="text-[26px] sm:text-[32px]">
                  <FaCode />
                </p>

                <span className="text-[18px] sm:text-[22px] text-[#1B6B93] dark:text-[#61c434] ">
                  BACK-END DEVELOPER
                </span>
                <span className="text-[12px] sm:text-[16px]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Autem, minus..
                </span>
              </div>
              <div className="h-[200px] sm:h-[320px] items-center gap-1 sm:gap-4 border px-6 justify-center flex flex-col border-[#1B6B93] dark:border-[#61c434]  flex-1 rounded-xl   shadow backdrop-blur ">
                <p className="text-[26px] sm:text-[32px]">
                  <BsClipboardDataFill />
                </p>
                <span className="text-[18px] sm:text-[22px] text-center">
                  DATA SCIENCE
                </span>
                <span className="text-[12px] sm:text-[16px] text-center">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Autem, minus..
                </span>
              </div>
            </div>
          </div>
          {/* <div className="flex gap-8 pt-5  ">
              <div className="h-[300px] border border-[#61c434] flex-1 rounded-xl bg-[#F5F5F5]  bg-opacity-[0.1] px-16 py-10 shadow-lg backdrop-blur-sm max-sm:px-8">
                u
              </div>
              <div className="h-[300px] border border-[#61c434] flex-1 rounded-xl bg-[#F5F5F5]  bg-opacity-[0.1] px-16 py-10 shadow-lg backdrop-blur-sm max-sm:px-8">
                u
              </div>
              <div className="h-[300px] border border-[#61c434] flex-1 rounded-xl bg-[#F5F5F5]  bg-opacity-[0.1] px-16 py-10 shadow-lg backdrop-blur-sm max-sm:px-8">
                u
              </div>
              <div className="h-[300px] border border-[#61c434] flex-1 rounded-xl bg-[#F5F5F5]  bg-opacity-[0.1] px-16 py-10 shadow-lg backdrop-blur-sm max-sm:px-8">
                u
              </div>
            </div> */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl  font-medium mt-5 sm:mt-12 dark:text-[#61c434] text-[#1B6B93]">
              My Projects:
            </h2>
            <p className="sm:mt-4  text-[12px] sm:text-base lg:text-xl sm:leading-8">
              I have worked on many projects over the course of being a Web
              Developer, here are a few of my live, real-world projects
            </p>
            <div className={`block sm:flex  gap-4 pt-2 sm:pt-5`}>
              <div className="p-3 dark:bg-[#656579] mb-4  dark:bg-opacity-40  flex-1 rounded-md   shadow backdrop-blur-sm ">
                <div className="w-full border  border-[#1B6B93] dark:border-[#61c434] h-[75px] sm:h-[150px] rounded-md overflow-hidden">
                  <Image
                    className="w-full h-full object-cover"
                    alt=""
                    src={"https://picsum.photos/1000/300"}
                    width={1000}
                    height={300}
                  />
                </div>
                <div className="mt-2">
                  <span className="dark:text-[#61c434] font-medium text-[18px] leading-5 sm:text-[22px] text-[#1B6B93]">
                    MOOVE
                  </span>
                  <p className="text-[10px] sm:text-sm leading-5">
                    Mobile app for ddinstant pickup & dropoff accross major
                    cities.
                  </p>
                  <div className="flex gap-3 text-[10px] sm:text-sm mt-10">
                    <button className="text-white px-5 py-[6px] dark:bg-[#61c434] bg-[#1B6B93] rounded ">
                      View Live
                    </button>
                    <button className="px-5 py-1 border dark:border-[#61c434] border-[#1B6B93] rounded ">
                      Github Repo
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-3 dark:bg-[#656579] mb-4  dark:bg-opacity-40  flex-1 rounded-md   shadow backdrop-blur-sm ">
                <div className="w-full border  border-[#1B6B93] dark:border-[#61c434] h-[75px] sm:h-[150px] rounded-md overflow-hidden">
                  <Image
                    className="w-full h-full object-cover"
                    alt=""
                    src={"https://picsum.photos/1000/300"}
                    width={1000}
                    height={300}
                  />
                </div>
                <div className="mt-2">
                  <span className="dark:text-[#61c434] font-medium text-[18px] leading-5 sm:text-[22px] text-[#1B6B93]">
                    MOOVE
                  </span>
                  <p className="text-[10px] sm:text-sm leading-5">
                    Mobile app for ddinstant pickup & dropoff accross major
                    cities.
                  </p>
                  <div className="flex gap-3 text-[10px] sm:text-sm mt-10">
                    <button className="text-white px-5 py-[6px] dark:bg-[#61c434] bg-[#1B6B93] rounded ">
                      View Live
                    </button>
                    <button className="px-5 py-1 border dark:border-[#61c434] border-[#1B6B93] rounded ">
                      Github Repo
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-3 dark:bg-[#656579] mb-4  dark:bg-opacity-40  flex-1 rounded-md   shadow backdrop-blur-sm ">
                <div className="w-full border  border-[#1B6B93] dark:border-[#61c434] h-[75px] sm:h-[150px] rounded-md overflow-hidden">
                  <Image
                    className="w-full h-full object-cover"
                    alt=""
                    src={"https://picsum.photos/1000/300"}
                    width={1000}
                    height={300}
                  />
                </div>
                <div className="mt-2">
                  <span className="dark:text-[#61c434] font-medium text-[18px] leading-5 sm:text-[22px] text-[#1B6B93]">
                    MOOVE
                  </span>
                  <p className="text-[10px] sm:text-sm leading-5">
                    Mobile app for ddinstant pickup & dropoff accross major
                    cities.
                  </p>
                  <div className="flex gap-3 text-[10px] sm:text-sm mt-10">
                    <button className="text-white px-5 py-[6px] dark:bg-[#61c434] bg-[#1B6B93] rounded ">
                      View Live
                    </button>
                    <button className="px-5 py-1 border dark:border-[#61c434] border-[#1B6B93] rounded ">
                      Github Repo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
      <Footer />
    </main>
  );
};

export default Personal;
