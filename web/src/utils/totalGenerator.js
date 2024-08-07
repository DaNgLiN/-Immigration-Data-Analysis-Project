const calculateRate = (result, total) =>
  Number(((result / total) * 100).toFixed(2));

export const totalGenerator = (data = []) => {
  const result = { year: {} };
  data.forEach((person) => {
    const hasYear = result.year?.[person.EN_YEAR];
    if (hasYear) {
      result.year[person.EN_YEAR].count += 1;
    } else {
      result.year[person.EN_YEAR] = {
        count: 1,
        name: person.EN_YEAR,
      };
    }
  });

  Object.values(result.year).forEach(({ name, count }) => {
    result.year[name].rate = calculateRate(count, data.length);
  });
  console.log({ result });
};
