"use client";
import { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function HomePage() {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!bgRef.current || !textRef.current) return;

    // Parallax effect for the background div
    gsap.to(bgRef.current, {
      yPercent: -20, // Moves the background upwards slower
      ease: "none",
      scrollTrigger: {
        trigger: bgRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true, // Smooth scrolling effect
      },
    });

    // Faster scrolling for the text div
    gsap.to(textRef.current, {
      yPercent: -250, // Moves the text upwards faster
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);
  return (
    <div className="relative min-h-screen h-full">
      {/* Animation */}

      <div className="absolute inset-0 z-50 h-full w-full overflow-hidden">
        {/* Top Div */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[#292929] animate-slide-up"></div>
        {/* Bottom Div */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#292929] animate-slide-down"></div>
      </div>

      {/* Main Content */}
      <div className="inset-0 min-h-screen overflow-y-auto">
        <div
          ref={bgRef}
          className="relative w-full h-[140vh] bg-cover bg-center rounded-b-3xl mb-10 shadow-2xl"
          style={{
            backgroundImage: `url("/homeBg.jpg")`,
          }}
        >
          <Navbar />
          <div
            ref={textRef}
            className="max-w-screen-2xl mx-auto absolute left-96 top-52"
          >
            <h1 className="text-[#292929] text-[80px] leading-none font-bold mt-14 text-center">
              Green Mobility For
              <br /> Professionals
            </h1>
            <div className="flex justify-center mt-14">
              <button className="text-[16px] font-normal px-4 py-2 bg-[#292929] rounded-md text-white">
                ORDER YODA TODAY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
