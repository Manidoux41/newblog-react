import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Layout from "./Layout";
import Logements from "./Logements";
import NotFound from "./NotFound";
import { useEffect, useState } from "react";

function PublicRouter() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../datas/appartements.json");
        const data = await response.json();
        setLogements(data);
      } catch (error) {
        console.log(error);
      }
    };
    setTimeout(fetchData, 0);
    return () => {};
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home apparts={logements} />} />

        <Route path="/home" element={<Home apparts={logements} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/logements/:logementId"
          element={<Logements apparts={logements} />}
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default PublicRouter;
