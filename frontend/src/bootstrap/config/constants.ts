export const URL_PREFIX = process.env.PUBLIC_URL;
export const API_PREFIX =
  process.env.NODE_ENV !== 'development'
    ? `${process.env.PUBLIC_URL}/`
    : `${process.env.PUBLIC_URL}/data`;
