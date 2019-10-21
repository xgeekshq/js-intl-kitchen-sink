import {
  LOCALE_CHANGE,
  LOCALE_MATCHER_CHANGE,
  TYPE_CHANGE,
  STYLE_CHANGE,
  RESET,
} from './constants';

export const localeChange = locale => ({
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

export const typeChange = type => ({
  type: TYPE_CHANGE,
  payload: {
    type,
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
