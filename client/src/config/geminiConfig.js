// Security warning:
// Exposing a Gemini API key in a public static React frontend allows anyone to
// extract and reuse that key. Prefer a secure backend proxy in production.
// For local/static deployment, keep the key out of source control and inject
// it only through the environment or a private configuration file.

const normalizeEnvValue = (value) => (typeof value === 'string' ? value.trim() : '');

export const GEMINI_API_KEY = normalizeEnvValue(process.env.REACT_APP_GEMINI_API_KEY);
export const GEMINI_MODEL = normalizeEnvValue(process.env.REACT_APP_GEMINI_MODEL) || 'gemini-3.6-flash';

// The user provided a key in the request; keep it in the browser session only
// through an environment variable file and never commit it.
export const FALLBACK_GREETING =
  'Thank you for contacting ROOBOTEC. Tell us about your business goals and we will help identify the right software, AI, and automation solution.';
