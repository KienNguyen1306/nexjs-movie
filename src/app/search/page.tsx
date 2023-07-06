"use client";

import { GrNext, GrPrevious } from "react-icons/gr";
import ItemArticle from "@/components/ItemArticle";
import "./search.css";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { fetchSearchFilm } from "@/store/filmSlice";

function Search() {
  let listSearch = useSelector((state: any) => state.FILM.searchFilm.list);
  let totalItem = useSelector((state: any) => state.FILM.searchFilm.totalItem);

  const searchParams = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearchFilm({ query: searchParams.get("query") }));
  }, [searchParams.get("query")]);

  return (
    <div className="search-page">
      <head>
        <title>search</title>
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
      </head>
      <div className="container">
        <div className="body">
          <h2>
            Search Results for »
            <span>
              có {listSearch.length} tìm được với từ khóa {`     `}
              {`"${searchParams.get("query")}"`}
            </span>
          </h2>
          <div className="search-page-main">
            {listSearch.map((item: object, index: number) => {
              return <ItemArticle key={index} data={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
