import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
function SreenImage({ image }: { image: string }) {
  const [zoom, setZoom] = useState(false);
  function handleSreenImage() {
    setZoom(true);
  }

  function handleSreenOff() {
    setZoom(false);
  }
  return (
    <div className={`image ${zoom ? "zoom" : ""}`}>
      <div className="close-image">
        <AiOutlineClose className="icon" onClick={handleSreenOff} />
      </div>
      <img
        src={`https://image.tmdb.org/t/p/original${image}`}
        alt="error"
        onClick={handleSreenImage}
      />
    </div>
  );
}

export default SreenImage;
