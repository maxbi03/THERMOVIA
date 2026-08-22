/**
 * Température en direct — données ouvertes MétéoSuisse (OGD).
 *
 * Source : réseau de mesure automatique SMN, station VEV (Vevey / Corseaux,
 * VD, 405 m), la station la plus proche du lieu de stock. Le fichier « _now »
 * contient les valeurs toutes les 10 minutes du jour courant ; on lit la
 * dernière ligne renseignée — cette station publie le vent avant la
 * température, la ligne la plus récente est donc souvent incomplète.
 *
 * Licence CC-BY : la mention « MétéoSuisse » doit rester visible à l'écran.
 * Le service autorise l'appel direct depuis le navigateur
 * (Access-Control-Allow-Origin: *) — pas de backend nécessaire, le site
 * reste entièrement statique.
 */

export const METEO_STATION = {
  abbr: "VEV",
  name: "Vevey / Corseaux",
  /** Libellé affiché : la région couverte, pas le nom exact de la station. */
  displayLocation: "Vevey",
  csvUrl: "https://data.geo.admin.ch/ch.meteoschweiz.ogd-smn/vev/ogd-smn_vev_t_now.csv",
} as const;

/** Colonne « température de l'air à 2 m, valeur instantanée » du jeu SMN. */
const TEMP_FIELD = "tre200s0";
const TIME_FIELD = "reference_timestamp";

/** Au-delà de ce délai, la mesure est jugée périmée (panne de station). */
const MAX_AGE_MS = 3 * 60 * 60 * 1000;

export interface Measure {
  celsius: number;
  measuredAt: Date;
}

/** Parse « JJ.MM.AAAA HH:MM » — les horodatages du jeu OGD sont en UTC. */
function parseTimestamp(raw: string): Date | null {
  const m = /^(\d{2})\.(\d{2})\.(\d{4}) (\d{2}):(\d{2})$/.exec(raw.trim());
  if (!m) return null;
  const [, day, month, year, hour, minute] = m;
  return new Date(Date.UTC(+year, +month - 1, +day, +hour, +minute));
}

/**
 * Extrait la dernière température valide du CSV.
 * Retourne null si le format a changé, si aucune valeur n'est renseignée
 * ou si la mesure la plus récente est trop ancienne.
 */
export function parseLatestTemperature(csv: string, now: number = Date.now()): Measure | null {
  const lines = csv.trim().split(/\r?\n/);
  if (lines.length < 2) return null;

  const header = lines[0].split(";");
  const tempIndex = header.indexOf(TEMP_FIELD);
  const timeIndex = header.indexOf(TIME_FIELD);
  if (tempIndex === -1 || timeIndex === -1) return null;

  // Les lignes les plus récentes peuvent être publiées avec des champs vides :
  // on remonte jusqu'à la dernière température effectivement mesurée.
  for (let i = lines.length - 1; i >= 1; i--) {
    const cells = lines[i].split(";");
    const rawTemp = cells[tempIndex]?.trim();
    if (!rawTemp) continue;

    const celsius = Number(rawTemp);
    const measuredAt = parseTimestamp(cells[timeIndex] ?? "");
    if (!Number.isFinite(celsius) || !measuredAt) continue;

    return now - measuredAt.getTime() > MAX_AGE_MS ? null : { celsius, measuredAt };
  }
  return null;
}

/** Récupère la dernière mesure ; null si la source est indisponible. */
export async function fetchLatestTemperature(signal?: AbortSignal): Promise<Measure | null> {
  const response = await fetch(METEO_STATION.csvUrl, { signal, cache: "no-store" });
  if (!response.ok) return null;
  return parseLatestTemperature(await response.text());
}

/** « 21,8 °C » — séparateur décimal suisse romand. */
export function formatCelsius(celsius: number): string {
  return `${celsius.toFixed(1).replace(".", ",")} °C`;
}

/** Heure suisse de la mesure (le jeu OGD étant horodaté en UTC). */
export function formatMeasuredAt(date: Date): string {
  return date.toLocaleTimeString("fr-CH", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Zurich",
  });
}
