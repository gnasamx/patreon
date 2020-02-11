import {applyPropertyStyle} from '../../theme/baseTheme';
import * as colors from '../../theme/colors';

export const getBackgroundColor = (property, color, state) => {
  if (state === 'disabled') return colors.base_disabled_white;
  return applyPropertyStyle(property, color, state);
};

export const getColor = (property, color, state) => {
  if (state === 'disabled') return colors.text_disabled_gray;
  return applyPropertyStyle(property, color, state);
};

export const getButtonWidth = width => {
  if (width === 'full') {
    return '100%';
  } else {
    return 'auto';
  }
};

export const getButtonSize = size => {
  if (size === 'large') {
    return '0.78125rem 1.5rem';
  } else {
    return '0.46875rem 1rem';
  }
};
