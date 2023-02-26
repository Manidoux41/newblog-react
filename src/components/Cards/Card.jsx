import { Link } from "react-router-dom";

function Card({ cover, title }) {
  const imageURL = cover;

  return (
    <Link
      id="card"
      className="w-[340px] h-[340px] mx-auto justify-self-center self-center relative rounded-md overflow-hidden bg-center bg-cover drop-shadow-sm hover:drop-shadow-2xl hover:brightness-75"
      style={{ backgroundImage: `url(${imageURL})` }}
    >
      <h3 className="text-white drop-shadow-2xl text-lg absolute left-2 bottom-2 z-10">
        {title}
      </h3>
    </Link>
  );
}

export default Card;
