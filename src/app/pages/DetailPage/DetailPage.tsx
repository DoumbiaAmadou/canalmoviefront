import { FC, useEffect, useState, useCallback } from "react";
import styles from "./DetailPage.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import {
  detailFind,
  DetailType,
  isPageSearchType,
  Season,
} from "../../services/FilmService";
import { BASE_URL, BASE_URLWIDE } from "../../services";

interface DetailPageProps {}

const DetailPage: FC<DetailPageProps> = () => {
  const [detailElement, setDetailElement] = useState<DetailType>();
  let navigate = useNavigate();

  let params = useParams();
  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = useCallback(async () => {
    if (params.mediaType && typeof params.contentID === "string") {
      const detail = await detailFind(
        parseInt(params.contentID),
        params.mediaType
      );
      if (!isPageSearchType(detail)) setDetailElement(detail);
    }
  }, [params.mediaType, params.contentID]);
  const makeSeasons = (e: Season) => {
    if (e && e.overview && e.overview.length > 1)
      return (
        <p key={e.id} className={styles.Ellipsis}>
          {e.name} : {e.overview} <br />
        </p>
      );
    return "";
  };
  return (
    <div
      className={styles.DetailPage}
      style={
        detailElement && {
          background:
            "url(" + BASE_URLWIDE + detailElement?.backdrop_path + ")",
          backgroundSize: "cover",
        }
      }
      data-testid="DetailPage"
    >
      <article className={styles.Transparency}>
        <header>
          <span>
            <kbd
              className="warning"
              onClick={() => {
                navigate("/");
              }}
            >
              {" "}
              {"<<  Back"}
            </kbd>
          </span>
          <div className={styles.Center}>
            <strong>{detailElement?.name}</strong>
          </div>
        </header>
        <div className={"grid " + styles.Blur}>
          <div className={styles.Center}>
            {detailElement && (
              <img src={BASE_URL + detailElement?.poster_path} alt="" />
            )}
          </div>
          <div>
            {detailElement?.genres.map((e) => (
              <span key={e.id}>
                <mark>{e.name} </mark> &nbsp;
              </span>
            ))}
            <br />
            {detailElement?.production_companies.map(
              (e) =>
                e.logo_path && (
                  <span key={e.id}>
                    <img
                      className={styles.Production}
                      src={BASE_URL + e.logo_path}
                      alt=""
                    />
                    {e.name} &nbsp;
                  </span>
                )
            )}
            <br />
            <span>{detailElement?.overview}</span>
          </div>
        </div>

        <footer>{detailElement?.seasons.map((e) => makeSeasons(e))}</footer>
      </article>
    </div>
  );
};
export default DetailPage;
