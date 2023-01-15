const URL_BASE = "https://api.themoviedb.org/3/";
const URL_ALL = "https://api.themoviedb.org/3/discover/";
const URL_DETAIL = "https://api.themoviedb.org/3/";
const URL_SEARCH = "https://api.themoviedb.org/3/search/multi?"

const QUERYPARAMS = {
  api_key: "92b418e837b833be308bbfb1fb2aca1e",
  language: "fr",
  sort_by: "popularity.desc",
  page: "1",
  timezone: "America/New_York",
  include_null_first_air_dates: false,
  include_adult: true,
  external_source: 'imdb_id, freebase_mid, freebase_id, tvdb_id, tvrage_id, facebook_id, twitter_id, instagram_id'
};

export interface QueryType {
  api_key: string;
  language: string;
  sort_by: string;
  page: string;
  timezone: string;
  include_null_first_air_dates: string;
  external_source: string;
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
  mediaType?: string
}

export interface PageSearchType {
  page: number;
  results: ResultType[];
  total_pages: number;
  total_results: number;
}
export interface CreatedBy {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface LastEpisodeToAir {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

export interface Network {
  id: number;
  name: string;
  logo_path: string;
  origin_country: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface DetailType {
  adult: boolean;
  backdrop_path: string;
  created_by: CreatedBy[];
  episode_run_time: any[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: LastEpisodeToAir;
  name: string;
  next_episode_to_air?: any;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  seasons: Season[];
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}
export type CustomResult = PageSearchType | DetailType;
export const isPageSearchType = (t: CustomResult): t is PageSearchType => {
  return (t as PageSearchType).total_pages !== undefined;
};
const filmFetch = async (url: string) => {
  return await fetch(url)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      // throw new Error("API  Error => " + JSON.stringify(res.status));
    })
    .then((value: PageSearchType | DetailType) => value);
};

const makeDetailUrl = (id: number, mediaType: string = 'tv') => {
  const { api_key, external_source } = QUERYPARAMS;
  return URL_BASE + `${mediaType}/${id}?` + jsonToQuery({ api_key, external_source });
};

export const detailFind = async (id: number, mediaType: string) => {
  return await filmFetch(makeDetailUrl(id, mediaType));
};

export const allContentsService = async (custom: QueryTypeUpdated = {}, mediaType: string = 'tv') => {
  return await filmFetch(URL_ALL + `${mediaType}?` + jsonToQuery({ ...QUERYPARAMS, ...custom }));
};
export const searchService = async (custom: QueryTypeUpdated = {}) => {
  return await filmFetch(URL_SEARCH + jsonToQuery({ ...QUERYPARAMS, ...custom, }));
};
