import type { Config } from './types';

const { API_URL, API_TOKEN } = process.env;

const config: Config = {
  apiUrl: API_URL || 'http://localhost:3100',
  apiToken: API_TOKEN,
};

export { config };
