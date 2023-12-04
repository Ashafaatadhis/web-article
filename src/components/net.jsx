"use client";
import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import * as THREE from "three";
import styles from "./Net.module.css";
import NET from "vanta/dist/vanta.net.min";

const Net = ({ children, className, setMounted, mounted }) => {
  const { theme } = useTheme();
  const [vantaEffect, setVantaEffect] = useState(null);
  // const [mounted, setMounted] = useState(false);
  const myRef = useRef(null);

  useEffect(() => {
    let vantaInstance;
    if (myRef.current && !vantaEffect) {
      if (theme === "light") {
        vantaInstance = NET({
          el: myRef.current,
          color: 0xcdbd9,
          THREE: THREE,
          backgroundColor: 0xf5f5f5,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 0,
          minWidth: 0,
          scale: 1.0,
          scaleMobile: 1.0,
        });
      } else {
        // Tambahkan pengecekan apakah myRef.current tidak null sebelum inisialisasi NET

        vantaInstance = NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          THREE: THREE,
          color: 0x810c,
          backgroundColor: 0x212121,
          gyroControls: false,
          minHeight: 0,
          minWidth: 0,
          scale: 1.0,
          scaleMobile: 1.0,
        });
      }
      setVantaEffect(vantaInstance);
    }

    setMounted(true);

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
        setMounted(false);
      }
    };
  }, [mounted, vantaEffect]);

  useEffect(() => {
    console.log(theme);
    console.log("Terapgngi'");
    if (myRef.current && vantaEffect) {
      if (theme === "light") {
        vantaEffect.setOptions({
          color: 0xcdbd9,
          backgroundColor: 0xf5f5f5,
        });
      } else {
        // Tambahkan pengecekan apakah myRef.current tidak null sebelum inisialisasi NET
        console.log("KONTOL");
        vantaEffect.setOptions({
          color: 0x61c434,
          backgroundColor: 0x212121,
        });
      }
    }
  }, [theme, vantaEffect]);

  if (!mounted) return null;
  return (
    <div
      ref={myRef}
      className={`${
        theme == "light" ? styles.netLight : styles.netDark
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Net;
