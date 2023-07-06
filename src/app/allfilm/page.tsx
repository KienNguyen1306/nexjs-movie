"use client";

import { GrNext, GrPrevious } from "react-icons/gr";
import ItemArticle from "@/components/ItemArticle";
import "./allfilm.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchListPopular } from "@/store/filmSlice";
import { useEffect, useState } from "react";
import Loading from "@/components/shared/loading";

function Allfilm() {
  let listPopuler = useSelector((state: any) => state.FILM.listPopular.list);
  let currentPages = useSelector(
    (state: any) => state.FILM.listPopular.currentPage
  );
  let totalPages = useSelector(
    (state: any) => state.FILM.listPopular.totalPage
  );
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(fetchListPopular(1));
  }, []);

  function hanhleNextpage() {
    setLoading(false);
    dispatch(fetchListPopular(currentPages + 1)).then(() => {
      setLoading(true);
    });
  }

  function handlePrevPage() {
    dispatch(fetchListPopular(currentPages - 1));
  }
  return (
    <div className="allfilm">
      <div className="container">
        <div className="body">
          <h2>moviefilm</h2>
          <div className="allfilm-main">
            {listPopuler.map((item: Object, index: any) => {
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

export default Allfilm;
