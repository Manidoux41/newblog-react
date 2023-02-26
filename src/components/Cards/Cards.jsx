import React, { useEffect, useState } from "react";
import { logementData } from "../../datas/logements";
import Card from "./Card";

function Cards() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    const fetchdata = logementData();
    setLogements(fetchdata);
  }, []);

  return (
    <div className="bg-gray-100 rounded-2xl flex justify-between flex-wrap gap-[60px] p-10 sm:my-10">
      {logements.map((item) => (
        <Card key={item.id} id={item.id} title={item.title} cover={item.cover} />
      ))}
    </div>
  );
}

export default Cards;
