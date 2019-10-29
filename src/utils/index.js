export const checkIsClear = option => (option === 'clear' ? undefined : option);

export const cleanObject = obj => {
  Object.keys(obj).forEach(key => {
    if (obj[key] === null || obj[key] === undefined) {
      delete obj[key];
    }
  });
};
