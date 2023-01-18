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
import { V5Layout } from '../../layouts';

interface DetailPageProps { }

const DetailPage: FC<DetailPageProps> = () => {
  //hooks
  const [detailElement, setDetailElement] = useState<DetailType>();
  let navigate = useNavigate();
  let params = useParams();

  //useEffect
  useEffect(() => {
    getDetail();
  }, []);

  //functions
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
    <V5Layout>
      <V5Layout.TopMenu>

      </V5Layout.TopMenu>
      <V5Layout.ContentArea>
        <div
          className={styles.DetailPage}

          data-testid="DetailPage"
        >
          <article style={
            detailElement && {
              background:
                "url(" + BASE_URLWIDE + detailElement?.backdrop_path + ")",
              backgroundSize: "cover",
            }
          }>
            <header>
              <span>
                <kbd
                  className="warning"
                  onClick={() => {
                    navigate("/", { replace: true });
                  }}
                >
                  {" "}
                  {"<<  Back"}
                </kbd>
              </span>

              <div className={styles.Center}>
                <strong>{detailElement?.name}</strong>
                <strong>{!detailElement && "Content not found"}</strong>
              </div>
            </header>
            {detailElement && (
              <div className={"grid " + styles.Blur}>
                <div className={styles.Center}>
                  {detailElement && (
                    <img src={BASE_URL + detailElement?.poster_path} alt="" />
                  )}
                </div>
                <div>
                  {detailElement?.genres?.map((e) => (
                    <span key={e?.id}>
                      <mark>{e?.name} </mark> &nbsp;
                    </span>
                  ))}
                  <br />
                  {detailElement?.production_companies?.map(
                    (e) =>
                      e.logo_path && (
                        <strong>
                          <span key={e.id}>
                            &nbsp;
                            <img
                              className={styles.Production}
                              src={e && BASE_URL + e.logo_path}
                              alt=""
                            />
                            &nbsp;
                            {e?.name} &nbsp;
                          </span>
                        </strong>
                      )
                  )}
                  <br />
                  <span>{detailElement?.overview}</span>
                </div>
              </div>
            )}

            <footer>{detailElement?.seasons?.map((e) => makeSeasons(e))}</footer>
          </article>
        </div>
      </V5Layout.ContentArea>

    </V5Layout>

  );
};
export default DetailPage;
