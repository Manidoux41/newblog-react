import { Link } from "react-router-dom";

function Card({appartId, appartTitle, appartCover }) {
  
  
  return (
    <Link
      className="w-[340px] h-[340px] mx-auto justify-self-center self-center relative rounded-md overflow-hidden bg-center bg-cover drop-shadow-sm hover:drop-shadow-2xl hover:brightness-75"
      style={{ backgroundImage: `url(${appartCover})` }}
      to={`../logements/${appartId}`}
    >
      <h3 className="text-white drop-shadow-2xl text-lg absolute left-2 bottom-2 z-10">
        {appartTitle}
      </h3>
    </Link>
  );
}

export default Card;
