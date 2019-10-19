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
import ShowCodeModal from '../../components/ShowCodeModal';

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
import AppendableInput from '../../components/AppendableInput';

const { Option } = Select;
const { Title } = Typography;

const RelativeTimeFormat = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [value, setValue] = useState(1);
  const [unit, setUnit] = useState('day');
  const [timeString, setTimeString] = useState('');
  const [codeVisibility, setCodeVisibility] = useState(false);
  const [codeModal, setCodeModal] = useState(null);

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

  const getCodeSnippet = () => {
    const {
      locale = navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.userLanguage ||
          navigator.language ||
          navigator.browserLanguage ||
          'en',
      options: { localeMatcher, style, numeric },
    } = state;

    const optionalTemplate = `${
      localeMatcher ? ` localeMatcher: '${localeMatcher}',` : ''
    }${numeric ? ` numeric: '${numeric}',` : ''}
    ${style ? ` style: '${style}',` : ''}`;

    // keep indentation of the block below
    return `// https://js-intl-kitchen-sink.netlify.com/RelativeTimeFormat

  const value = '${value}';
  const unit = '${unit}';
  const formattedDate = new Intl.RelativeTimeFormat('${locale}', {
    ${optionalTemplate}
  }).format(value, unit);`;
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

  const handleValueChange = newValue => {
    const isNumeric = /^\-?[0-9]+?(\.[0-9]+)?$/;
    if (isNumeric.test(newValue)) {
      setValue(newValue);
    }
  };

  const onClose = values => {
    console.log(values);
  };
  const onAdd = value => {
    console.log(value);
  };

  return (
    <div>
      <PageHeader
        title="Intl.ListFormat"
        subTitle="Enables language-sensitive list formatting."
      />
      <Row gutter={16}>
        <Col span={6}>
          <br />
          <Title level={4}>Add values</Title>

          <AppendableInput
            onClose={onClose}
            onAdd={onAdd}
            placeholder="Items"
            buttonText="Add Value"
          />
        </Col>
        <Col span={12}>
          <Affix offsetTop={40}>
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
      </Row>

      {codeModal && (
        <ShowCodeModal
          data={codeModal}
          visible={codeVisibility}
          title="Relative Time Format"
          handleModalClose={handleModalClose}
        ></ShowCodeModal>
      )}
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
