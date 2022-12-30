export const toDate = (date) => {
  let dataText = new Date(date);
  const monthNumber = dataText.getMonth();
  const day = dataText.getDay();
  const year = dataText.getFullYear();
  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  return ` ${day}, ${months[monthNumber]} ${year} `;
};
