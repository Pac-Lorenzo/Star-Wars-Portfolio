"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";

type ThemeName = "dark-side" | "light-side";
type GlobeConfig = Omit<COBEOptions, "baseColor" | "glowColor" | "devicePixelRatio">;

const GLOBE_CONFIG: GlobeConfig = {
  width: 800,
  height: 800,
  onRender: () => {},
  phi: 0,
  theta: 0.25,
  dark: 1,
  diffuse: 0.2,
  mapSamples: 30000,
  mapBrightness: 6,
  markerColor: [2.6, 2.6, 2.6],
  markers: [
    { location: [40.0379, -75.3433], size: 0.02 }, // Villanova
    { location: [30.2672, -97.7431], size: 0.02 }, // Austin (Ping)
    { location: [40.7128, -74.006], size: 0.02, color: [3, 3, 3] }, // NYC
    { location: [19.4326, -99.1332], size: 0.02 }, // Mexico City
  ],
};

export default function Globe({
  config = GLOBE_CONFIG,
}: {
  config?: GlobeConfig;
}) {
  const [theme, setTheme] = useState<ThemeName>("dark-side");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const dprRef = useRef(1);
  type GlobeRenderState = Parameters<NonNullable<COBEOptions["onRender"]>>[0];

  const onRender = useCallback((state: GlobeRenderState) => {
    phiRef.current += 0.003;
    state.phi = phiRef.current;
    state.width = widthRef.current * dprRef.current;
    state.height = widthRef.current * dprRef.current;
  }, []);

  useEffect(() => {
    const updateTheme = () => {
      const currentTheme =
        document.documentElement.dataset.theme === "light-side"
          ? "light-side"
          : "dark-side";

      setTheme(currentTheme);
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        widthRef.current = canvasRef.current.offsetWidth;
        dprRef.current = Math.min(window.devicePixelRatio, 2);
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const baseColor: [number, number, number] =
      theme === "light-side" ? [0.2, 0.5, 1] : [1, 0.2, 0.2];

    const glowColor: [number, number, number] =
      theme === "light-side" ? [0.4, 0.7, 1] : [1, 0.3, 0.3];

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      devicePixelRatio: dprRef.current,
      baseColor,
      glowColor,
      width: widthRef.current * dprRef.current,
      height: widthRef.current * dprRef.current,
      onRender,
    },);

    canvasRef.current!.style.opacity = "1";

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [config, onRender, theme]);

  return (
    <div className="relative aspect-square w-[300px] md:w-[380px] lg:w-[420px]">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-0 transition-opacity duration-700"
      />
    </div>
  );
}
