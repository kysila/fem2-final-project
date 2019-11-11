import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, OutlinedInput } from '@material-ui/core';


import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { ArrowTooltip } from '../Tooltip/Tooltip';

import { useStyles } from './styles';

function InputField(props) {
  const classes = useStyles();
  const {
    id,
    value,
    onChange,
    onBlur,
    onFocus,
    labelWidth,
    label,
    type,
    variant,
    FormControlProps,
    LabelProps,
    InputProps,
    TooltipProps,
    error,
  } = props;

  const [passwordHidden, setPasswordVisible] = useState(true);
  const PasswordIcon = passwordHidden ? VisibilityIcon : VisibilityOffIcon;

  return (
    <FormControl className={classes.formControl} variant={variant} {...FormControlProps}>
      <InputLabel classes={{ root: classes.label }} htmlFor={id} {...LabelProps}>
        {label}
      </InputLabel>
      <ArrowTooltip title={error} {...TooltipProps}>
        <OutlinedInput
          id={id}
          type={type === 'password' && passwordHidden ? type : 'text'}
          classes={{
            input: classes.input,
          }}
          error={Boolean(error)}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          labelWidth={labelWidth}
          fullWidth
          {
          ...(type === 'password' && value ? {
            endAdornment: (
              <PasswordIcon
                style={{ cursor: 'pointer', userSelect: 'none' }}
                onTouchStart={() => setPasswordVisible(false)}
                onMouseDown={() => setPasswordVisible(false)}
                onTouchEnd={() => setPasswordVisible(true)}
                onMouseUp={() => setPasswordVisible(true)}
              />
            ),
          } : {})
        }
          {...InputProps}
        />
      </ArrowTooltip>
    </FormControl>
  );
}

InputField.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.string,
  labelWidth: PropTypes.number,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  error: PropTypes.node,
  FormControlProps: PropTypes.shape(FormControl.propTypes),
  LabelProps: PropTypes.shape(InputLabel.propTypes),
  InputProps: PropTypes.shape(OutlinedInput.propTypes),
  TooltipProps: PropTypes.shape(ArrowTooltip.propTypes),
};

InputField.defaultProps = {
  type: 'text',
  variant: 'outlined',
  labelWidth: 0,
  label: '',
  value: '',
  onChange: () => null,
  onBlur: () => null,
  onFocus: () => null,
  error: null,
  FormControlProps: {},
  LabelProps: {},
  InputProps: {},
  TooltipProps: {},
};

export {
  InputField,
};
