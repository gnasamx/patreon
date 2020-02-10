import {applyPropertyStyle} from '../../theme/baseTheme';

export const getBackgroundColor = (property, color, state) => {
  return applyPropertyStyle(property, color, state);
};

export const getColor = (property, color, state) => {
  return applyPropertyStyle(property, color, state);
};

export const getButtonWidth = width => {
  if (width === 'full') {
    return '100%';
  } else {
    return 'auto';
  }
};



