"use client";

import { useId } from "react";

export default function Input({
  label,
  value,
  onChange,
  placeholder = "",
  id,
}) {
  const inputId = id || useId();

  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={inputId} className="text-sm font-medium text-zinc-800">
        {label}
      </label>
      <input
        id={inputId}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="rounded-md border border-zinc-300 px-3 py-2 text-sm text-zinc-900 shadow-sm focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-200"
      />
    </div>
  );
}
