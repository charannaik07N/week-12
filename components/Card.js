"use client";

export default function Card({ title, children, footer }) {
  return (
    <section className="w-full rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-zinc-900">{title}</h2>
      </div>
      <div className="text-sm text-zinc-700">{children}</div>
      {footer ? (
        <div className="mt-4 border-t border-zinc-100 pt-4 text-xs text-zinc-500">
          {footer}
        </div>
      ) : null}
    </section>
  );
}
