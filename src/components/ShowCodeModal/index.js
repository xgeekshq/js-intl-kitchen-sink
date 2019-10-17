import React from 'react';
import { Modal } from 'antd';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ShowCodeModal = ({
  data = null,
  visible = false,
  title = 'Code',
  ...restProps
}) => {
  return (
    <Modal
      title={title}
      footer={null}
      onCancel={restProps.handleModalClose}
      visible={visible}
      width="50%"
    >
      <SyntaxHighlighter
        showLineNumbers={true}
        language="javascript"
        style={atomOneDark}
      >
        {data}
      </SyntaxHighlighter>
    </Modal>
  );
};

export default ShowCodeModal;
