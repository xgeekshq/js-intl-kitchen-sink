import React, { useEffect, useReducer, useState } from 'react';
import {
  Row,
  Col,
  Card,
  PageHeader,
  Form,
  Select,
  Statistic,
  Typography,
  InputNumber,
} from 'antd';

import locales from '../../data/locales';
import { localeMatchers, numerics, styles } from '../../data/options';

import {
  localeChange,
  styleChange,
  localeMatcherChange,
  numericChange,
} from './actions';
import reducer, { INITIAL_STATE } from './reducer';

import { checkIsClear } from '../../utils';

const { Option } = Select;
const { Title, Text } = Typography;

const RelativeTimeFormat = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    if (
      Intl &&
      Intl.RelativeTimeFormat &&
      Intl.RelativeTimeFormat === 'function'
    ) {
      const rtf = new Intl.RelativeTimeFormat(state.locale, state.options);
      setTimeString(rtf);
    } else {
      setTimeString('Not compatible with browser');
    }
  }, [state]);

  const handleLocaleChange = locale => {
    dispatch(localeChange(checkIsClear(locale)));
  };

  const handleLocaleMatcherChange = localeMatcher => {
    dispatch(localeMatcherChange(checkIsClear(localeMatcher)));
  };

  const handleNumericChange = numeric => {
    dispatch(numericChange(checkIsClear(numeric)));
  };

  const handleStyleChange = style => {
    dispatch(styleChange(checkIsClear(style)));
  };

  return (
    <div>
      <PageHeader
        title="Intl.RelativeTimeFormat"
        subTitle="Enables language-sensitive relative time formatting."
      />
      <Row gutter={16}>
        <Col span={6}>
          <p>Days</p>
          <InputNumber onChange={() => {}} />
        </Col>
        <Col span={12}>
          <Card bordered={false}>
            <Row gutter={16}>
              <Col span={24}>
                <Statistic title="Result" value={timeString} />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={6}>
          <p>Unit</p>
          <Select placeholder="Select Unit" onChange={() => {}}>
            <Option key="clear" value={undefined}>
              undefined (clear)
            </Option>
          </Select>
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
                    <Form.Item label="localMatcher">
                      <Select
                        placeholder="Select a localMatcher"
                        onChange={handleLocaleMatcherChange}
                      >
                        <Option key="clear" value="clear">
                          undefined (clear)
                        </Option>
                        {localeMatchers.map(localeMatcher => (
                          <Option key={localeMatcher} value={localeMatcher}>
                            {localeMatcher}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item label="numeric">
                      <Select
                        placeholder="Select a numeric"
                        onChange={() => {}}
                      >
                        <Option key="clear" value={undefined}>
                          undefined (clear)
                        </Option>
                        {numerics.map(numeric => (
                          <Option key={numeric} value={numeric}>
                            {numeric}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item label="style">
                      <Select placeholder="Select a style" onChange={() => {}}>
                        <Option key="clear" value={undefined}>
                          undefined (clear)
                        </Option>
                        {styles.map(style => (
                          <Option key={style} value={style}>
                            {style}
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
          <Card title="Useful Links" bordered={false}></Card>
        </Col>
      </Row>
    </div>
  );
};

export default RelativeTimeFormat;
