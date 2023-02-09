import axios from "axios";
import { useEffect } from "react";
import NavBar from "./components/Header/NavBar/NavBar";

function App() {
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => console.log(res.data));
  }, []);

  return (
    <div>
      <NavBar />
      <h3>Contenido</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsam quo
        qui nihil aspernatur? Non voluptates, consectetur obcaecati impedit
        minima culpa aspernatur voluptate esse architecto illum dolores
        distinctio. Veniam, distinctio.
      </p>
    </div>
  );
}

export default App;
