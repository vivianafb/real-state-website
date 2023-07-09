import "./home.css";
import { CarruselImagesComponent } from "../../components/CarruselImagesComponent";
import Header from "../HeaderComponent";
import Footer from "../FooterComponent";
// import DetailsComponent from "../../components/DetailsComponent";
import BannerComponent from "../../components/BannerComponents";

interface IMainComponents {
  pageInfo: any;
}

const HomeComponent = (props: IMainComponents) => {
  // const arrayImages = props.pageInfo.imagesCollection.items;

  return (
    <>
      <Header />
      <div className="mainMenu">
        <div className="mainMenu-container">
          <BannerComponent />
          <CarruselImagesComponent />
          {/* <DetailsComponent object={props.pageInfo} /> */}
        </div>
      </div>
      <Footer />
    </>
  )
};

export default HomeComponent;
