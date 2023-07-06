import "./skeleton.css";
function Skeleton() {
  return (
    <div className="item skeleton">
      <div className="image skeleton-image"></div>
      <div className="content">
        <p className="line-clamp skeleton-text "></p>
        <span className="line-clamp skeleton-text"></span>
      </div>
    </div>
  );
}

export default Skeleton;
