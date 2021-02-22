export const RestructureData = (data) => {
  for (let item in data) data[item].genre = data[item].genre.split(",");
  data.sort((a, b) => a - b);
  return data;
};
