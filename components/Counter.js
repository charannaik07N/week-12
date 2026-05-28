"use client";

import { useState } from "react";
import Button from "./Button";

export default function Counter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="flex w-full items-center justify-between rounded-lg border border-zinc-200 bg-zinc-50 p-4">
      <div>
        <p className="text-xs uppercase tracking-wide text-zinc-500">Count</p>
        <p className="text-2xl font-semibold text-zinc-900" aria-live="polite">
          {count}
        </p>
      </div>
      <div className="flex items-center gap-2">
        {/* Update count locally for interaction tests. */}
        <Button
          label="-"
          variant="outline"
          onClick={() => setCount((value) => value - 1)}
        />
        <Button label="+" onClick={() => setCount((value) => value + 1)} />
      </div>
    </div>
  );
}
