"use client";
import { useEffect, useState } from "react";
import { useActive } from "@/context/ActiveContext";
import Globe from "@/components/globe";
import { Merriweather } from "next/font/google";
import Container from "@/components/container";
const merriweather = Merriweather({
  weight: ["400", "700", "300"],
  subsets: ["cyrillic"],
});

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { setInactive } = useActive();

  useEffect(() => {
    setInactive();
    return () => {
      setInactive();
    };
  }, []);
  return (
    <main>
      <Globe
        mounted={mounted}
        setMounted={setMounted}
        className={` h-screen ${merriweather.className}`}
      >
        <Container className="min-h-full flex items-center">
          <div className="max-w-xl  backdrop-blur-sm p-10 shadow  border border-[#e9e9e9] dark:border-[#414040] rounded">
            <h1 className="text-6xl leading-[1.3]">
              Welcome To My Article Web
            </h1>
            <p className="mt-5 text-lg leading-6 font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, nulla recusandae. Omnis ut quis tenetur ad
              praesentium?
            </p>
            <button className="text-white px-8 mt-6 py-3  dark:bg-[#61c434] bg-[#1B6B93] rounded-2xl ">
              Explore
            </button>
          </div>
        </Container>
      </Globe>
    </main>
  );
}
