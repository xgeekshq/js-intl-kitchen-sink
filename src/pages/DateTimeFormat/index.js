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
} from 'antd';

import links from './data/usefulLinks';
import locales from './data/locales';
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
} from './data/options';

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

const { Option } = Select;
const { Title, Text } = Typography;

const Home = props => {
  const [date, setDate] = useState(new Date());
  const [dateString, setDateString] = useState('');
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    console.log(state.options);
    const intlFormat = () =>
      new Intl.DateTimeFormat(state.locale, state.options).format(date);

    setDateString(intlFormat());
  }, [state, date]);

  const checkIsClear = option => (option === 'clear' ? undefined : option);

  const handleLocaleChange = locale => {
    dispatch(localeChange(checkIsClear(locale)));
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

  const timeZones = moment.tz.names();

  return (
    <div>
      <PageHeader
        title="Intl.DateTimeFormat"
        subTitle="Enables language-sensitive date and time formatting"
      />
      <Row gutter={16}>
        <Col span={6}>
          <p>Change date</p>
          <DatePicker onChange={handleDateChange} />
        </Col>
        <Col span={12}>
          <Card bordered={false}>
            <Row gutter={16}>
              <Col span={24}>
                <Statistic title="Result" value={dateString} />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={6}>
          <p>Change time</p>
          <TimePicker onChange={handleDateChange} />
        </Col>
      </Row>
      <br />
      <Row gutter={16}>
        <Col span={16}>
          <Card title="Parameters" bordered={false}>
            <Form labelCol={{ span: 9 }} wrapperCol={{ span: 15 }}>
              <Row gutter={16}>
                <Title level={4}>
                  locales<Text code>Optional</Text>
                </Title>
                <Col span={12}>
                  <Form.Item label="locale">
                    <Select
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
                </Col>
                <Col span={12}>
                  <p>
                    When requesting a language that may not be supported, such
                    as Balinese, include a fallback language.
                  </p>
                </Col>
                <Col span={24}>
                  <Title level={4}>
                    options<Text code>Optional</Text>
                  </Title>
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
                  </Col>
                  <Col span={12}>
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
                  </Col>
                  <Col span={12}>
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
                  </Col>
                  <Col span={12}>
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
                  </Col>
                  <Col span={12}>
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
                  </Col>
                  <Col span={12}>
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
                  </Col>
                  <Col span={12}>
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
                  </Col>
                  <Col span={12}>
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
                  </Col>
                  <Col span={12}>
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
                  </Col>
                  <Col span={12}>
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
                  </Col>
                  <Col span={12}>
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
                  </Col>
                  <Col span={12}>
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
                  </Col>
                  <Col span={12}>
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
                  </Col>
                  <Col span={12}>
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
                    <Form.Item label="hour12">
                      <Switch onChange={handleHour12Change} />
                    </Form.Item>
                  </Col>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Useful Links" bordered={false}>
            <List
              itemLayout="horizontal"
              dataSource={links}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href="https://ant.design">{item.title}</a>}
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
