import React from 'react';
import { Typography } from 'antd';

const { Paragraph } = Typography;

const docsPrefix = 'https://developer.mozilla.org';

const explanations = {
  locales: (
    <Paragraph>
      A string with a BCP 47 language tag, or an array of such strings. To use
      the browser's default locale, omit this argument or pass{' '}
      <code>undefined</code>. Unicode extension are supported (for example "
      <code>en-US-u-ca-buddhist</code>"). For the general form and
      interpretation of the <code>locales</code> argument, see the{' '}
      <a
        href={`${docsPrefix}/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation`}
        title="The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The INTL object provides access to several constructors as well as functionality common to the internationalization constructors and other language sensitive functions."
      >
        Intl page
      </a>
      . The following Unicode extension keys are allowed:
    </Paragraph>
  ),
  nu: (
    <Paragraph>
      Numbering system. Possible values include: "<code>arab</code>", "
      <code>arabext</code>", "<code>bali</code>", "<code>beng</code>", "
      <code>deva</code>", "<code>fullwide</code>", "<code>gujr</code>", "
      <code>guru</code>", "<code>hanidec</code>", "<code>khmr</code>", "
      <code>knda</code>", "<code>laoo</code>", "<code>latn</code>", "
      <code>limb</code>", "<code>mlym</code>", "<code>mong</code>", "
      <code>mymr</code>", "<code>orya</code>", "<code>tamldec</code>", "
      <code>telu</code>", "<code>thai</code>", "<code>tibt</code>".
    </Paragraph>
  ),
  ca: (
    <Paragraph>
      Calendar. Possible values include: "<code>buddhist</code>", "
      <code>chinese</code>", "<code>coptic</code>", "<code>ethiopia</code>", "
      <code>ethiopic</code>", "<code>gregory</code>", "<code>hebrew</code>", "
      <code>indian</code>", "<code>islamic</code>", "<code>iso8601</code>", "
      <code>japanese</code>", "<code>persian</code>", "<code>roc</code>".
    </Paragraph>
  ),
  hc: (
    <Paragraph>
      Hour cycle. Possible values include: "<code>h11</code>", "<code>h12</code>
      ", "<code>h23</code>", "<code>h24</code>".
    </Paragraph>
  ),
  dateStyle: (
    <Paragraph>
      The date formatting style to use when calling <code>format()</code>.
      Possible values include:
      <ul>
        <li>
          "<code>full</code>"
        </li>
        <li>
          "<code>long</code>"
        </li>
        <li>
          "<code>medium</code>"
        </li>
        <li>
          "<code>short</code>"
        </li>
      </ul>
    </Paragraph>
  ),
  timeStyle: (
    <Paragraph>
      The time formatting style to use when calling <code>format()</code>.
      Possible values include:
      <ul>
        <li>
          "<code>full</code>"
        </li>
        <li>
          "<code>long</code>"
        </li>
        <li>
          "<code>medium</code>"
        </li>
        <li>
          "<code>short</code>"
        </li>
      </ul>
    </Paragraph>
  ),
  localeMatcher: (
    <Paragraph>
      The locale matching algorithm to use. Possible values are "
      <code>lookup</code>" and "<code>best fit</code>"; the default is "
      <code>best fit</code>". For information about this option, see the{' '}
      <a
        href={`${docsPrefix}/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation`}
        title="The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The INTL object provides access to several constructors as well as functionality common to the internationalization constructors and other language sensitive functions."
      >
        Intl page
      </a>
      .
    </Paragraph>
  ),
  timeZone: (
    <Paragraph>
      The time zone to use. The only value implementations must recognize is "
      <code>UTC</code>"; the default is the runtime's default time zone.
      Implementations may also recognize the time zone names of the{' '}
      <a class="external" href="https://www.iana.org/time-zones" rel="noopener">
        IANA time zone database
      </a>
      , such as "<code>Asia/Shanghai</code>", "<code>Asia/Kolkata</code>", "
      <code>America/New_York</code>".
    </Paragraph>
  ),
  hour12: (
    <Paragraph>
      Whether to use 12-hour time (as opposed to 24-hour time). Possible values
      are <code>true</code> and <code>false</code>; the default is locale
      dependent. This option overrides the <code>hc</code> language tag and/or
      the <code>hourCycle</code> option in case both are present.
    </Paragraph>
  ),
  hourCycle: (
    <Paragraph>
      The hour cycle to use. Possible values are "<code>h11</code>", "
      <code>h12</code>", "<code>h23</code>", or "<code>h24</code>". This option
      overrides the <code>hc</code> language tag, if both are present, and the{' '}
      <code>hour12</code> option takes precedence in case both options have been
      specified. The hour cycle to use. Possible values are "<code>h11</code>",
      "<code>h12</code>", "<code>h23</code>", or "<code>h24</code>". This option
      overrides the <code>hc</code> language tag, if both are present, and the{' '}
      <code>hour12</code> option takes precedence in case both options have been
      specified.
    </Paragraph>
  ),
  formatMatcher: (
    <Paragraph>
      The format matching algorithm to use. Possible values are "
      <code>basic</code>" and "<code>best fit</code>"; the default is "
      <code>best fit</code>". See the following paragraphs for information about
      the use of this property.
    </Paragraph>
  ),
  weekday: (
    <Paragraph>
      The representation of the weekday. Possible values are:
      <ul>
        <li>
          "<code>long</code>" (e.g., <code>Thursday</code>)
        </li>
        <li>
          "<code>short</code>" (e.g., <code>Thu</code>)
        </li>
        <li>
          "<code>narrow</code>" (e.g., <code>T</code>). Two weekdays may have
          the same narrow style for some locales (e.g. <code>Tuesday</code>'s
          narrow style is also <code>T</code>).
        </li>
      </ul>
    </Paragraph>
  ),
  era: (
    <Paragraph>
      The representation of the era. Possible values are:
      <ul>
        <li>
          "<code>long</code>" (e.g., <code>Anno Domini</code>)
        </li>
        <li>
          "<code>short</code>" (e.g., <code>AD</code>)
        </li>
        <li>
          "<code>narrow</code>" (e.g., <code>A</code>)
        </li>
      </ul>
    </Paragraph>
  ),
  year: (
    <Paragraph>
      The representation of the year. Possible values are:
      <ul>
        <li>
          "<code>numeric</code>" (e.g., <code>2012</code>)
        </li>
        <li>
          "<code>2-digit</code>" (e.g., <code>12</code>)
        </li>
      </ul>
    </Paragraph>
  ),
  month: (
    <Paragraph>
      The representation of the month. Possible values are:
      <ul>
        <li>
          "<code>numeric</code>" (e.g., <code>2</code>)
        </li>
        <li>
          "<code>2-digit</code>" (e.g., <code>02</code>)
        </li>
        <li>
          "<code>long</code>" (e.g., <code>March</code>)
        </li>
        <li>
          "<code>short</code>" (e.g., <code>Mar</code>)
        </li>
        <li>
          "<code>narrow</code>" (e.g., <code>M</code>). Two months may have the
          same narrow style for some locales (e.g. <code>May</code>'s narrow
          style is also <code>M</code>).
        </li>
      </ul>
    </Paragraph>
  ),
  day: (
    <Paragraph>
      The representation of the day. Possible values are:
      <ul>
        <li>
          "<code>numeric</code>" (e.g., <code>1</code>)
        </li>
        <li>
          "<code>2-digit</code>" (e.g., <code>01</code>)
        </li>
      </ul>
    </Paragraph>
  ),
  hour: (
    <Paragraph>
      The representation of the hour. Possible values are "<code>numeric</code>
      ", "<code>2-digit</code>".
    </Paragraph>
  ),
  minute: (
    <Paragraph>
      The representation of the minute. Possible values are "
      <code>numeric</code>", "<code>2-digit</code>".
    </Paragraph>
  ),
  second: (
    <Paragraph>
      The representation of the second. Possible values are "
      <code>numeric</code>", "<code>2-digit</code>".
    </Paragraph>
  ),
  timeZoneName: (
    <Paragraph>
      The representation of the time zone name. Possible values are:
      <ul>
        <li>
          "<code>long</code>" (e.g., <code>British Summer Time</code>)
        </li>
        <li>
          "<code>short</code>" (e.g., <code>GMT+1</code>)
        </li>
      </ul>
    </Paragraph>
  ),
  pluralRules: {
    type: (
      <Paragraph>
        The type to use. Possible values are:
        <ul>
          <li>
            "<code>cardinal</code>" for cardinal numbers (refering to the
            quantity of things). This is the default value.
          </li>
          <li>
            "<code>ordinal</code>" for ordinal number (refering to the ordering
            or ranking of things, e.g. "1st", "2nd", "3rd" in English).
          </li>
        </ul>
      </Paragraph>
    ),
    minimumIntegerDigits: (
      <Paragraph>
        The minimum number of integer digits to use. Possible values are from 1
        to 21; the default is 1.
      </Paragraph>
    ),
    minimumFractionDigits: (
      <Paragraph>
        The minimum number of fraction digits to use. Possible values are from 0
        to 20; the default for plain number and percent formatting is 0; the
        default for currency formatting is the number of minor unit digits
        provided by the{' '}
        <a href="www.currency-iso.org/en/home/tables/table-a1.html">
          ISO 4217 currency code list
        </a>{' '}
        (2 if the list doesn't provide that information).
      </Paragraph>
    ),
    maximumFractionDigits: (
      <Paragraph>
        The maximum number of fraction digits to use. Possible values are from 0
        to 20; the default for plain number formatting is the larger of
        <code>minimumFractionDigits</code> and 3; the default for currency
        formatting is the larger of <code>minimumFractionDigits</code> and the
        number of minor unit digits provided by the{' '}
        <a href="www.currency-iso.org/en/home/tables/table-a1.html">
          ISO 4217 currency code list
        </a>{' '}
        (2 if the list doesn't provide that information); the default for
        percent formatting is the larger of <code>minimumFractionDigits</code>{' '}
        and 0.
      </Paragraph>
    ),
    minimumSignificantDigits: (
      <Paragraph>
        The minimum number of significant digits to use. Possible values are
        from 1 to 21; the default is 1.
      </Paragraph>
    ),
    maximumSignificantDigits: (
      <Paragraph>
        The maximum number of significant digits to use. Possible values are
        from 1 to 21; the default is 21.
      </Paragraph>
    ),
  },
};

export default explanations;
