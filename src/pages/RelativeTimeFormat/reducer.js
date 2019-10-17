import {
  LOCALE_CHANGE,
  NUMERIC_CHANGE,
  LOCALE_MATCHER_CHANGE,
  STYLE_CHANGE,
  RESET,
} from './constants';

export const INITIAL_STATE = {
  locale: undefined,
  options: {
    localeMatcher: undefined,
    numeric: undefined,
    style: undefined,
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
    case NUMERIC_CHANGE:
      return {
        ...state,
        options: {
          ...state.options,
          numeric: payload.numeric,
        },
      };
    case STYLE_CHANGE:
      return {
        ...state,
        options: {
          ...state.options,
          style: payload.style,
        },
      };
    case RESET:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
