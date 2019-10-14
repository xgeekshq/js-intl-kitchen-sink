import { LOCALE_CHANGE, DATE_STYLE_CHANGE } from './constants';

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
