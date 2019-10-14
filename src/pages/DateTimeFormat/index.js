import React, { useState, useReducer, useEffect } from 'react';
import {
  Row,
  Col,
  Card,
  PageHeader,
  Form,
  Select,
  Statistic,
  List,
  Avatar,
  Typography,
  DatePicker,
  TimePicker,
} from 'antd';

import links from './data/usefulLinks';
import locales from './data/locales';
import { dateStyles } from './data/options';

import { localeChange, dateStyleChange } from './actions';
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

  const handleLocaleChange = locale => {
    dispatch(localeChange(locale));
  };

  const handleDateStyleChange = style => {
    dispatch(dateStyleChange(style));
  };

  const handleDateChange = newDate => {
    if (newDate !== null) {
      setDate(newDate.toDate());
    }
  };

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
            <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
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
                      <Option key="clear" value={undefined}>
                        undefined (clear)
                      </Option>
                      {locales.map(locale => (
                        <Option key={locale} value={locale}>
                          {locale}
                        </Option>
                      ))}
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
                        <Option key="clear" value={undefined}>
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
