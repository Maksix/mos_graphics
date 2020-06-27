const checkMonth = (month, dataMonth ) => {
  return month === 'Все месяцы' || month === dataMonth;
};

const checkYear = (year, dataYear ) => {
  return year === 'Все время' || year === dataYear;
};
const convertData = (data, month, year) => {
  let highChartData = [];
  data.forEach(({ Cells }) => {
    if (checkMonth(month, Cells.Month) && checkYear(year, Cells.Year)) {
      let foundObject = highChartData.find((cell) => cell.name === Cells.AdmArea);
      if (foundObject) {
        foundObject.amount += parseInt(Cells.TotalAmount / 1000);
      } else {
        highChartData.push({ name: Cells.AdmArea, amount:parseInt(Cells.TotalAmount / 1000 )});
      }
    }
  });
  highChartData = highChartData.map((item) => {
    item.name = item.name.replace('административный округ', 'АО');
    return item;
  });

  return highChartData;
};

export default convertData;
