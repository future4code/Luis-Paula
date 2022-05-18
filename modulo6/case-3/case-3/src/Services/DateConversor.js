export const DateConversor = (date) => {
  let convertDate = date.split('-').reverse();

  let day = convertDate[0];
  let month = convertDate[1];
  let year = convertDate[2];

  let convertedMonth = month;

  switch (month) {
    case '01':
      convertedMonth = month.replace('01', 'JAN');
      break;
    case '02':
      convertedMonth = month.replace('02', 'FEV');
      break;
    case '03':
      convertedMonth = month.replace('03', 'MAR');
      break;
    case '04':
      convertedMonth = month.replace('04', 'ABR');
      break;
    case '05':
      convertedMonth = month.replace('05', 'MAI');
      break;
    case '06':
      convertedMonth = month.replace('06', 'JUN');
      break;
    case '07':
      convertedMonth = month.replace('07', 'JUL');
      break;
    case '08':
      convertedMonth = month.replace('08', 'AGO');
      break;
    case '09':
      convertedMonth = month.replace('09', 'SET');
      break;
    case '10':
      convertedMonth = month.replace('10', 'OUT');
      break;
    case '11':
      convertedMonth = month.replace('11', 'NOV');
      break;
    case '12':
      convertedMonth = month.replace('12', 'DEZ');
      break;
    default:
      convertedMonth = month;
      break;
  }

  const newDate = [];
  newDate.push(day, convertedMonth, year);

  return newDate.join(' ');
};
