import {
  LOCALE_CHANGE,
  LOCALE_MATCHER_CHANGE,
  NUMERIC_CHANGE,
  STYLE_CHANGE,
  RESET,
} from './constants';

export const localeChange = (locale, nu, ca, hc) => ({
  type: LOCALE_CHANGE,
  payload: {
    locale,
  },
});

export const localeMatcherChange = localeMatcher => ({
  type: LOCALE_MATCHER_CHANGE,
  payload: {
    localeMatcher,
  },
});

export const numericChange = numeric => ({
  type: NUMERIC_CHANGE,
  payload: {
    numeric,
  },
});

export const styleChange = style => ({
  type: STYLE_CHANGE,
  payload: {
    style,
  },
});

export const reset = () => ({
  type: RESET,
});
