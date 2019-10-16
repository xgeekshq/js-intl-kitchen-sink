import React from 'react';
import styles from './styles.module.css';
import { headers, browserInfo } from './constants';

const getClassName = value => {
  if (value === 'No') {
    return `${styles.backgroundRed} ${styles.crossGradient}`;
  }
  if (value === '?') {
    return styles.backgroundLightGray;
  }
  return styles.backgroundGreen;
};

const Header = ({ name }) => {
  return (
    <th className={styles.rotate}>
      <div>
        <span>{name}</span>
      </div>
    </th>
  );
};

const Rows = ({
  browser,
  intl,
  collator,
  dateTimeFormat,
  listFormat,
  locale,
  numberFormat,
  pluralRules,
  relativeTimeFormat,
  getCanonicalLocales,
}) => {
  return (
    <tr>
      <td>{browser}</td>
      <td className={getClassName(intl)}>{intl}</td>
      <td className={getClassName(collator)}>{collator}</td>
      <td className={getClassName(dateTimeFormat)}>{dateTimeFormat}</td>
      <td className={getClassName(listFormat)}>{listFormat}</td>
      <td className={getClassName(locale)}>{locale}</td>
      <td className={getClassName(numberFormat)}>{numberFormat}</td>
      <td className={getClassName(pluralRules)}>{pluralRules}</td>
      <td className={getClassName(relativeTimeFormat)}>{relativeTimeFormat}</td>
      <td className={getClassName(getCanonicalLocales)}>
        {getCanonicalLocales}
      </td>
    </tr>
  );
};

const BrowserSupportTable = () => {
  return (
    <div>
      <table className={`${styles.backgroundDarkGray} ${styles.table}`}>
        <thead>
          <tr>
            <th className={styles.verticalAlignBottom}>
              <div>
                <span>Browser</span>
              </div>
            </th>
            {headers.map(header => (
              <Header key={header.name} name={header.name} />
            ))}
          </tr>
        </thead>
        <tbody>
          {browserInfo.map(info => (
            <Rows
              browser={info.browser}
              intl={info.intl}
              collator={info.collator}
              dateTimeFormat={info.dateTimeFormat}
              listFormat={info.listFormat}
              locale={info.locale}
              numberFormat={info.numberFormat}
              pluralRules={info.pluralRules}
              relativeTimeFormat={info.relativeTimeFormat}
              getCanonicalLocales={info.getCanonicalLocales}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default BrowserSupportTable;
