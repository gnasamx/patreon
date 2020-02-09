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

const applyPropertyStyle = (property, color, state = 'default') => {
  const propertyStyle = baseTheme[property];
  const appearanceStyle = propertyStyle[color];
  return appearanceStyle[state];
};

export const baseTheme = {
  background: {
    primary: {
      default: 'rgb(124, 61, 238)',
      hover: 'rgb(109, 39, 236)',
      active: 'rgb(109, 39, 236)',
    },
    secondary: {
      default: 'rgb(238, 231, 250)',
      hover: 'rgb(232, 222, 249)',
      active: 'rgb(226, 213, 248)',
    },
  },
  color: {
    primary: {
      default: 'rgb(255, 255, 255)',
    },
    secondary: {
      default: 'rgb(124, 61, 238)',
    },
  },
};
