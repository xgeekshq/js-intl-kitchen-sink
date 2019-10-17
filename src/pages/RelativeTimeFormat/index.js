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
  Tag,
  List,
  Avatar,
  Affix,
  Tooltip,
  Icon,
} from 'antd';

import { localeMatchers, numerics, styles } from '../../data/options';

import {
  localeChange,
  styleChange,
  localeMatcherChange,
  numericChange,
  reset,
} from './actions';
import reducer, { INITIAL_STATE } from './reducer';

import { checkIsClear } from '../../utils';
import locales from '../../data/locales';
import { units } from './Data/pageData';
import links from './Data/usefulLinks';

const { Option } = Select;
const { Title } = Typography;

const RelativeTimeFormat = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [value, setValue] = useState(1);
  const [unit, setUnit] = useState('day');
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    if (
      Intl &&
      Intl.RelativeTimeFormat &&
      typeof Intl.RelativeTimeFormat === 'function'
    ) {
      const rtf = new Intl.RelativeTimeFormat(
        state.locale,
        state.options
      ).format(value, unit);
      setTimeString(rtf);
    } else {
      setTimeString('Not compatible with your browser');
    }
  }, [state.locale, state.options, value, unit]);

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

  const handleReset = () => {
    dispatch(reset());
    setValue(1);
    setUnit('day');
  };

  return (
    <div>
      <PageHeader
        title="Intl.RelativeTimeFormat"
        subTitle="Enables language-sensitive relative time formatting."
      />
      <Row gutter={16}>
        <Form>
          <Col span={6}>
            <br />
            <Title level={4}>Change value</Title>
            <InputNumber value={value} size="large" onChange={setValue} />
          </Col>
          <Col span={12}>
            <Affix offsetTop={40}>
              <Card
                bordered={false}
                actions={[
                  <Tooltip title="open in codesandbox (future feature)">
                    <Icon type="link" key="reset" />
                  </Tooltip>,
                  <Tooltip title="copy code to clipboard (future feature)">
                    <Icon
                      onClick={() => console.log('copy to clipboard')}
                      type="copy"
                      key="copy"
                    />
                  </Tooltip>,
                  <Tooltip title="show code (future feature)">
                    <Icon
                      onClick={() => console.log('show code')}
                      type="eye"
                      key="show"
                    />
                  </Tooltip>,
                  <Tooltip title="reset">
                    <Icon onClick={handleReset} type="rest" key="reset" />
                  </Tooltip>,
                ]}
              >
                <Row gutter={16}>
                  <Col span={24}>
                    <Statistic title="Result" value={timeString} />
                  </Col>
                </Row>
              </Card>
            </Affix>
          </Col>
          <Col span={4} offset={1}>
            <br />
            <Title level={4}>Change unit</Title>
            <Select
              value={unit}
              size="large"
              placeholder="Select Unit"
              onChange={setUnit}
            >
              <Option key="clear" value="undefined">
                undefined (clear)
              </Option>
              {units.map(unit => (
                <Option key={unit} value={unit}>
                  {unit}
                </Option>
              ))}
            </Select>
          </Col>
        </Form>
      </Row>
      <br />
      <Row gutter={16}>
        <Row span={24}>
          <Card title="Parameters" bordered={false}>
            <Form labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
              <Row gutter={16}>
                <Card type="inner" title="Locale" extra={<Tag>Optional</Tag>}>
                  <Col span={12}>
                    <Form.Item label="locale">
                      <Select
                        showSearch
                        value={state.locale}
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
                </Card>
              </Row>
              <br />
              <Row gutter={16}>
                <Card type="inner" title="Options" extra={<Tag>Optional</Tag>}>
                  <Row gutter={16}>
                    <Col span={24}>
                      <Col span={12}>
                        <Form.Item label="localMatcher">
                          <Select
                            value={state.options.localeMatcher}
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
                            value={state.options.numeric}
                            placeholder="Select a numeric"
                            onChange={handleNumericChange}
                          >
                            <Option key="clear" value="clear">
                              undefined (clear)
                            </Option>
                            {numerics.map(numeric => (
                              <Option key={numeric} value={numeric}>
                                {numeric}
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="style">
                          <Select
                            value={state.options.style}
                            placeholder="Select a style"
                            onChange={handleStyleChange}
                          >
                            <Option key="clear" value="clear">
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
                </Card>
              </Row>
            </Form>
          </Card>
        </Row>
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

export default RelativeTimeFormat;
