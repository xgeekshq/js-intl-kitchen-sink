import React, { useReducer, Fragment } from 'react';
import { Tag, Input, Button, Layout, Form } from 'antd';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const AppendableInput = ({ onAdd, onClose, placeholder, buttonText }) => {
  const reducer = (state, newState) => ({ ...state, ...newState });
  const initialState = { tags: [], input: '' };

  const [{ tags, input }, setState] = useReducer(reducer, initialState);

  const handleOnChange = e => {
    setState({ input: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (input.trim() === '') return;

    setState({ tags: [...tags, { value: input, id: Date.now() }], input: '' });
    onAdd(input);
  };

  const handleOnClose = tag => {
    const filteredTags = tags.filter(stateTag => tag.id !== stateTag.id);

    setState({ tags: filteredTags });

    onClose(filteredTags);
  };

  return (
    <Fragment>
      <div className={styles.labelsContainer}>
        {tags.map(tag => (
          <Tag closable key={tag.id} onClose={() => handleOnClose(tag)}>
            {tag.value}
          </Tag>
        ))}
      </div>

      <Form onSubmit={handleSubmit}>
        <Layout>
          <Input
            value={input}
            placeholder={placeholder}
            onChange={handleOnChange}
          />

          <Button
            htmlType="submit"
            type="primary"
            className={styles.submitButton}
          >
            {buttonText}
          </Button>
        </Layout>
      </Form>
    </Fragment>
  );
};

AppendableInput.propTypes = {
  onAdd: PropTypes.func,
  onClose: PropTypes.func,
  placeholder: PropTypes.string,
  buttonText: PropTypes.string,
};

AppendableInput.defaultProps = {
  onAdd: () => {},
  onClose: () => {},
  placeholder: 'Input',
  buttonText: 'Submit',
};

export default AppendableInput;
