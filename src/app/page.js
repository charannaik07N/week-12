"use client";

import { useState } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Counter from "../../components/Counter";
import Input from "../../components/Input";

export default function Home() {
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-12 text-zinc-900">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-8">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            QA Automation Assignment
          </p>
          <h1 className="text-3xl font-semibold">Component Playground</h1>
          <p className="text-sm text-zinc-600">
            Simple, reusable UI components styled with Tailwind CSS.
          </p>
        </header>

        <Card title="Primary Actions" footer="Reusable button variants">
          <div className="flex flex-wrap gap-3">
            <Button label="Primary" />
            <Button label="Outline" variant="outline" />
          </div>
        </Card>

        <Card title="Controlled Input" footer="State updates from user input">
          <Input
            label="Full name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Type your name"
          />
          <p className="mt-3 text-xs text-zinc-500">Current value: {name}</p>
        </Card>

        <Card title="Counter" footer="Interaction testing example">
          <Counter initialCount={0} />
        </Card>
      </main>
    </div>
  );
}
