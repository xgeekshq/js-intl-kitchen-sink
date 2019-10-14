import { LOCALE_CHANGE, DATE_STYLE_CHANGE } from './constants';

export const INITIAL_STATE = {
  locale: undefined,
  options: {
    dateStyle: undefined,
    timeStyle: undefined,
    localeMatcher: undefined,
    timeZone: undefined,
    hourCycle: undefined,
    formatMatcher: undefined,
    weekday: undefined,
    era: undefined,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
    timeZoneName: undefined,
  },
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case LOCALE_CHANGE:
      return {
        ...state,
        locale: payload.locale,
      };
    case DATE_STYLE_CHANGE:
      return {
        ...state,
        options: {
          ...state.options,
          dateStyle: payload.dateStyle,
        },
      };
    default:
      return state;
  }
};
