"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Service = () => {
  const circleRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate the circle's scale based on the scroll
    gsap.to(circleRef.current, {
      scale: 100, // Final size multiplier
      ease: "none", // Linear animation
      scrollTrigger: {
        trigger: containerRef.current, // Element to watch for scroll
        start: "50% center", // Start animation at the top of the page
        end: "bottom top", // End animation when the container leaves the viewport
        scrub: true, // Smooth animation based on scroll position
      },
    });
    gsap.to(textRef.current, {
      scale: 90, // Final size multiplier
      ease: "none", // Linear animation
      scrollTrigger: {
        trigger: textRef.current, // Element to watch for scroll
        start: "50% center", // Start animation at the top of the page
        end: "bottom top", // End animation when the container leaves the viewport
        scrub: true, // Smooth animation based on scroll position
      },
    });
  }, []);
  return (
    <div>
      <div
        ref={containerRef}
        className="max-w-screen-2xl w-full mx-auto rounded-t-3xl pb-40 overflow-hidden"
      >
        <h1 className="text-center text-[90px] font-bold text-gray-700 leading-none pt-[200px] pb-[150px]">
          Embrace the future of <br /> urban mobility
        </h1>
        <div className="w-10/12 mx-auto flex flex-wrap mb-10 relative">
          {/* Circle in the middle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              ref={circleRef}
              className="w-14 h-14 bg-gray-700 rounded-full flex justify-center items-center"
            >
              <h1 ref={textRef} className="text-white">
                minimal
              </h1>
            </div>
          </div>

          {/* Content Divs */}
          <div className="w-1/2">
            <div className="p-[100px] w-5/6 mx-auto border-r border-b border-gray-700 rounded-br-[70px]">
              <h4 className="text-[30px] font-semibold ">
                Stress-free service
              </h4>
              <p className="text-[18px]">
                Unlock effortless mobility-from seamless registration to
                all-inclusive maintenance, we handle the details so you enjoy
                the ride.
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <div className="p-[100px] w-5/6 mx-auto">
              <h4 className="text-[30px] font-semibold ">
                Stress-free service
              </h4>
              <p className="text-[18px]">
                Unlock effortless mobility-from seamless registration to
                all-inclusive maintenance, we handle the details so you enjoy
                the ride.
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <div className="p-[100px] w-5/6 mx-auto">
              <h4 className="text-[30px] font-semibold ">
                Stress-free service
              </h4>
              <p className="text-[18px]">
                Unlock effortless mobility-from seamless registration to
                all-inclusive maintenance, we handle the details so you enjoy
                the ride.
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <div className="p-[100px] w-5/6 mx-auto border-l border-t border-gray-700 rounded-tl-[70px]">
              <h4 className="text-[30px] font-semibold ">
                Stress-free service
              </h4>
              <p className="text-[18px]">
                Unlock effortless mobility-from seamless registration to
                all-inclusive maintenance, we handle the details so you enjoy
                the ride.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
