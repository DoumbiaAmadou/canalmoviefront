import React, { FC } from "react";
import styles from "./List.module.scss";
import { BASE_URL, ResultType } from "../../services";

interface ListProps {
  contents?: any[];
  nbColum?: number;
  click: (element: ResultType) => void;
}
const List: FC<ListProps> = ({ contents = [], nbColum = 4, click }) => {
  /**
   * @param content ResultType[]
   * @param indexGrind :number
   * @returns JSX.Element
   */
  const listView = (
    <div className={styles.Grid}>
      {contents.map((element, index) => (
        <div
          key={index}
          className={styles.Poster}
          onClick={() => click(element)}
        >
          {element.poster_path && (
            <img src={BASE_URL + element.poster_path} alt="" />
          )}
          <span>
            {/*TODO: use TypeGuard Here */}
            {element.name ?? <h6>{element.name ?? element.title}</h6>}
          </span>
        </div>
      ))}
    </div>
  );
  return (
    <div className={styles.Containt} data-testid="Test-List">
      {listView}
    </div>
  );
};
export default List;
