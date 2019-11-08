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
    </Paragraph>
  ),
  nu: <Paragraph>Numbering system</Paragraph>,
  ca: <Paragraph>Calendar</Paragraph>,
  hc: <Paragraph>Hour cycle</Paragraph>,
  dateStyle: (
    <Paragraph>
      The date formatting style to use when calling <code>format()</code>
    </Paragraph>
  ),
  timeStyle: (
    <Paragraph>
      The time formatting style to use when calling <code>format()</code>
    </Paragraph>
  ),
  localeMatcher: (
    <Paragraph>
      The locale matching algorithm to use. For information about this option,
      see the{' '}
      <a
        href={`${docsPrefix}/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation`}
        title="The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The INTL object provides access to several constructors as well as functionality common to the internationalization constructors and other language sensitive functions."
      >
        Intl page
      </a>
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
      <code>America/New_York</code>"
    </Paragraph>
  ),
  hour12: (
    <Paragraph>
      Whether to use 12-hour time (as opposed to 24-hour time).This option
      overrides the <code>hc</code> language tag and/or the{' '}
      <code>hourCycle</code> option in case both are present
    </Paragraph>
  ),
  hourCycle: (
    <Paragraph>
      The hour cycle to use. This option overrides the <code>hc</code> language
      tag, if both are present, and the <code>hour12</code> option takes
      precedence in case both options have been specified
    </Paragraph>
  ),
  formatMatcher: <Paragraph>The format matching algorithm to use</Paragraph>,
  weekday: <Paragraph>The representation of the weekday</Paragraph>,
  era: <Paragraph>The representation of the era</Paragraph>,
  year: <Paragraph>The representation of the year</Paragraph>,
  month: <Paragraph>The representation of the month</Paragraph>,
  day: <Paragraph>The representation of the day</Paragraph>,
  hour: <Paragraph>The representation of the hour</Paragraph>,
  minute: <Paragraph>The representation of the minute</Paragraph>,
  second: <Paragraph>The representation of the second</Paragraph>,
  timeZoneName: <Paragraph>The representation of the time zone name</Paragraph>,
};

export default explanations;
