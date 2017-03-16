import React from 'react';
import { connectToValidator } from 'react-invalidate';

const Submit = ({ onClick, disabled }) => <button onClick={onClick} disabled={disabled}>Hello</button>;

const mapValidatorToProps = (validator, ownProps) => {
  return {
    disabled: !validator.isValid,
    onClick: async () => {
      const isValid = await validator.validate();

      if (!isValid) return console.log(ownProps.test);

      ownProps.onClick();
    },
  };
};

export default connectToValidator(mapValidatorToProps)(Submit);
