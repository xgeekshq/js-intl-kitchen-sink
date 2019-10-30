import React from 'react';
import style from './styles.module.css';
import { Icon } from 'antd';

const getClassName = text => {
  if (text === '?') {
    return style.backgroundDarkGray;
  } else if (text === 'No') {
    return `${style.backgroundRed} ${style.crossGradient}`;
  } else {
    return style.backgroundGreen;
  }
};

export const columns = [
  {
    dataIndex: 'browser',
    align: 'right',
    render: (text, record) => {
      return {
        children: text,
      };
    },
  },
  {
    title: 'Intl',
    dataIndex: 'intl',
    className: style.rotate,
    align: 'center',
    render: (text, record) => {
      return {
        props: {
          className: `${getClassName(text)} ${style.cellSize}`,
        },
        children: text,
      };
    },
  },
  {
    title: 'Collator',
    dataIndex: 'collator',
    className: style.rotate,
    align: 'center',
    render: (text, record) => {
      return {
        props: {
          className: `${getClassName(text)} ${style.cellSize}`,
        },
        children: text,
      };
    },
  },
  {
    title: 'DateTimeFormat',
    dataIndex: 'dateTimeFormat',
    className: style.rotate,
    align: 'center',
    render: (text, record) => {
      return {
        props: {
          className: `${getClassName(text)} ${style.cellSize}`,
        },
        children: text,
      };
    },
  },
  {
    title: 'ListFormat',
    dataIndex: 'listFormat',
    className: style.rotate,
    align: 'center',
    render: (text, record) => {
      return {
        props: {
          className: `${getClassName(text)} ${style.cellSize}`,
        },
        children: text,
      };
    },
  },
  {
    title: 'Locale',
    dataIndex: 'locale',
    className: style.rotate,
    align: 'center',
    render: (text, record) => {
      return {
        props: {
          className: `${getClassName(text)} ${style.cellSize}`,
        },
        children: text,
      };
    },
  },
  {
    title: 'NumberFormat',
    dataIndex: 'numberFormat',
    className: style.rotate,
    align: 'center',
    render: (text, record) => {
      return {
        props: {
          className: `${getClassName(text)} ${style.cellSize}`,
        },
        children: text,
      };
    },
  },
  {
    title: 'PluralRules',
    dataIndex: 'pluralRules',
    className: style.rotate,
    align: 'center',
    render: (text, record) => {
      return {
        props: {
          className: `${getClassName(text)} ${style.cellSize}`,
        },
        children: text,
      };
    },
  },
  {
    title: 'RelativeTimeFormat',
    dataIndex: 'relativeTimeFormat',
    className: style.rotate,
    align: 'center',
    render: (text, record) => {
      return {
        props: {
          className: `${getClassName(text)} ${style.cellSize}`,
        },
        children: text,
      };
    },
  },
  {
    title: 'getCanonicalLocales',
    dataIndex: 'getCanonicalLocales',
    className: style.rotate,
    align: 'center',
    render: (text, record) => {
      return {
        props: {
          className: `${getClassName(text)} ${style.cellSize}`,
        },
        children: text,
      };
    },
  },
];

export const browserInfo = [
  {
    browser: 'Chrome',
    intl: '24',
    collator: '24',
    dateTimeFormat: '24',
    listFormat: '72',
    locale: '74',
    numberFormat: '24',
    pluralRules: '63',
    relativeTimeFormat: '71',
    getCanonicalLocales: '54',
  },
  {
    browser: 'Edge',
    intl: '12',
    collator: '12',
    dateTimeFormat: '12',
    listFormat: 'No',
    locale: 'No',
    numberFormat: '12',
    pluralRules: '18',
    relativeTimeFormat: 'No',
    getCanonicalLocales: '16',
  },
  {
    browser: 'Firefox',
    intl: '29',
    collator: '29',
    dateTimeFormat: '29',
    listFormat: 'No',
    locale: 'No',
    numberFormat: '29',
    pluralRules: '58',
    relativeTimeFormat: '65',
    getCanonicalLocales: '48',
  },
  {
    browser: 'Internet Explorer',
    intl: '11',
    collator: '11',
    dateTimeFormat: '11',
    listFormat: 'No',
    locale: 'No',
    numberFormat: '11',
    pluralRules: 'No',
    relativeTimeFormat: 'No',
    getCanonicalLocales: 'No',
  },
  {
    browser: 'Opera',
    intl: '15',
    collator: '15',
    dateTimeFormat: '15',
    listFormat: '60',
    locale: 'No',
    numberFormat: '15',
    pluralRules: '50',
    relativeTimeFormat: '58',
    getCanonicalLocales: 'No',
  },
  {
    browser: 'Safari',
    intl: '10',
    collator: '10',
    dateTimeFormat: '10',
    listFormat: 'No',
    locale: 'No',
    numberFormat: '10',
    pluralRules: 'No',
    relativeTimeFormat: 'No',
    getCanonicalLocales: '11',
  },
  {
    browser: 'Android webview',
    intl: '4.4',
    collator: 'No',
    dateTimeFormat: '4.4',
    listFormat: '72',
    locale: '72',
    numberFormat: 'Yes',
    pluralRules: '63',
    relativeTimeFormat: '71',
    getCanonicalLocales: 'No',
  },
  {
    browser: 'Chrome for Android',
    intl: '26',
    collator: '26',
    dateTimeFormat: '26',
    listFormat: '72',
    locale: '74',
    numberFormat: '26',
    pluralRules: '63',
    relativeTimeFormat: '71',
    getCanonicalLocales: 'No',
  },
  {
    browser: 'Firefox for Andrioid',
    intl: '56',
    collator: '56',
    dateTimeFormat: '56',
    listFormat: 'No',
    locale: 'No',
    numberFormat: '56',
    pluralRules: '58',
    relativeTimeFormat: '65',
    getCanonicalLocales: '56',
  },
  {
    browser: 'Opera for Android',
    intl: 'Yes',
    collator: 'Yes',
    dateTimeFormat: '14',
    listFormat: '?',
    locale: 'No',
    numberFormat: '14',
    pluralRules: '46',
    relativeTimeFormat: '?',
    getCanonicalLocales: 'No',
  },
  {
    browser: 'Safari on iOS',
    intl: '10',
    collator: '10',
    dateTimeFormat: '10',
    listFormat: 'No',
    locale: 'No',
    numberFormat: '10',
    pluralRules: 'No',
    relativeTimeFormat: 'No',
    getCanonicalLocales: '11',
  },
  {
    browser: 'Samsung Internet',
    intl: 'Yes',
    collator: 'Yes',
    dateTimeFormat: 'Yes',
    listFormat: 'Yes',
    locale: 'No',
    numberFormat: 'Yes',
    pluralRules: '8.0',
    relativeTimeFormat: 'Yes',
    getCanonicalLocales: 'No',
  },
  {
    browser: 'Node.js',
    intl: 'Yes',
    collator: '?',
    dateTimeFormat: 'Yes',
    listFormat: 'No',
    locale: 'No',
    numberFormat: '?',
    pluralRules: '10.0.0',
    relativeTimeFormat: '12.0.0',
    getCanonicalLocales: 'No',
  },
];
