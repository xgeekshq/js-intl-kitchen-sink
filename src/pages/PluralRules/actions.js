import {
  LOCALE_CHANGE,
  LOCALE_MATCHER_CHANGE,
  RESET,
  TYPE_CHANGE,
  MINIMUM_INTEGER_DIGITS_CHANGE,
  MINIMUM_FRACTION_DIGITS_CHANGE,
  MAXIMUM_FRACTION_DIGITS_CHANGE,
  MINIMUM_SIGNIFICANT_DIGITS_CHANGE,
  MAXIMUM_SIGNIFICANT_DIGITS_CHANGE,
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

export const typeChange = type => ({
  type: TYPE_CHANGE,
  payload: {
    type,
  },
});

export const minimumIntegerDigitsChange = minimumIntegerDigits => ({
  type: MINIMUM_INTEGER_DIGITS_CHANGE,
  payload: {
    minimumIntegerDigits,
  },
});

export const minimumFractionDigitsChange = minimumFractionDigits => ({
  type: MINIMUM_FRACTION_DIGITS_CHANGE,
  payload: {
    minimumFractionDigits,
  },
});

export const maximumFractionDigitsChange = maximumFractionDigits => ({
  type: MAXIMUM_FRACTION_DIGITS_CHANGE,
  payload: {
    maximumFractionDigits,
  },
});

export const minimumSignificantDigitsChange = minimumSignificantDigits => ({
  type: MINIMUM_SIGNIFICANT_DIGITS_CHANGE,
  payload: {
    minimumSignificantDigits,
  },
});

export const maximumSignificantDigitsChange = maximumSignificantDigits => ({
  type: MAXIMUM_SIGNIFICANT_DIGITS_CHANGE,
  payload: {
    maximumSignificantDigits,
  },
});

export const reset = () => ({
  type: RESET,
});
