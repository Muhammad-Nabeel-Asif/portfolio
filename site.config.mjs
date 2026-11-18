// The only two values that change between hosts.
// Override either one at build time: SITE_URL=https://example.com BASE_PATH=/portfolio/ npm run build

/** Absolute origin the site is served from, without a path. Used for canonical and social preview URLs. */
export const SITE_URL = process.env.SITE_URL ?? 'https://nabeelasif.cloud';

/** Path the site lives under. "/" for a domain root, "/portfolio/" for a sub-path. */
export const BASE_PATH = process.env.BASE_PATH ?? '/';
