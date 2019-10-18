import React from 'react';
import { Card, Row, Col, PageHeader, Form, List, Avatar, Alert } from 'antd';

import links from './data/usefulLinks';

import styles from './styles.module.css';

const Home = () => {
  return (
    <div>
      <PageHeader
        title="Intl"
        subTitle="Namespace for the ECMAScript Internationalization API"
      />
      <Row gutter={16}>
        <Col span={24}>
          <Card bordered={false}>
            <Row gutter={16}>
              <Col span={24}>
                <p className={styles.quote}>
                  "The Intl object is the namespace for the ECMAScript
                  Internationalization API, which provides language sensitive
                  string comparison, number formatting, and date and time
                  formatting. The INTL object provides access to several
                  constructors as well as functionality common to the
                  internationalization constructors and other language sensitive
                  functions."
                </p>
                <p>
                  source:{' '}
                  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl">
                    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
                  </a>
                </p>
              </Col>
            </Row>
            <br />
          </Card>
        </Col>
      </Row>
      <br />
      {process.env.NODE_ENV !== 'production' && (
        <Alert
          message="Warning - This site contains incomplete Information, bugs, etc...Hey we just started 🤓!"
          description={
            <div>
              <p>
                Under active development. We added content='noindex,nofollow'
                but even so here you are 😎, want to give a 👋?
              </p>
              <p>
                All feedback is welcome, suggestions, bug reports, code,
                documentation and design contributions.
              </p>
              <p>
                <a href="https://github.com/xgeekshq/js-intl-kitchen-sink/issues">
                  Open or help solve an issue
                </a>
                ! 👐
              </p>
            </div>
          }
          type="warning"
          showIcon
        />
      )}
      <br />
      <Row gutter={16}>
        <Col span={16}>
          <Card title="About this page" bordered={false}>
            <Form labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
              <Row gutter={16}>
                <Col className={styles.about} span={24}>
                  <p>
                    The purpose of this page is to provide an easy and intuitive way to
                    explore the Javascript Intl API.
                  </p>
                  <p>
                    Kitchen Sink provides
                    a showcase for a large portion of the features of the Javascript Intl 
                    API. Our target audience are developers as a reference and those looking to 
                    learn more about the topic.
                  </p>
                  <p>
                    This site relies heavily on references from the{' '}
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl">
                      MDN web docs
                    </a>{' '}
                    from the amazing guys from Mozilla 💜. We keep their banner
                    in our side bar as a small sign of appreciation for their work.
                  </p>
                  <p>
                    All feedback is welcome{' '}
                    <span role="img" aria-label="open hands image">
                      👐
                    </span>
                    ! Any suggestions,{' '}
                    <span role="img" aria-label="bug image">
                      🐛
                    </span>
                                      , feature or just a comment please open an issue on <a href="https://github.com/xgeekshq/js-intl-kitchen-sink">GitHub</a>.
                  </p>
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
