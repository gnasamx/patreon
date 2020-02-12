import * as color from './colors';

export const applyPropertyStyle = (property, color, state = 'default') => {
  const propertyStyle = baseTheme[property];
  const appearanceStyle = propertyStyle[color];
  return appearanceStyle[state];
};

export const baseTheme = {
  background: {
    primary: {
      default: color.base_purple100,
      active: color.base_purple200,
      hover: color.base_purple300,
    },
    secondary: {
      default: color.base_light_purple100,
      active: color.base_light_purple200,
      hover: color.base_light_purple300,
    },
    outline: {
      default: color.base_outline_white,
      active: color.base_outline_white_active,
      hover: color.base_outline_white_hover
    }
  },
  border: {
    primary: {
      default: color.base_purple100,
    },
    secondary: {
      default: color.base_light_purple100,
    },
    outline: {
      default: color.base_outline_border,
    }
  },
  color: {
    primary: {
      default: color.text_white,
    },
    secondary: {
      default: color.text_purple100,
    },
    outline: {
      default: color.text_outline_gray,
    }
  },
};
