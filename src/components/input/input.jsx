import React from 'react';
import {
  FormGroup,
  Label,
  InputContainer,
  InputField,
  ErrorContainer,
  ErrorSpan,
} from './styled-input.js';

export default function Input({
  onChange,
  value,
  name,
  type,
  label,
  onBlur,
  error,
}) {
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <InputContainer label={label}>
        <InputField
          type={type}
          autocomplete="off"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={error}
        />
      </InputContainer>
      {error && (
        <ErrorContainer>
          <ErrorSpan color="error">Please enter a valid email.</ErrorSpan>
        </ErrorContainer>
      )}
    </FormGroup>
  );
}
