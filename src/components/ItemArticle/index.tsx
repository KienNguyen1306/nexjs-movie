import Link from "next/link";
import "./ItemArticle.css";
import { FiPlay } from "react-icons/fi";
import Image from "next/image";
import { useSelector } from "react-redux";
function ItemArticle({ data }: { data: any }) {
  const generics = useSelector((state: any) => state.GENERIC.listGereric);
  if (!data) {
    return <></>;
  }
  return (
    <div className="item">
      <div className="image">
        <img
          src={`https://image.tmdb.org/t/p/w400/${data.image}`}
          alt="error"
        />
        <Link href={`/watch/${data.id}`} className="card__play">
          <div className="icon-play">
            <FiPlay className="icon" />
          </div>
        </Link>
        <span className="card__rate card__rate--green">
          {data.vote_average.toFixed(1)}
        </span>
      </div>
      <div className="content">
        <p className="line-clamp">{data.title}</p>
        <span className="line-clamp">
          {Object.keys(generics).length > 0 && (
            <>
              {data.genre_ids.map((item: any) => {
                return (
                  <>
                    <span>{generics[item].name}</span>
                    <span className="comma">, </span>
                  </>
                );
              })}
            </>
          )}
        </span>
      </div>
    </div>
  );
}

export default ItemArticle;
