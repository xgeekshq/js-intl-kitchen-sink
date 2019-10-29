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
  Popover,
} from 'antd';

import { localeMatchers, pluralRules } from '../../data/options';
import ShowCodeModal from '../../components/ShowCodeModal';

import {
  localeChange,
  localeMatcherChange,
  typeChange,
  reset,
  minimumIntegerDigitsChange,
  minimumFractionDigitsChange,
  maximumSignificantDigitsChange,
  maximumFractionDigitsChange,
  minimumSignificantDigitsChange,
} from './actions';
import reducer, { INITIAL_STATE } from './reducer';

import { checkIsClear, cleanObject } from '../../utils';
import locales from '../../data/locales';
import links from './Data/usefulLinks';
import explanations from '../../data/explanations';

const { Option } = Select;
const { Title } = Typography;

const PluralRules = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [value, setValue] = useState(0);
  const [pluralString, setPluralString] = useState('');
  const [codeVisibility, setCodeVisibility] = useState(false);
  const [codeModal, setCodeModal] = useState(null);
  const [groupTwoEmpty, setGroupTwoEmpty] = useState(true);

  useEffect(() => {
    if (Intl && Intl.PluralRules && typeof Intl.PluralRules === 'function') {
      const pr = new Intl.PluralRules(
        state.locale,
        cleanObject({ ...state.options })
      );
      const pluralString = pr.select(value);
      setPluralString(pluralString);
    } else {
      setPluralString('Not compatible with your browser');
    }
  }, [state.locale, state.options, value]);

  useEffect(() => {
    if (
      state.options.minimumSignificantDigits !== undefined ||
      state.options.maximumSignificantDigits !== undefined
    ) {
      setGroupTwoEmpty(false);
    } else {
      setGroupTwoEmpty(true);
    }
  }, [
    state.options.minimumSignificantDigits,
    state.options.maximumSignificantDigits,
  ]);

  const handleLocaleChange = locale => {
    dispatch(localeChange(checkIsClear(locale)));
  };

  const handleLocaleMatcherChange = localeMatcher => {
    dispatch(localeMatcherChange(checkIsClear(localeMatcher)));
  };

  const handleTypeChange = type => {
    dispatch(typeChange(checkIsClear(type)));
  };

  const handleMinimumIntegerDigitsChange = minimumIntegerDigits => {
    dispatch(minimumIntegerDigitsChange(checkIsClear(minimumIntegerDigits)));
  };

  const handleMinimumFractionDigitsChange = minimumFractionDigits => {
    dispatch(minimumFractionDigitsChange(checkIsClear(minimumFractionDigits)));
  };

  const handleMaximumSignificantDigitsChange = maximumSignificantDigits => {
    dispatch(
      maximumSignificantDigitsChange(checkIsClear(maximumSignificantDigits))
    );
    clearGroupOne();
  };

  const clearGroupOne = () => {
    handleMinimumIntegerDigitsChange('clear');
    handleMinimumFractionDigitsChange('clear');
    handleMaximumFractionDigitsChange('clear');
  };

  const handleMinimumSignificantDigitsChange = minimumSignificantDigits => {
    dispatch(
      minimumSignificantDigitsChange(checkIsClear(minimumSignificantDigits))
    );
    clearGroupOne();
  };

  const handleMaximumFractionDigitsChange = maximumFractionDigits => {
    dispatch(maximumFractionDigitsChange(checkIsClear(maximumFractionDigits)));
  };

  const handleReset = () => {
    dispatch(reset());
    setValue(0);
  };

  const getCodeSnippet = () => {
    const {
      locale = navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.userLanguage ||
          navigator.language ||
          navigator.browserLanguage ||
          'en',
      options = {},
    } = state;

    // keep indentation of the block below
    return `// https://js-intl-kitchen-sink.netlify.com/PluralRules
const pr = new Intl.PluralRules('${locale}', ${JSON.stringify(
      { ...options },
      null,
      2
    )})
const pluralRulesString = pr.select(${value})`;
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
    const isNumeric = /^-?[0-9]+?(\.[0-9]+)?$/;
    if (isNumeric.test(newValue)) {
      setValue(newValue);
    }
  };

  return (
    <div>
      <PageHeader
        title="Intl.PluralRules"
        subTitle="Enables plural sensitive formatting and plural language rules."
      />
      <Row gutter={16}>
        <Form>
          <Col span={8}>
            <br />
            <Title level={4}>Change value</Title>
            <InputNumber
              value={value}
              size="large"
              onChange={handleValueChange}
            />
          </Col>
          <Col span={16}>
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
                    <Statistic title="Result" value={pluralString} />
                  </Col>
                </Row>
              </Card>
            </Affix>
          </Col>
        </Form>
      </Row>

      {codeModal && (
        <ShowCodeModal
          data={codeModal}
          visible={codeVisibility}
          title="PluralRules"
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
                        <Option key="clear" value="clear">
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
                        <Form.Item
                          label={
                            <Popover content={explanations.localeMatcher}>
                              localeMatcher
                            </Popover>
                          }
                        >
                          <Select
                            value={state.options.localeMatcher}
                            placeholder="Select a localeMatcher"
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
                        <Form.Item
                          label={
                            <Popover
                              content={
                                explanations.pluralRules.minimumIntegerDigits
                              }
                            >
                              minIntegerDigits
                            </Popover>
                          }
                        >
                          <Select
                            value={state.options.minimumIntegerDigits}
                            placeholder="Select minimum integer digits"
                            onChange={handleMinimumIntegerDigitsChange}
                            disabled={!groupTwoEmpty}
                          >
                            <Option key="clear" value="clear">
                              undefined (clear)
                            </Option>
                            {pluralRules.minimumIntegerDigits.map(digit => (
                              <Option key={digit} value={digit}>
                                {digit}
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                        <Form.Item
                          label={
                            <Popover
                              content={
                                explanations.pluralRules.maximumFractionDigits
                              }
                            >
                              maxFractionDigits
                            </Popover>
                          }
                        >
                          <Select
                            value={state.options.maximumFractionDigits}
                            placeholder="Select maximum fraction digits"
                            onChange={handleMaximumFractionDigitsChange}
                            disabled={!groupTwoEmpty}
                          >
                            <Option key="clear" value="clear">
                              undefined (clear)
                            </Option>
                            {pluralRules.maximumFractionDigits.map(digit => (
                              <Option key={digit} value={digit}>
                                {digit}
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                        <Form.Item
                          label={
                            <Popover
                              content={
                                explanations.pluralRules
                                  .maximumSignificantDigits
                              }
                            >
                              maxSignificantDigits
                            </Popover>
                          }
                        >
                          <Select
                            value={state.options.maximumSignificantDigits}
                            placeholder="Select maximum significant digits"
                            onChange={handleMaximumSignificantDigitsChange}
                          >
                            <Option key="clear" value="clear">
                              undefined (clear)
                            </Option>
                            {pluralRules.maximumSignificantDigits.map(digit => (
                              <Option key={digit} value={digit}>
                                {digit}
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          label={
                            <Popover content={explanations.pluralRules.type}>
                              type
                            </Popover>
                          }
                        >
                          <Select
                            value={state.options.type}
                            placeholder="Select a type"
                            onChange={handleTypeChange}
                          >
                            <Option key="clear" value="clear">
                              undefined (clear)
                            </Option>
                            {Object.values(pluralRules.types).map(type => (
                              <Option key={type} value={type}>
                                {type}
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                        <Form.Item
                          label={
                            <Popover
                              content={
                                explanations.pluralRules.minimumFractionDigits
                              }
                            >
                              minFractionDigits
                            </Popover>
                          }
                        >
                          <Select
                            value={state.options.minimumFractionDigits}
                            placeholder="Select minimum fraction digits"
                            onChange={handleMinimumFractionDigitsChange}
                            disabled={!groupTwoEmpty}
                          >
                            <Option key="clear" value="clear">
                              undefined (clear)
                            </Option>
                            {pluralRules.minimumFractionDigits.map(digit => (
                              <Option key={digit} value={digit}>
                                {digit}
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                        <Form.Item
                          label={
                            <Popover
                              content={
                                explanations.pluralRules
                                  .minimumSignificantDigits
                              }
                            >
                              minSignificantDigits
                            </Popover>
                          }
                        >
                          <Select
                            value={state.options.minimumSignificantDigits}
                            placeholder="Select minimum significant digits"
                            onChange={handleMinimumSignificantDigitsChange}
                          >
                            <Option key="clear" value="clear">
                              undefined (clear)
                            </Option>
                            {pluralRules.minimumSignificantDigits.map(digit => (
                              <Option key={digit} value={digit}>
                                {digit}
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

export default PluralRules;
