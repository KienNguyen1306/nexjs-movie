"use client";
import Title from "../shared/title";
import "./NewlyAddArticle.css";
import ItemArticle from "../ItemArticle";
import { useSelector } from "react-redux";
import Skeleton from "../Skeleton";

function NewlyAddArticle() {
  let listPopular: any = useSelector<any>(
    (state) => state.FILM.listPopular.list
  );

  if (listPopular.length === 0) {
    return (
      <div className="NewlyAddArticle">
        <div className="container">
          <div className="body">
            <div className="top">
              <Title>Newly added</Title>
            </div>
            <div className="list-movie">
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="NewlyAddArticle">
      <div className="container">
        <div className="body">
          <div className="top">
            <Title>Newly added</Title>
          </div>
          <div className="list-movie">
            {listPopular.map((item: Object, index: any) => {
              return <ItemArticle data={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewlyAddArticle;
