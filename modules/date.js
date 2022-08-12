import { DateTime } from '../node_modules/luxon/src/luxon.js';

const luxon = () => {
  const date = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  const printDate = document.querySelector('.date');
  printDate.innerHTML = date; // Tue, 12 May 2020 23:50:21 GMT
};

export default luxon;