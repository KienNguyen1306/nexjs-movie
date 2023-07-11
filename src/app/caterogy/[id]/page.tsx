"use client";

import { GrNext, GrPrevious } from "react-icons/gr";
import ItemArticle from "@/components/ItemArticle";
import "./allfilm.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchListFilmCaterogy, fetchListPopular } from "@/store/filmSlice";
import { useEffect, useState } from "react";
import Loading from "@/components/shared/loading";
import Loading1 from "@/components/shared/loading/loading2";
import { useParams } from "next/navigation";

function Caterogy() {
  let listFilm = useSelector((state: any) => state.FILM.listFilmCate.list);
  let currentPages = useSelector(
    (state: any) => state.FILM.listFilmCate.currentPage
  );
  let totalPages = useSelector(
    (state: any) => state.FILM.listFilmCate.totalPage
  );

  let listCaterogy = useSelector((state: any) => state.GENERIC.listGereric);

  console.log("caterogy - page", listCaterogy);
  const dispatch = useDispatch<any>();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [loading1, setLoaing1] = useState(true);

  useEffect(() => {
    dispatch(fetchListFilmCaterogy({ id: params.id })).then(() => {
      setLoaing1(false);
    });
  }, [dispatch, params.id]);

  function hanhleNextpage() {
    setLoading(false);
    dispatch(
      fetchListFilmCaterogy({ id: params.id, page: currentPages + 1 })
    ).then(() => {
      setLoading(true);
    });
  }

  function handlePrevPage() {
    dispatch(fetchListFilmCaterogy({ id: params.id, page: currentPages - 1 }));
  }

  if (loading1) {
    return (
      <div className="container">
        <div className="loading">
          <Loading1 />
        </div>
      </div>
    );
  }

  return (
    <div className="allfilm">
      <div className="container">
        <div className="body">
          <h2>
            {Object.keys(listCaterogy).length > 0 && (
              <>{listCaterogy[params.id].name}</>
            )}
          </h2>
          <div className="allfilm-main">
            {listFilm.map((item: Object, index: any) => {
              return <ItemArticle key={index} data={item} />;
            })}
          </div>
          <div className="paging">
            {currentPages !== 1 && (
              <button className="btn btn-paging" onClick={handlePrevPage}>
                <GrPrevious className="icon" />
                <p>Prev</p>
              </button>
            )}

            <button className="btn btn-paging">
              {currentPages} of {totalPages}
            </button>
            {loading ? (
              <button className="btn btn-paging" onClick={hanhleNextpage}>
                <p>Next</p>
                <GrNext className="icon" />
              </button>
            ) : (
              <button className="btn btn-paging" onClick={hanhleNextpage}>
                <Loading />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Caterogy;
