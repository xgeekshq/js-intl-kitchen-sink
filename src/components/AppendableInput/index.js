import React, { useReducer, Fragment, useEffect, useRef } from 'react';
import { Tag, Input, Button, Layout, Form } from 'antd';
import isEqual from 'lodash/isEqual';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const AppendableInput = ({
  value,
  onAdd,
  onClose,
  onChange,
  placeholder,
  buttonText,
}) => {
  const reducer = (state, newState) => ({ ...state, ...newState });
  const initialState = { tags: value, input: '' };

  const [{ tags, input }, setState] = useReducer(reducer, initialState);

  const inputRef = useRef();

  useEffect(() => {
    if (!isEqual(tags, value)) setState({ tags: value });
  });

  const handleOnChange = e => {
    setState({ input: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (input.trim() === '') return;

    const newValue = { value: input, id: Date.now() };

    const newTag = [...tags, newValue];

    setState({ tags: newTag, input: '' });

    onAdd(newValue);
    onChange(newTag);

    inputRef.current.focus();
  };

  const handleOnClose = tag => {
    const filteredTags = tags.filter(stateTag => tag.id !== stateTag.id);

    setState({ tags: filteredTags });

    onClose(tag);
    onChange(filteredTags);
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
            size="large"
            ref={inputRef}
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
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  buttonText: PropTypes.string,
  value: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
};

AppendableInput.defaultProps = {
  onAdd: () => {},
  onClose: () => {},
  onChange: () => {},
  placeholder: 'Input',
  buttonText: 'Submit',
  value: [],
};

export default AppendableInput;
