import React, { FC } from "react";
import styles from "./List.module.scss";
import { ResultType } from "../../services";

const BASE_URL = "https://image.tmdb.org/t/p/w400/";
interface ListProps {
  content?: any[];
  nbColum?: number;
}
const List: FC<ListProps> = ({ content = [], nbColum = 4 }) => {

  const listView = (content: ResultType[], indexGrind: number) => {
    return (
      <div className="grid" key={indexGrind}>
        {content.map((element, index) => (
          <div key={index} className={styles.Poster}>
            <img src={BASE_URL + element.poster_path} alt="" />
            <span>
              <h6>{element.name}</h6>
            </span>
          </div>
        ))}
      </div>
    );
  };

  const formatContent = () => {
    let listdata = [];
    for (let index = 0; content && index < content.length; index += nbColum) {
      if (index + nbColum < content.length) {
        listdata.push(content.slice(index, index + nbColum));
      } else {
        //for add subNode to my grid
        let part = content.slice(index, index + nbColum);
        for (let cpt = content.length; cpt < index + nbColum; cpt++) {
          part.push({ image: "" });
        }
        listdata.push(part);
      }
    }
    return listdata;
  };

  return (
    <div className={styles.List} data-testid="List">
      {content ? (
        formatContent().map((element, index) => listView(element, index))
      ) : (
        <span>
          <h1>Empty Film</h1>
        </span>
      )}
    </div>
  );
};
export default List;