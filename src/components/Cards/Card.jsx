import { Link } from "react-router-dom";

function Card({appart}) {
  const imageURL = appart.cover;
  
  return (
    <Link
      key={appart.id}
      className="w-[340px] h-[340px] mx-auto justify-self-center self-center relative rounded-md overflow-hidden bg-center bg-cover drop-shadow-sm hover:drop-shadow-2xl hover:brightness-75"
      style={{ backgroundImage: `url(${imageURL})` }}
      to={`/logements/${appart.id}`}
    >
      <h3 className="text-white drop-shadow-2xl text-lg absolute left-2 bottom-2 z-10">
        {appart.title}
      </h3>
    </Link>
  );
}

export default Card;
