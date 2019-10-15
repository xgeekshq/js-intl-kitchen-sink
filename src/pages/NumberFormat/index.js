import React, { useEffect } from 'react';
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
  InputNumber,
} from 'antd';

const { Option } = Select;
const { Title, Text } = Typography;

const NumberFormat = props => {
  return (
    <div>
      <PageHeader
        title="Intl.NumberFormat"
        subTitle="Enables language-sensitive relative time formatting."
      />
      <Row gutter={16}>
        <Col span={6}>
          <p>Change Date</p>
          <InputNumber onChange={() => {}} />
        </Col>
        <Col span={12}>
          <Card bordered={false}>
            <Row gutter={16}>
              <Col span={24}>
                <Statistic title="Result" value="10/15/2019, 20:53:16" />
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
                    <Select placeholder="Select a locale" onChange={() => {}}>
                      <Option key="clear" value={undefined}>
                        undefined (clear)
                      </Option>
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
                    <Form.Item label="localeMatcher">
                      <Select
                        placeholder="Select a localeMatcher"
                        onChange={() => {}}
                      >
                        <Option key="clear" value={undefined}>
                          undefined (clear)
                        </Option>
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
                      </Select>
                    </Form.Item>
                    <Form.Item label="style">
                      <Select placeholder="Select a style" onChange={() => {}}>
                        <Option key="clear" value={undefined}>
                          undefined (clear)
                        </Option>
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

export default NumberFormat;