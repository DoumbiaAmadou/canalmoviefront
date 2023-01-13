import React, { FC } from "react";
import { V5Layout } from "../../layouts";
import { Search } from "../../components";
import { List } from '../../components';

interface SearchPageProps { }

const SearchPage: FC<SearchPageProps> = () => {
  const handleSearch = (val: string) => console.log(val);
  return (
    <V5Layout>
      <V5Layout.TopMenu>
        <h1>Welcome to Canal Movie search Engine. </h1>
        <Search handleSearch={handleSearch}></Search>
      </V5Layout.TopMenu>
      <V5Layout.ContentArea>
        <List></List>
      </V5Layout.ContentArea>
    </V5Layout>
  );
};

export default SearchPage;
