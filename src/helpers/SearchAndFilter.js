export const SearchAndFilter = (
  searchData,
  apiData,
  genreFilter,
  stateFilter
) => {
  if (searchData) {
    apiData = apiData.filter((data) => {
      for (let genre of data.genre)
        if (genre.toLowerCase().includes(searchData.toLowerCase())) return true;
      return (
        data.name.toLowerCase().includes(searchData.toLowerCase()) ||
        data.city.toLowerCase().includes(searchData.toLowerCase()) ||
        data.state.toLowerCase().includes(searchData.toLowerCase())
      );
    });
  }
  if (genreFilter.length) {
    apiData = apiData.filter((data) => {
      for (let genre of data.genre) {
        for (let eachSelectedGenre of genreFilter)
          if (genre.toLowerCase() === eachSelectedGenre.toLowerCase())
            return true;
      }
      return false;
    });
  }
  if (stateFilter.length) {
    apiData = apiData.filter(({ state }) => {
      for (let selectedState of stateFilter)
        if (selectedState.toLowerCase() === state.toLowerCase()) return true;
      return false;
    });
  }
  return apiData;
};
