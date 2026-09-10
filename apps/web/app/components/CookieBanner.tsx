"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "bruca-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  function choose(value: "accepted" | "declined") {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 mx-auto flex w-[calc(100%-2rem)] max-w-2xl items-center justify-between gap-4 rounded-lg border border-neutral-200 bg-white p-4 shadow-md">
      <p className="text-sm text-neutral-600">
        We use cookies to improve your experience. See our{" "}
        <Link href="/terms" className="underline">
          terms of service
        </Link>{" "}
        for details.
      </p>
      <div className="flex flex-shrink-0 gap-2">
        <button
          onClick={() => choose("declined")}
          className="rounded-md border border-neutral-300 px-3 py-1.5 text-sm"
        >
          Decline
        </button>
        <button
          onClick={() => choose("accepted")}
          className="rounded-md border border-blue-600 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-800"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
