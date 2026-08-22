"use client";

/**
 * Sélecteur de langue (FR / DE / IT).
 *
 * Conserve la page courante en changeant seulement le segment de langue :
 * depuis /de/sav, cliquer sur IT mène à /it/sav, pas à l'accueil.
 * Les paramètres d'URL (?cat=, ?q=) sont préservés eux aussi.
 */
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import {
  LOCALES,
  LOCALE_LABELS,
  switchLocalePath,
  type Dictionary,
  type Locale,
} from "@/lib/i18n";

export default function LocaleSwitcher({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.toString();

  return (
    <div
      className="flex items-center gap-1 text-[12px] font-medium"
      role="group"
      aria-label={dict.header.languageAria}
    >
      {LOCALES.map((target, i) => {
        const href = `${switchLocalePath(pathname, target)}${query ? `?${query}` : ""}`;
        const isCurrent = target === locale;
        return (
          <span key={target} className="flex items-center">
            {i > 0 && (
              <span aria-hidden="true" className="mr-1 text-ink/25">
                ·
              </span>
            )}
            <Link
              href={href}
              hrefLang={target}
              aria-current={isCurrent ? "true" : undefined}
              title={LOCALE_LABELS[target].long}
              className={isCurrent ? "text-ink" : "text-ink/45 transition-colors hover:text-ink"}
            >
              {LOCALE_LABELS[target].short}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
