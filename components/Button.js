"use client";

export default function Button({
  label,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variantClasses = {
    primary:
      "bg-zinc-900 text-white hover:bg-zinc-800 focus-visible:ring-zinc-900 disabled:bg-zinc-400",
    outline:
      "border border-zinc-300 text-zinc-900 hover:bg-zinc-50 focus-visible:ring-zinc-500 disabled:text-zinc-400",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant] || variantClasses.primary}`}
    >
      {label}
    </button>
  );
}
