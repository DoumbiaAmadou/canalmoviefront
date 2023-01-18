import React, { FC } from "react";
import styles from "./List.module.scss";
import { BASE_URL, ResultType } from "../../services";

interface ListProps {
  content?: any[];
  nbColum?: number;
  click?: (element: ResultType) => void;
}
const List: FC<ListProps> = ({ content = [], nbColum = 4, click }) => {
  /**
   *
   * @param content ResultType[]
   * @param indexGrind :number
   * @returns JSX.Element
   */
  const listView = (content: ResultType[], indexGrind: number) => {
    return (
      <div className="grid" key={indexGrind}>
        {content.map((element, index) => (
          <div
            key={index}
            className={styles.Poster}
            onClick={() => click && click(element)}
          >
            {element.poster_path && (
              <img src={BASE_URL + element.poster_path} alt="" />
            )}
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
    <div className={styles.List} data-testid="Test-List">
      {content && content.length ? (
        formatContent().map((element, index) => listView(element, index))
      ) : (
        <span data-testid="Test-Empty">
          <h1>Empty Film</h1>
        </span>
      )}
    </div>
  );
};
export default List;
