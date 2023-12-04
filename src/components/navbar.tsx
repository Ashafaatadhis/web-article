"use client";
import Container from "./container";
import { useEffect, useState, useRef, useContext } from "react";
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { MdLightMode } from "react-icons/md";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { ActiveProvider, useActive } from "@/context/ActiveContext";
import { Space_Grotesk } from "next/font/google";
const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500"],
  preload: true,
  subsets: ["latin"],
});

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const router = usePathname();
  const { isActive, setInactive, setActive } = useActive();

  //   const [isActive, setIsActive] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setInactive();
    setMounted(true);

    // window.addEventListener("scroll", (e) => {
    //   const someAwesomeMathThisIsSoGoodOhMyGod = window.scrollY * 0.0005;
    //   if (someAwesomeMathThisIsSoGoodOhMyGod >= 0.15) return;
    //   if (navRef.current) {
    //     navRef.current.style.backgroundColor = `rgba(255, 255, 255, ${someAwesomeMathThisIsSoGoodOhMyGod})`;
    //   }
    // });
    return () => {
      setInactive();
      setMounted(false);
    };
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <nav
        ref={navRef}
        className="getScroll fixed backdrop-blur-sm z-50 left-0 right-0 shadow-lg px-[20px]"
      >
        <Container
          className={`${spaceGrotesk.className}  font-medium flex justify-between items-center my-5`}
        >
          <div className="text-lg">Kurookami</div>
          <div
            onClick={() => {
              setActive();
            }}
            className="gap-[30px] sm:hidden block"
          >
            <RxHamburgerMenu />
          </div>
          <div className="list-none hidden sm:flex gap-[30px]">
            <li>
              <Link href={"/"}>Artikel</Link>
            </li>
            <li>Projek</li>
            <li
              onClick={() => {
                console.log("DUAR");
              }}
            >
              <Link href={"/personal"}>Author</Link>
            </li>

            <li className="text-xl">
              <button
                onClick={() => {
                  theme == "light" ? setTheme("dark") : setTheme("light");
                }}
              >
                {theme == "light" ? <MdLightMode /> : <MdDarkMode />}
              </button>
            </li>
          </div>
        </Container>
      </nav>
      <div
        onClick={(e) => {
          if (!popupRef.current?.contains(e?.target as Node)) {
            setInactive();
          }
          // setInactive();
        }}
        className={`${
          isActive ? "flex" : "hidden"
        } sm:hidden h-screen p-5 backdrop-blur-sm justify-end z-50 fixed top-0 bottom-0 left-0 right-0`}
      >
        <article
          ref={popupRef}
          className=" list-none mt-14 h-fit  flex flex-col gap-2 items-end"
        >
          <li
            className="text-lg"
            onClick={() => {
              setInactive();
            }}
          >
            <IoMdClose />
          </li>
          <li
            onClick={() => {
              router === "/" && setInactive();
            }}
          >
            <Link href={"/"}>Artikel</Link>
          </li>

          <li>
            <button>Projek</button>
          </li>
          <li
            onClick={() => {
              router === "/personal" && setInactive();
            }}
          >
            <Link href={"/personal"}>Author</Link>
          </li>

          <li className="text-xl">
            <button
              onClick={() => {
                theme == "light" ? setTheme("dark") : setTheme("light");
              }}
            >
              {theme == "light" ? <MdLightMode /> : <MdDarkMode />}
            </button>
          </li>
        </article>
      </div>
    </>
  );
};

export default Navbar;
