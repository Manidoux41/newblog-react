import Card from "./Card";

function Cards({logements}) {

  return (
    <div className="bg-gray-100 rounded-2xl flex justify-between flex-wrap gap-[60px] p-10 sm:my-10">
      {logements.map((logement) => (
        <Card key={logement.id} appart={logement} />
      ))}
    </div>
  );
}

export default Cards;
