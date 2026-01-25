"use client";

import { HealthCheck } from "@/features/health-check";

export function HomeWidget() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Oracle</h1>
        <p className="text-gray-600 mb-8">Full-stack приложение на Next.js и Go</p>
        <HealthCheck />
      </div>
    </div>
  );
}
