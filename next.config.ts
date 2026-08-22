import type { NextConfig } from "next";
import { DEFAULT_LOCALE } from "./lib/i18n/config";

/**
 * Configuration Next.js — Thermovia V1
 * Site statique (SSG), pas de backend e-commerce pour cette version.
 * Toutes les pages vivent sous /fr, /de ou /it : la racine renvoie vers la
 * langue par défaut.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/", destination: `/${DEFAULT_LOCALE}`, permanent: false },
    ];
  },
};

export default nextConfig;
