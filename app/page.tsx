"use client";
import HomePage from "@/Components/HomePage";
import Service from "@/Components/Service";
import { useEffect, useRef } from "react";

export default function Home() {
  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let locomotiveScroll: LocomotiveScroll | null = null;

    if (typeof window !== "undefined" && scrollContainerRef.current) {
      (async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;

        locomotiveScroll = new LocomotiveScroll({
          el: scrollContainerRef.current as HTMLElement,
          smooth: true,
          multiplier: 1.2,
        });
      })();
    }

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []);
  return (
    <main>
      <HomePage />
      <Service />
    </main>
  );
}
