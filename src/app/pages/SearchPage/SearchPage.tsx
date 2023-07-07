import React, { FC, useCallback, useEffect, useState } from "react";
import { V5Layout } from "../../layouts";
import { Search } from "../../components";
import { List } from "../../components";
import {
  CustomResult,
  QueryTypeUpdated,
  allContentsService,
  isPageSearchType,
} from "../../services";

import type { ResultType } from "../../services";
import { Paginate } from "../../components/";
import { searchService } from "../../services";
import { useNavigate, useParams } from "react-router-dom";
import Sort from "../../components/Sort/Sort";

interface SearchPageProps {}

const SearchPage: FC<SearchPageProps> = () => {
  //hooks
  let queryString = useParams();
  const [params, setParams] = useState<QueryTypeUpdated>();
  const [mediaType, setMediaType] = useState<string>("tv");
  const [allContent, setAllContent] = useState<ResultType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [totalPage, setTotalPage] = useState<number>(1);
  const navigate = useNavigate();

  useEffect(() => {
    let spreadParams = {};
    if (queryString?.params) {
      spreadParams = {
        ...handleParams(queryString?.params),
      };
    } else
      spreadParams = {
        ...params,
        ...{ query: query, page: page, mediaType },
      };
    if (query === "") {
      allContentsService(spreadParams, mediaType).then(fillAllContent);
    } else {
      searchService(spreadParams).then(fillAllContent);
    }
  }, [page, query, queryString?.params, params, mediaType]);

  const handleSearch = useCallback((val: string) => {
    setPage(1);
    setQuery(val);
  }, []);

  const handleParams = (val: string) => {
    const asc = val.split("&").find((e) => e === "asc" || e === "desc");
    if (asc)
      return {
        sort_by: asc === "asc" ? "popularity.asc" : "popularity.desc",
      };
    return {};
  };
  const handlePaginate = (val: number) => {
    setPage((prev) => val);
  };
  const fillAllContent = (result: CustomResult) => {
    if (isPageSearchType(result)) {
      setAllContent(result.results);
      //API LIMITAION total_pages limit to 499
      /**
       * {"errors":["page must be less than or equal to 500"],"success":false}
       */

      if (result.total_pages && result.total_pages < 500)
        setTotalPage((prev) => result.total_pages);
      else setTotalPage((prev) => 499);
    }
  };
  const sort = (asc: boolean) => {
    navigate("/");
    setParams((prev) => ({
      ...prev,
      ...{ sort_by: asc ? "popularity.asc" : "popularity.desc" },
    }));
  }; //popularity.desc, popularity.asc
  const handledetail = (element: ResultType) => {
    navigate(
      "/detail/" +
        element.id +
        "/" +
        (element.media_type ? element.media_type : mediaType),
    );
  };
  return (
    <V5Layout>
      <V5Layout.TopMenu>
        <h1>Welcome to Canal Movie search Engine. </h1>
        <Search handleSearch={handleSearch}></Search>
        <Sort query={query} sort={sort} setCatalogue={setMediaType}></Sort>
        <Paginate
          current={page}
          total={totalPage}
          currentChange={handlePaginate}
        ></Paginate>
        <br />
      </V5Layout.TopMenu>
      <V5Layout.ContentArea>
        <List content={allContent} click={handledetail}></List>
      </V5Layout.ContentArea>
    </V5Layout>
  );
};

export default SearchPage;
