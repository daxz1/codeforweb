import { useState } from 'react';

/**
 *
 * @param initialValue
 * @param callback
 * @returns {{handleSubmit: *, inputs: *, handleInputChange: *}}
 */
const todo = (initialValue, callback) => {
  const [inputs, setInputs] = useState(initialValue);

  /**
   *
   * @param event
   */
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  /**
   *
   * @param event
   */
  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({ ...inputs, [event.target.name]: event.target.value }));
  };

  const reset = (fieldName) => {
    setInputs({ [fieldName]: '' });
  };

  return {
    handleSubmit,
    handleInputChange,
    reset,
    inputs,
  };
};

export default todo;
