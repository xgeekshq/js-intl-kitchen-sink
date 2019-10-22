import {
  LOCALE_CHANGE,
  TYPE_CHANGE,
  LOCALE_MATCHER_CHANGE,
  STYLE_CHANGE,
  RESET,
} from './constants';

export const INITIAL_STATE = {
  locale: undefined,
  options: {
    localeMatcher: undefined,
    type: undefined,
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
    case TYPE_CHANGE:
      return {
        ...state,
        options: {
          ...state.options,
          type: payload.type,
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
