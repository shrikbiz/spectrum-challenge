export const GetGenreList = (data) => {
  let genreSet = new Set();
  let genreList = [];
  //Time: O(n^m)
  for (let restaurant of data) {
    let genres = restaurant.genre.split(",");
    genres.forEach((val) => genreSet.add(val));
  }
  //Time: O(n)
  genreSet.forEach((value) =>
    genreList.push({ key: 0, text: value, value: value.toLowerCase() })
  );
  //Time: O(n)
  //setting unique key
  for (let keyCount in genreList) {
    genreList[keyCount].key = keyCount;
  }
  return genreList;
};
