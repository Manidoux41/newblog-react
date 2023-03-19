import Banner from "../components/Banner/Banner";
import Card from "../components/Cards/Card";
import Image from "../assets/bannerImage-1.jpg";
import { useEffect, useState } from "react";

function Home({ apparts }) {
  const [bannerTitle, setBannerTitle] = useState("");
  useEffect(() => {
    setBannerTitle("Chez vous, partout et ailleurs");
  }, []);

  return (
    <div className="sm:mx-44">
      <Banner title={bannerTitle} bannerImg={Image} />
      <div className="bg-gray-100 rounded-2xl flex justify-between flex-wrap gap-[30px] p-10 sm:my-10">
        {apparts.map((appart) => (
          <Card
            key={appart.id}
            appartId={appart.id}
            appartTitle={appart.title}
            appartCover={appart.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
