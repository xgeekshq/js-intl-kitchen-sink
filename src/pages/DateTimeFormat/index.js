import React, { useState, useReducer, useEffect } from 'react';
import moment from 'moment-timezone';
import {
  Row,
  Col,
  Card,
  PageHeader,
  Form,
  Select,
  Switch,
  Statistic,
  List,
  Avatar,
  Typography,
  DatePicker,
  TimePicker,
  Tag,
  Icon,
  Tooltip,
  Modal,
} from 'antd';

import links from '../../data/usefulLinks';
import locales from '../../data/locales';
import { numberingSystem, calendar, hourCycle } from '../../data/locales';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import {
  dateStyles,
  localeMatchers,
  timeStyles,
  hourCycles,
  formatMatchers,
  weekdays,
  eras,
  years,
  months,
  days,
  hours,
  minutes,
  seconds,
  timeZoneNames,
} from '../../data/options';

import {
  localeChange,
  dateStyleChange,
  timeStyleChange,
  localMatcherChange,
  timeZoneChange,
  hour12Change,
  hourCycleChange,
  formatMatcherChange,
  weekDayChange,
  eraChange,
  yearChange,
  monthChange,
  dayChange,
  hourChange,
  minuteChange,
  secondChange,
  timeZoneNameChange,
} from './actions';
import reducer, { INITIAL_STATE } from './reducer';
import { checkIsClear } from '../../utils';

const { Option } = Select;
const { Title } = Typography;

const Home = () => {
  const [date, setDate] = useState(new Date());
  const [dateString, setDateString] = useState('');
  const [nuString, setNuString] = useState(undefined);
  const [caString, setCaString] = useState(undefined);
  const [hcString, setHcString] = useState(undefined);
  const [disabledBool, setdisabledBool] = useState(true);
  const [codeVisibility, setCodeVisibility] = useState(false);
  const [codeModal, setCodeModal] = useState(null);

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const timeZones = moment.tz.names();

  useEffect(() => {
    const intlFormat = () =>
      new Intl.DateTimeFormat(state.locale, state.options).format(date);

    setDateString(intlFormat());
  }, [state, date]);

  const handleLocaleChange = locale => {
    if (locale !== undefined) {
      setdisabledBool(false);
    } else {
      setdisabledBool(true);
    }
    setNuString(undefined);
    setCaString(undefined);
    setHcString(undefined);
    dispatch(localeChange(checkIsClear(locale)));
  };

  const handleOptionsLocaleChange = value => {
    if (value !== undefined) {
      let type = undefined;
      let baseLocale = state.locale;
      if (numberingSystem.includes(value)) {
        type = '-nu-';
        setNuString(value);
        setCaString(undefined);
        setHcString(undefined);
      } else if (calendar.includes(value)) {
        type = '-ca-';
        setCaString(value);
        setNuString(undefined);
        setHcString(undefined);
      } else if (hourCycle.includes(value)) {
        type = '-hc-';
        setHcString(value);
        setCaString(undefined);
        setNuString(undefined);
      } else {
        setNuString(undefined);
        setCaString(undefined);
        setHcString(undefined);
      }
      if (type !== undefined) {
        baseLocale = baseLocale.split('-u-')[0] + '-u';
        const localeConcat = baseLocale + type + value;
        dispatch(localeChange(localeConcat));
      }
    }
  };

  const handleDateStyleChange = style => {
    dispatch(dateStyleChange(checkIsClear(style)));
  };

  const handleTimeStyleChange = style => {
    dispatch(timeStyleChange(checkIsClear(style)));
  };

  const handleLocalMatcherChange = localMatcher => {
    dispatch(localMatcherChange(checkIsClear(localMatcher)));
  };

  const handleTimeZoneChange = timeZone => {
    dispatch(timeZoneChange(checkIsClear(timeZone)));
  };

  const handleHour12Change = hour12 => {
    dispatch(hour12Change(hour12));
  };

  const handleHourCycleChange = hourCycle => {
    dispatch(hourCycleChange(checkIsClear(hourCycle)));
  };

  const handleFormatMatcherChange = formatMatcher => {
    dispatch(formatMatcherChange(checkIsClear(formatMatcher)));
  };

  const handleWeekDayChange = weekDay => {
    dispatch(weekDayChange(checkIsClear(weekDay)));
  };

  const handleEraChange = era => {
    dispatch(eraChange(checkIsClear(era)));
  };

  const handleYearChange = year => {
    dispatch(yearChange(checkIsClear(year)));
  };

  const handleMonthChange = month => {
    dispatch(monthChange(checkIsClear(month)));
  };

  const handleDayChange = day => {
    dispatch(dayChange(checkIsClear(day)));
  };

  const handleHourChange = hour => {
    dispatch(hourChange(checkIsClear(hour)));
  };

  const handleMinuteChange = minute => {
    dispatch(minuteChange(checkIsClear(minute)));
  };

  const handleSecondChange = second => {
    dispatch(secondChange(checkIsClear(second)));
  };

  const handleTimeZoneNameChange = timeZoneName => {
    dispatch(timeZoneNameChange(checkIsClear(timeZoneName)));
  };

  const handleDateChange = newDate => {
    if (newDate !== null) {
      setDate(newDate.toDate());
    }
  };

  const getCodeSnippet = () => {
    const {
      locale = navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.userLanguage ||
          navigator.language ||
          navigator.browserLanguage ||
          'en',
      options: {
        dateStyle,
        era,
        hourCycle,
        timeStyle,
        weekDay,
        localeMatcher,
        formatMatcher,
        year,
        month,
        day,
        hour,
        minute,
        second,
        hour12,
        timeZone = moment.tz.guess(), // Default timezone to user's timezone
        timeZoneName,
      },
    } = state;

    const dateTemplate = `Date.UTC(${date.getFullYear()}, ${date.getMonth()}, ${date.getDay()},${date.getHours()}, ${date.getMinutes()}, ${date.getSeconds()})`;
    const optionalTemplate = `${weekDay ? ` weekday: '${weekDay}',` : ''}${
      timeZoneName ? ` timeZoneName: '${timeZoneName}',` : ''
    }${era ? ` era: '${era}',` : ''}${
      hourCycle ? ` hourCycle: '${hourCycle}',` : ''
    }${dateStyle ? ` dateStyle: '${dateStyle}',` : ''}${
      timeStyle ? ` timeStyle: '${timeStyle}',` : ''
    }${localeMatcher ? ` localeMatcher: '${localeMatcher}',` : ''}${
      formatMatcher ? ` formatMatcher: '${formatMatcher}',` : ''
    }`;

    // keep indentation of the block below
    return ` // https://js-intl-kitchen-sink.netlify.com/DateTimeFormat

const date = new Date(${dateTemplate});
const formattedDate = new Intl.DateTimeFormat('${locale}', {
  year: '${year}', month: '${month}', day: '${day}',
  hour: '${hour}', minute: '${minute}', second: '${second}',
  hour12: ${hour12}, timeZone: '${timeZone}',${optionalTemplate}
}).format(date);`;
  };

  const handleCopyCodeToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = getCodeSnippet();
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  const handleShowCode = () => {
    setCodeModal(getCodeSnippet());
    setCodeVisibility(true);
  };

  const handleModalClose = () => {
    setCodeVisibility(false);
    setCodeModal(null);
  };

  return (
    <div>
      <PageHeader
        title="Intl.DateTimeFormat"
        subTitle="Enables language-sensitive date and time formatting"
      />
      <Row gutter={16}>
        <Col span={6}>
          <br />
          <Title level={4}>Change date</Title>
          <DatePicker size="large" onChange={handleDateChange} />
        </Col>
        <Col span={12}>
          <Card
            bordered={false}
            actions={[
              <Tooltip title="open in codesandbox (future feature)">
                <Icon type="link" key="reset" />
              </Tooltip>,
              <Tooltip title="copy code to clipboard">
                <Icon
                  onClick={handleCopyCodeToClipboard}
                  type="copy"
                  key="copy"
                />
              </Tooltip>,
              <Tooltip title="show code">
                <Icon onClick={handleShowCode} type="eye" key="show" />
              </Tooltip>,
              <Tooltip title="reset (future feature)">
                <Icon type="rest" key="reset" />
              </Tooltip>,
            ]}
          >
            <Row gutter={16}>
              <Col span={24}>
                <Statistic title="Result" value={dateString} />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={6}>
          <br />
          <Title level={4}>Change time</Title>
          <TimePicker size="large" onChange={handleDateChange} />
        </Col>
      </Row>

      {codeModal && (
        <Modal
          title="Date Time Format"
          footer={null}
          onCancel={handleModalClose}
          visible={codeVisibility}
          width="50%"
        >
          <SyntaxHighlighter
            showLineNumbers={true}
            language="javascript"
            style={atomOneDark}
          >
            {codeModal}
          </SyntaxHighlighter>
        </Modal>
      )}

      <br />
      <Row gutter={16}>
        <Col span={24}>
          <Card title="Parameters" bordered={false}>
            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 16 }}>
              <Row gutter={16}>
                <Card type="inner" title="Locale" extra={<Tag>Optional</Tag>}>
                  <Col span={12}>
                    <Form.Item label="locale">
                      <Select
                        showSearch
                        placeholder="Select a locale"
                        onChange={handleLocaleChange}
                      >
                        <Option key="clear" value="undefined">
                          undefined (clear)
                        </Option>
                        {locales.map(locale => {
                          return (
                            <Option key={locale} value={locale}>
                              {locale}
                            </Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                    <Form.Item label="nu">
                      <Select
                        showSearch
                        placeholder="Select a Numbering system"
                        onChange={handleOptionsLocaleChange}
                        disabled={disabledBool}
                        value={nuString}
                      >
                        <Option key="clear" value={undefined}>
                          undefined (clear)
                        </Option>
                        {numberingSystem.map(number => (
                          <Option key={number} value={number}>
                            {number}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="ca">
                      <Select
                        placeholder="Select a Calendar"
                        onChange={handleOptionsLocaleChange}
                        disabled={disabledBool}
                        value={caString}
                        showSearch
                      >
                        <Option key="clear" value={undefined}>
                          undefined (clear)
                        </Option>
                        {calendar.map(calendarStyle => (
                          <Option key={calendarStyle} value={calendarStyle}>
                            {calendarStyle}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item label="hc">
                      <Select
                        placeholder="Select a Hour Cycle"
                        onChange={handleOptionsLocaleChange}
                        disabled={disabledBool}
                        value={hcString}
                      >
                        <Option key="clear" value={undefined}>
                          undefined (clear)
                        </Option>
                        {hourCycle.map(hour => (
                          <Option key={hour} value={hour}>
                            {hour}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                </Card>
              </Row>
              <br />
              <Row gutter={16}>
                <Card type="inner" title="Options" extra={<Tag>Optional</Tag>}>
                  <Col span={12}>
                    <Form.Item label="dateStyle">
                      <Select
                        placeholder="Select a dateStyle"
                        onChange={handleDateStyleChange}
                      >
                        <Option key="clear" value={'clear'}>
                          undefined (clear)
                        </Option>
                        {timeStyles.map(timeStyle => (
                          <Option key={timeStyle} value={timeStyle}>
                            {timeStyle}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item label="localMatcher">
                      <Select
                        placeholder="Select a localMatcher"
                        onChange={handleLocalMatcherChange}
                      >
                        <Option key="clear" value="clear">
                          undefined (clear)
                        </Option>
                        {localeMatchers.map(localMatcher => (
                          <Option key={localMatcher} value={localMatcher}>
                            {localMatcher}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item label="hourCycle">
                      <Select
                        placeholder="Select a hourCycle"
                        onChange={handleHourCycleChange}
                      >
                        <Option key="clear" value="clear">
                          undefined (clear)
                        </Option>
                        {hourCycles.map(hourCycle => (
                          <Option key={hourCycle} value={hourCycle}>
                            {hourCycle}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item label="weekDay">
                      <Select
                        placeholder="Select a weekDay"
                        onChange={handleWeekDayChange}
                      >
                        <Option key="clear" value="clear">
                          undefined (clear)
                        </Option>
                        {weekdays.map(weekDay => (
                          <Option key={weekDay} value={weekDay}>
                            {weekDay}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item label="year">
                      <Select
                        placeholder="Select a year"
                        onChange={handleYearChange}
                      >
                        <Option key="clear" value="clear">
                          undefined (clear)
                        </Option>
                        {years.map(year => (
                          <Option key={year} value={year}>
                            {year}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item label="day">
                      <Select
                        placeholder="Select a day"
                        onChange={handleDayChange}
                      >
                        <Option key="clear" value="clear">
                          undefined (clear)
                        </Option>
                        {days.map(day => (
                          <Option key={day} value={day}>
                            {day}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item label="minute">
                      <Select
                        placeholder="Select a minute"
                        onChange={handleMinuteChange}
                      >
                        <Option key="clear" value="clear">
                          undefined (clear)
                        </Option>
                        {minutes.map(minute => (
                          <Option key={minute} value={minute}>
                            {minute}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item label="timeZoneName">
                      <Select
                        placeholder="Select a timeZoneName"
                        onChange={handleTimeZoneNameChange}
                      >
                        <Option key="clear" value="clear">
                          undefined (clear)
                        </Option>
                        {timeZoneNames.map(timeZoneName => (
                          <Option key={timeZoneName} value={timeZoneName}>
                            {timeZoneName}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="timeStyle">
                      <Select
                        placeholder="Select a timeStyle"
                        onChange={handleTimeStyleChange}
                      >
                        <Option key="clear" value="clear">
                          undefined (clear)
                        </Option>
                        {dateStyles.map(dateStyle => (
                          <Option key={dateStyle} value={dateStyle}>
                            {dateStyle}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item label="timeZone">
                      <Select
                        placeholder="Select a timeZone"
                        onChange={handleTimeZoneChange}
                        showSearch={true}
                      >
                        <Option key="clear" value="clear">
                          undefined (clear)
                        </Option>
                        {timeZones.map(timeZone => (
                          <Option key={timeZone} value={timeZone}>
                            {timeZone}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item label="formatMatcher">
                      <Select
                        placeholder="Select a formatMatcher"
                        onChange={handleFormatMatcherChange}
                      >
                        <Option key="clear" value="clear">
                          undefined (clear)
                        </Option>
                        {formatMatchers.map(formatMatcher => (
                          <Option key={formatMatcher} value={formatMatcher}>
                            {formatMatcher}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item label="era">
                      <Select
                        placeholder="Select a era"
                        onChange={handleEraChange}
                      >
                        <Option key="clear" value="clear">
                          undefined (clear)
                        </Option>
                        {eras.map(era => (
                          <Option key={era} value={era}>
                            {era}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item label="month">
                      <Select
                        placeholder="Select a month"
                        onChange={handleMonthChange}
                      >
                        <Option key="clear" value="clear">
                          undefined (clear)
                        </Option>
                        {months.map(month => (
                          <Option key={month} value={month}>
                            {month}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item label="hour">
                      <Select
                        placeholder="Select a hour"
                        onChange={handleHourChange}
                      >
                        <Option key="clear" value="clear">
                          undefined (clear)
                        </Option>
                        {hours.map(hour => (
                          <Option key={hour} value={hour}>
                            {hour}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item label="second">
                      <Select
                        placeholder="Select a second"
                        onChange={handleSecondChange}
                      >
                        <Option key="clear" value="clear">
                          undefined (clear)
                        </Option>
                        {seconds.map(second => (
                          <Option key={second} value={second}>
                            {second}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item label="hour12">
                      <Switch onChange={handleHour12Change} />
                    </Form.Item>
                  </Col>
                </Card>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
      <br />
      <Row gutter={16}>
        <Col span={24}>
          <Card title="Useful Links" bordered={false}>
            <List
              itemLayout="horizontal"
              dataSource={links}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar src={item.avatar} alt={`${item.title}-avatar`} />
                    }
                    title={<a href={item.link}>{item.title}</a>}
                    description={item.text}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
