"use client";

import React, { useEffect, useState } from "react";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const W = 80;
const H = 40;
const PI = 3.14159265;

const ramp = ".,-~:;=!*#$@";

const COLOR_PALETTE = [
  "#e53935",
  "#43a047",
  "#fbc02d",
  "#1e88e5",
  "#8e24aa",
  "#fb8c00",
  "#00897b",
  "#c0ca33",
];

const vadd = (a, b) => ({ x: a.x + b.x, y: a.y + b.y, z: a.z + b.z });
const vmul = (v, s) => ({ x: v.x * s, y: v.y * s, z: v.z * s });
const vdot = (a, b) => a.x * b.x + a.y * b.y + a.z * b.z;
const vnorm = (v) => {
  const r = Math.sqrt(vdot(v, v));
  return vmul(v, 1.0 / r);
};
const cross = (a, b) => ({
  x: a.y * b.z - a.z * b.y,
  y: a.z * b.x - a.x * b.z,
  z: a.x * b.y - a.y * b.x,
});

const KnotAnimation = ({
  color = false,
  speedA = 0.04,
  speedB = 0.02
}) => {
  const [frame, setFrame] = useState([]);
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);

  useEffect(() => {
    const renderFrame = () => {
      const screen = Array(W * H).fill(' ');
      const colorIdx = Array(W * H).fill(-1);
      const zbuf = Array(W * H).fill(0);

      const light = vnorm({ x: -1, y: 1, z: -1 });

      const cA = Math.cos(A), sA = Math.sin(A);
      const cB = Math.cos(B), sB = Math.sin(B);

      let tubeIdx = 0;
      for (let u = 0; u < 2 * PI; u += 0.06, tubeIdx++) {
        const cu = u, cu2 = 2 * cu, cu3 = 3 * cu;
        const C = {
          x: Math.sin(cu) + 2 * Math.sin(cu2),
          y: Math.cos(cu) - 2 * Math.cos(cu2),
          z: -Math.sin(cu3)
        };

        const T = vnorm({
          x: Math.cos(cu) + 4 * Math.cos(cu2),
          y: -Math.sin(cu) + 4 * Math.sin(cu2),
          z: -3 * Math.cos(cu3)
        });

        const up = Math.abs(vdot(T, { x: 0, y: 1, z: 0 })) < 0.99
          ? { x: 0, y: 1, z: 0 }
          : { x: 1, y: 0, z: 0 };
        const N = vnorm(cross(T, up));
        const Bn = cross(T, N);

        const R = 0.3;
        const segColorIdx = tubeIdx % COLOR_PALETTE.length;

        for (let v = 0; v < 2 * PI; v += 0.2) {
          const cv = Math.cos(v), sv = Math.sin(v);
          const offs = vadd(vmul(N, cv * R), vmul(Bn, sv * R));
          const p = vadd(C, offs);

          const x1 = p.x;
          const y1 = p.y * cA - p.z * sA;
          const z1 = p.y * sA + p.z * cA;

          const x2 = x1 * cB + z1 * sB;
          const y2 = y1;
          const z2 = -x1 * sB + z1 * cB + 5.0;

          const invz = 1.0 / z2;
          const px = Math.floor(W / 2 + 40 * x2 * invz);
          const py = Math.floor(H / 2 - 20 * y2 * invz);

          if (px >= 0 && px < W && py >= 0 && py < H) {
            const idx = px + py * W;
            if (invz > zbuf[idx]) {
              zbuf[idx] = invz;

              const n = vnorm(offs);
              const nx1 = n.x;
              const ny1 = n.y * cA - n.z * sA;
              const nz1 = n.y * sA + n.z * cA;

              const nx2 = nx1 * cB + nz1 * sB;
              const ny2 = ny1;
              const nz2 = -nx1 * sB + nz1 * cB;

              const nr = { x: nx2, y: ny2, z: nz2 };
              const lum = Math.max(0, vdot(nr, light));
              const ci = Math.floor(lum * (ramp.length - 1));
              screen[idx] = ramp[ci];
              colorIdx[idx] = segColorIdx;
            }
          }
        }
      }

      const frameLines = [];
      for (let y = 0; y < H; y++) {
        const line = [];
        for (let x = 0; x < W; x++) {
          const idx = x + y * W;
          if (screen[idx] === ' ') {
            line.push(<span key={x}> </span>);
          } else if (color) {
            line.push(
              <span key={x} style={{ color: COLOR_PALETTE[colorIdx[idx]] }}>{screen[idx]}</span>
            );
          } else {
            line.push(<span key={x}>{screen[idx]}</span>);
          }
        }
        frameLines.push(<div key={y}>{line}</div>);
      }
      setFrame(frameLines);
    };

    const interval = setInterval(() => {
      setA(prev => prev + speedA);
      setB(prev => prev + speedB);
      renderFrame();
    }, 30);

    return () => clearInterval(interval);
  }, [A, B, color, speedA, speedB]);

  return (
    <pre className="font-mono text-xs whitespace-pre leading-none text-center">
      {frame}
    </pre>
  );
};

const NotFound = () => {
  return (
    <div className="relative flex h-full w-full items-center pt-20 sm:pt-24 lg:pt-32">
      <FadeIn className="flex w-full flex-col items-center px-6">
        <p className="font-display text-6xl font-bold text-neutral-950 sm:text-8xl lg:text-9xl">
          404
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold text-neutral-950 sm:text-4xl lg:text-5xl">
          Page not found
        </h1>
        <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-40">
          <KnotAnimation color={true} speedA={0.03} speedB={0.015} />
        </div>
        <p className="mt-4 text-sm text-neutral-600">
          Sorry, we could not find the page you are looking for.
        </p>
        <Link
          href="/"
          className="mt-4 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
        >
          Go to the home page
        </Link>
      </FadeIn>
    </div>
  );
};

export default NotFound;
