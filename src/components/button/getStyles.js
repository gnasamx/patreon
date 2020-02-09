export const getBackgroundColor = (property, color, state) => {
  console.log('Inside getBackgroundColor: ', property, color, state);
  return applyPropertyStyle(property, color, state);
};

export const getColor = (property, color, state) => {
  console.log('Inside getColor: ', property, color, state);
  return applyPropertyStyle(property, color, state);
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
    },
    secondary: {
      default: 'rgb(238, 231, 250)',
      hover: 'rgb(232, 222, 249)',
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
