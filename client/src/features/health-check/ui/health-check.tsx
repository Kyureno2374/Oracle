"use client";

import { useState } from "react";
import { Button } from "@/shared/ui/button";
import { apiClient } from "@/shared/api/client";

export function HealthCheck() {
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const checkHealth = async () => {
    setLoading(true);
    try {
      const response = await apiClient.get("/health");
      setStatus(`✓ ${response.data.message}`);
    } catch (error) {
      setStatus("✗ Ошибка подключения к серверу");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <Button onClick={checkHealth} disabled={loading}>
        {loading ? "Проверка..." : "Проверить API"}
      </Button>
      {status && (
        <p className={`text-sm ${status.startsWith("✓") ? "text-green-600" : "text-red-600"}`}>
          {status}
        </p>
      )}
    </div>
  );
}
