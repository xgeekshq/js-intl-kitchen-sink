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

export const INITIAL_STATE = {
  locale: undefined,
  options: {
    localeMatcher: undefined,
    type: undefined,
    minimumIntegerDigits: undefined,
    minimumFractionDigits: undefined,
    maximumFractionDigits: undefined,
    minimumSignificantDigits: undefined,
    maximumSignificantDigits: undefined,
  },
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case LOCALE_CHANGE:
      return {
        ...state,
        locale: payload.locale,
      };
    case LOCALE_MATCHER_CHANGE:
      return {
        ...state,
        options: {
          ...state.options,
          localeMatcher: payload.localeMatcher,
        },
      };
    case TYPE_CHANGE:
    case MINIMUM_INTEGER_DIGITS_CHANGE:
    case MINIMUM_FRACTION_DIGITS_CHANGE:
    case MAXIMUM_FRACTION_DIGITS_CHANGE:
    case MINIMUM_SIGNIFICANT_DIGITS_CHANGE:
    case MAXIMUM_SIGNIFICANT_DIGITS_CHANGE: {
      return {
        ...state,
        options: {
          ...state.options,
          ...payload,
        },
      };
    }
    case RESET:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
