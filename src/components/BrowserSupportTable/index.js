import React from 'react';
import { columns, browserInfo } from './constants';
import { Table } from 'antd';
import style from './styles.module.css';

const BrowserSupportTable = () => {
  return (
    <Table
      className={style.tableWidth}
      columns={columns}
      dataSource={browserInfo}
      pagination={false}
    />
  );
};

export default BrowserSupportTable;
