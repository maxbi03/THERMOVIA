"use client";

/**
 * Bandeau météo de l'accueil : température réelle mesurée par MétéoSuisse
 * (station de Pully), rafraîchie automatiquement.
 * Tant qu'aucune mesure valide n'est disponible (chargement, source hors
 * ligne, données périmées), le bandeau ne s'affiche pas : jamais de
 * température inventée ni de mention de source sans valeur derrière.
 */
import { useEffect, useState } from "react";
import {
  fetchLatestTemperature,
  formatCelsius,
  formatMeasuredAt,
  METEO_STATION,
  type Measure,
} from "@/lib/meteo";

/** Cadence de publication des mesures MétéoSuisse : 10 minutes. */
const REFRESH_MS = 10 * 60 * 1000;

export default function MeteoLive() {
  const [measure, setMeasure] = useState<Measure | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      try {
        const latest = await fetchLatestTemperature(controller.signal);
        if (latest) setMeasure(latest);
      } catch {
        // Source injoignable : on conserve l'état précédent, sans erreur visible.
      }
    };

    load();
    const timer = setInterval(load, REFRESH_MS);
    return () => {
      controller.abort();
      clearInterval(timer);
    };
  }, []);

  if (!measure) return null;

  return (
    <div className="hidden items-center gap-3.5 font-mono text-[11px] font-medium tracking-[.1em] text-ink/50 md:flex">
      <span>
        {METEO_STATION.displayLocation.toUpperCase()} · {formatCelsius(measure.celsius)}
      </span>
      <span aria-hidden="true" className="h-3 w-px bg-ink/[.14]" />
      <span>
        MESURE MÉTÉOSUISSE · {METEO_STATION.name.toUpperCase()} ·{" "}
        <time dateTime={measure.measuredAt.toISOString()}>
          {formatMeasuredAt(measure.measuredAt)}
        </time>
      </span>
    </div>
  );
}
