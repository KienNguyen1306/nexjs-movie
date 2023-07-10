import Image from "next/image";
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
      <Image
        src={`https://image.tmdb.org/t/p/original${image}`}
        alt="error"
        onClick={handleSreenImage}
        width={0}
        height={0}
      />
    </div>
  );
}

export default SreenImage;
