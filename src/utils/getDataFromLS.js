export const getDataFromLS = (key, defaultValue) => {
  const dataFromLS = JSON.parse(localStorage.getItem(key));

  if (!dataFromLS) {
    return defaultValue;
  }
  return dataFromLS;
};
