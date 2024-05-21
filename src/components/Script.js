"use client";

import { useEffect } from "react";

export default function Script() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "../lib/js/script.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
