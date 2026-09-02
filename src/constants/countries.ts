export type Country = {
  /** ISO 3166-1 alpha-2 code. Also drives the flag artwork. */
  iso2: string;
  name: string;
  /** International dialling prefix, including the leading "+". */
  dialCode: string;
  /** Expected national number length, used for light validation. */
  nationalDigits: number;
};

/**
 * Curated shortlist of country codes for the phone login field. Ordered with
 * the likeliest markets first. Extend as the app rolls out to new regions.
 */
export const COUNTRIES: readonly Country[] = [
  { iso2: 'IN', name: 'India', dialCode: '+91', nationalDigits: 10 },
  { iso2: 'US', name: 'United States', dialCode: '+1', nationalDigits: 10 },
  { iso2: 'GB', name: 'United Kingdom', dialCode: '+44', nationalDigits: 10 },
  {
    iso2: 'AE',
    name: 'United Arab Emirates',
    dialCode: '+971',
    nationalDigits: 9,
  },
  { iso2: 'AU', name: 'Australia', dialCode: '+61', nationalDigits: 9 },
  { iso2: 'SG', name: 'Singapore', dialCode: '+65', nationalDigits: 8 },
  { iso2: 'CA', name: 'Canada', dialCode: '+1', nationalDigits: 10 },
] as const;

export const DEFAULT_COUNTRY: Country =
  COUNTRIES.find(c => c.iso2 === 'IN') ?? COUNTRIES[0];

export function findCountryByIso2(iso2: string | null | undefined): Country {
  if (iso2 == null) return DEFAULT_COUNTRY;
  const match = COUNTRIES.find(c => c.iso2 === iso2.toUpperCase());
  return match ?? DEFAULT_COUNTRY;
}
