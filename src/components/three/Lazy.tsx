"use client";

import dynamic from "next/dynamic";

// WebGL scene is client-only; keep it out of the server bundle.
export const KnotScene = dynamic(() => import("./KnotScene"), { ssr: false });
