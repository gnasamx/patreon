import styled from 'styled-components';

export const FormGroup = styled.div`
  box-sizing: border-box;
  padding: 0rem;
  margin: 0 0 0.5rem 0;
  transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
  width: 100%;
`;

export const Label = styled.label`
  cursor: text;
  pointer-events: none;
  color: rgb(112, 108, 100);
  position: relative;
  font-size: 0.875rem !important;
  transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
`;

export const InputContainer = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 0.5rem;
  position: relative;
  margin-top: 0.5rem;
`;

export const InputField = styled.input`
  resize: none;
  width: 100%;
  box-shadow: none;
  box-sizing: border-box;
  color: rgb(36, 30, 18);
  height: 3rem;
  font-size: 1rem !important;
  background-color: ${({error}) => getBackgroundColor(error)};
  border-width: 1px;
  border-style: solid;
  border-color: ${({error}) => getBorderColor(error)};
  outline: none;
  padding: 0.75rem 1rem;
  transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
  border-radius: 4px;

  &:active,
  &:focus {
    background: rgb(255, 255, 255);
    border-color: rgb(0, 76, 129);
    outline: none;
  }
`;

export const ErrorContainer = styled.div`
  align-items: flex-start;
  align-content: flex-start;
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  flex-grow: 1;
  padding: 0;
  margin: 0 0 0.5rem 0;
  transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
`;

export const ErrorSpan = styled.span`
  color: rgb(204, 50, 63);
  font-family: aktiv-grotesk, sans-serif;
  position: relative;
  font-weight: 400 !important;
  font-size: 0.875rem !important;
  line-height: 1.5 !important;
  margin: 0px;
  transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
`;

const getBackgroundColor = error => {
  if (error) {
    return 'rgb(250, 233, 234)';
  } else {
    return 'rgb(245, 244, 242)';
  }
};

const getBorderColor = error => {
  if (error) {
    return 'rgb(204, 50, 63)';
  } else {
    return 'rgb(229, 227, 221)';
  }
};
