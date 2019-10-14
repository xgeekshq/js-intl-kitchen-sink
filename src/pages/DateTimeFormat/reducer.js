import {
  LOCALE_CHANGE,
  DATE_STYLE_CHANGE,
  TIME_STYLE_CHANGE,
  LOCALE_MATCHER_CHANGE,
  TIME_ZONE_CHANGE,
  HOUR12_CHANGE,
  HOUR_CYCLE_CHANGE,
  FORMAT_MATCHER_CHANGE,
  WEEK_DAY_CHANGE,
  ERA_CHANGE,
  YEAR_CHANGE,
  MONTH_CHANGE,
  DAY_CHANGE,
  HOUR_CHANGE,
  MINUTE_CHANGE,
  SECOND_CHANGE,
  TIME_ZONE_NAME_CHANGE,
} from './constants';

export const INITIAL_STATE = {
  locale: undefined,
  options: {
    dateStyle: undefined,
    timeStyle: undefined,
    localeMatcher: undefined,
    timeZone: undefined,
    hourCycle: undefined,
    formatMatcher: undefined,
    weekDay: undefined,
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
    case TIME_STYLE_CHANGE:
      return {
        ...state,
        options: {
          ...state.options,
          timeStyle: payload.timeStyle,
        },
      };
    case LOCALE_MATCHER_CHANGE:
      return {
        ...state,
        options: {
          ...state.options,
          localeMatcher: payload.localeMatcher,
        },
      };
    case TIME_ZONE_CHANGE:
      return {
        ...state,
        options: {
          ...state.options,
          timeZone: payload.timeZone,
        },
      };
    case HOUR12_CHANGE:
      return {
        ...state,
        options: {
          ...state.options,
          hour12: payload.hour12,
        },
      };
    case HOUR_CYCLE_CHANGE:
      return {
        ...state,
        options: {
          ...state.options,
          hourCycle: payload.hourCycle,
        },
      };
    case FORMAT_MATCHER_CHANGE:
      return {
        ...state,
        options: {
          ...state.options,
          formatMatcher: payload.formatMatcher,
        },
      };
    case WEEK_DAY_CHANGE:
      return {
        ...state,
        options: {
          ...state.options,
          weekDay: payload.weekDay,
        },
      };
    case ERA_CHANGE:
      return {
        ...state,
        options: {
          ...state.options,
          era: payload.era,
        },
      };
    case YEAR_CHANGE:
      return {
        ...state,
        options: {
          ...state.options,
          year: payload.year,
        },
      };
    case MONTH_CHANGE:
      return {
        ...state,
        options: {
          ...state.options,
          month: payload.month,
        },
      };
    case DAY_CHANGE:
      return {
        ...state,
        options: {
          ...state.options,
          day: payload.day,
        },
      };
    case HOUR_CHANGE:
      return {
        ...state,
        options: {
          ...state.options,
          hour: payload.hour,
        },
      };
    case MINUTE_CHANGE:
      return {
        ...state,
        options: {
          ...state.options,
          minute: payload.minute,
        },
      };
    case SECOND_CHANGE:
      return {
        ...state,
        options: {
          ...state.options,
          second: payload.second,
        },
      };
    case TIME_ZONE_NAME_CHANGE:
      return {
        ...state,
        options: {
          ...state.options,
          timeZoneName: payload.timeZoneName,
        },
      };
    default:
      return state;
  }
};
