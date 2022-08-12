// save to localStorage

export const saveMyLib = (myLib) => {
  const str = JSON.stringify(myLib);
  localStorage.setItem('myLib', str);
};

// get from localStorage

export const getMyLib = () => {
  const var1 = JSON.parse(localStorage.getItem('myLib'));
  return var1;
};