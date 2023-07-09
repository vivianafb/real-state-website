import { useState, useEffect } from "react";
import "./App.css";
import MainComponent from "./GlobalComponents/HomeComponent";
const query = `
{
  pageCollection{
    items{
      id
      title
      imagesCollection{
        items{
          title
          url
        }
      }
      operacin
      tipoPropiedad
      precioUf
      precio
      m2
      dormitorios
      baos
      estacionamentoS
      terraza
      descripcion
      urlMapa
      nombreContacto
      fotoContacto {
        title
        url
      }
      
      numeroDeContacto
      emailContacto
    }
  }
}
`;

function App() {
  const [page, setPage] = useState<{ id?: string, title?: string }>();
  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/qht54y5rnrjp/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer mGNmZCa7Vk50XQDRtsJVOK9pgbbdP5JUOEF09cucKhs",
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setPage(data.pageCollection.items[0]);
      });
  }, []);

  if (!page) {
    return (<p>"Loading..."</p>);
  }

  // render the fetched Contentful data
  return (
    <div className="App">
      <MainComponent pageInfo={page} />
      {/* <header className="App-header">
        <p>{page.id}</p>
        <p>{page.title}</p>
      </header> */}
    </div>
  );
}

export default App;