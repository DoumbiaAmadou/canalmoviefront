import React, { FC, useCallback, useEffect, useState } from "react";
import { V5Layout } from "../../layouts";
import { Search } from "../../components";
import { List } from '../../components';
import { allContentsService } from "../../services";
import type { ResultType, PageSearchType } from '../../services';
import Paginate from '../../components/Paginate/Paginate';

interface SearchPageProps { }


const SearchPage: FC<SearchPageProps> = () => {

  const [allContent, setAllContent] = useState<ResultType[]>([]);
  const [findedList, setFindList] = useState<ResultType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);

  useEffect(() => {
    console.log('===>', { page: '' + page })
    //API LIMITAION total_pages limit to 499
    /**
     * {"errors":["page must be less than or equal to 500"],"success":false}
     */
    if (page < 500)
      allContentsService({ page: '' + page }).then((result: PageSearchType) => {

        console.log(result)
        setAllContent(result.results)
        if (result.total_pages && result.total_pages < 500)
          setTotalPage(prev => result.total_pages)
        else
          setTotalPage(prev => 499)

      })
  }, [page])

  const handleSearch = useCallback((val: string) => {
    console.log(val);
    return {

    }
  }, [])
  const handlePaginate = (val: number) => {
    console.log('setPagninate', val)
    setPage(prev => val);
  }



  return (

    < V5Layout >
      <V5Layout.TopMenu>
        <h1>Welcome to Canal Movie search Engine. </h1>
        <Search handleSearch={handleSearch}></Search>
        <Paginate current={page} total={totalPage} currentChange={handlePaginate}></Paginate>
      </V5Layout.TopMenu>
      <V5Layout.ContentArea>
        <List content={allContent}></List>
      </V5Layout.ContentArea>
    </V5Layout >
  );
};

export default SearchPage;
