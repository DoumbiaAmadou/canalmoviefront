const URL = "https://api.themoviedb.org/3/discover/tv?";

const queuryParams = {
  api_key: "92b418e837b833be308bbfb1fb2aca1e",
  language: "fr",
  sort_by: "popularity.desc",
  page: "1",
  timezone: "America/New_York",
  include_null_first_air_dates: "false",
};

export interface QueuryType {
  api_key: string;
  language: string;
  sort_by: string;
  page: string;
  timezone: string;
  include_null_first_air_dates: string;
  [key: string]: string;
}
export interface QueuryTypeUpdated {
  api_key?: string;
  language?: string;
  sort_by?: string;
  page?: string;
  timezone?: string;
  include_null_first_air_dates?: string;
}
const jsonToQueury = (obj: QueuryType) => {
  return Object.keys(obj).reduce(
    (acc: string, value: string, key) => `${acc}${value}=${obj[value]}&`,
    ""
  );
};

export interface ResultType {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface PageSearchType {
  page: number;
  results: ResultType[];
  total_pages: number;
  total_results: number;
}
export const allContentsService = async (custom: QueuryTypeUpdated = {}) => {
  let contents = await fetch(URL + jsonToQueury({ ...queuryParams, ...custom }))
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      // throw new Error("API  Error => " + JSON.stringify(res.status));
    })
    .then((value: PageSearchType) => value);

  return contents;
};
