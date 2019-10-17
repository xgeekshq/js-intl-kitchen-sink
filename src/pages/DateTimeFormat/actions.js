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
  RESET,
} from './constants';

export const localeChange = locale => ({
  type: LOCALE_CHANGE,
  payload: {
    locale,
  },
});

export const dateStyleChange = dateStyle => ({
  type: DATE_STYLE_CHANGE,
  payload: {
    dateStyle,
  },
});

export const timeStyleChange = timeStyle => ({
  type: TIME_STYLE_CHANGE,
  payload: {
    timeStyle,
  },
});

export const localMatcherChange = localeMatcher => ({
  type: LOCALE_MATCHER_CHANGE,
  payload: {
    localeMatcher,
  },
});

export const timeZoneChange = timeZone => ({
  type: TIME_ZONE_CHANGE,
  payload: {
    timeZone,
  },
});

export const hour12Change = hour12 => ({
  type: HOUR12_CHANGE,
  payload: {
    hour12,
  },
});

export const hourCycleChange = hourCycle => ({
  type: HOUR_CYCLE_CHANGE,
  payload: {
    hourCycle,
  },
});

export const formatMatcherChange = formatMatcher => ({
  type: FORMAT_MATCHER_CHANGE,
  payload: {
    formatMatcher,
  },
});

export const weekDayChange = weekDay => ({
  type: WEEK_DAY_CHANGE,
  payload: {
    weekDay,
  },
});

export const eraChange = era => ({
  type: ERA_CHANGE,
  payload: {
    era,
  },
});

export const yearChange = year => ({
  type: YEAR_CHANGE,
  payload: {
    year,
  },
});

export const monthChange = month => ({
  type: MONTH_CHANGE,
  payload: {
    month,
  },
});

export const dayChange = day => ({
  type: DAY_CHANGE,
  payload: {
    day,
  },
});

export const hourChange = hour => ({
  type: HOUR_CHANGE,
  payload: {
    hour,
  },
});

export const minuteChange = minute => ({
  type: MINUTE_CHANGE,
  payload: {
    minute,
  },
});

export const secondChange = second => ({
  type: SECOND_CHANGE,
  payload: {
    second,
  },
});

export const timeZoneNameChange = timeZoneName => ({
  type: TIME_ZONE_NAME_CHANGE,
  payload: {
    timeZoneName,
  },
});

export const reset = () => ({
  type: RESET,
});
