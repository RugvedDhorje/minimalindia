"use client";
import HomePage from "@/Components/HomePage";
import Service from "@/Components/Service";
import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

export default function Home() {
  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);
  // const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  // useEffect(() => {
  //   let locomotiveScroll: LocomotiveScroll | null = null;

  //   if (typeof window !== "undefined" && scrollContainerRef.current) {
  //     (async () => {
  //       const LocomotiveScroll = (await import("locomotive-scroll")).default;

  //       locomotiveScroll = new LocomotiveScroll({
  //         el: scrollContainerRef.current as HTMLElement,
  //         smooth: true,
  //         multiplier: 1.2,
  //       });
  //     })();
  //   }

  //   return () => {
  //     if (locomotiveScroll) {
  //       locomotiveScroll.destroy();
  //     }
  //   };
  // }, []);
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // if (!isClient) return null; // Avoid rendering on the server side
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let scrollbar: any = null;

    if (scrollContainerRef.current) {
      scrollbar = Scrollbar.init(scrollContainerRef.current, {
        damping: 0.1, // adjust scrolling speed
      });
    }

    return () => {
      if (scrollbar) {
        scrollbar.destroy();
      }
    };
  }, []);
  return (
    <main ref={scrollContainerRef}>
      <HomePage />
      <Service />
    </main>
  );
}
