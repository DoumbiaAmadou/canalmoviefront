const URL = "https://api.themoviedb.org/3/discover/tv?";
const URL_DETAIL = "https://api.themoviedb.org/3/find/";
const URL_SEARCH = "https://api.themoviedb.org/3/search/multi?"

const QUERYPARAMS = {
  api_key: "92b418e837b833be308bbfb1fb2aca1e",
  language: "fr",
  sort_by: "popularity.desc",
  page: "1",
  timezone: "America/New_York",
  include_null_first_air_dates: false,
  include_adult: true
};

export interface QueryType {
  api_key: string;
  language: string;
  sort_by: string;
  page: string;
  timezone: string;
  include_null_first_air_dates: string;
  [key: string]: string | number | boolean;
}

export interface QueryTypeUpdated {
  [key: string]: string | number | boolean;
}

const jsonToQuery = (obj: QueryTypeUpdated) => {
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

const filmFetch = async (url: string) => {
  return await fetch(url)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      // throw new Error("API  Error => " + JSON.stringify(res.status));
    })
    .then((value: PageSearchType) => value);
};

const makeDetailUrl = (id: number) => {
  const { api_key } = QUERYPARAMS;
  return URL_DETAIL + id + "?" + jsonToQuery({ api_key: api_key });
};

export const detailFind = async (id: number) => {
  return await filmFetch(makeDetailUrl(id));
};

export const allContentsService = async (custom: QueryTypeUpdated = {}) => {
  return await filmFetch(URL + jsonToQuery({ ...QUERYPARAMS, ...custom }));
};
export const searchService = async (custom: QueryTypeUpdated = {}) => {
  return await filmFetch(URL_SEARCH + jsonToQuery({ ...QUERYPARAMS, ...custom }));
};
