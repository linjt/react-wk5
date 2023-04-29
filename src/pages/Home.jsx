import Header from "../components/Header"
import Footer from "../components/Footer"
import ImageList from "../components/ImageList"
import Description from "../components/Description"
import { useImgs } from "../react-query";

function Home(){
  const { data, isLoading } = useImgs();
  const imgs = data ? data[0] : {};

  return(
    <div className="mainLayout">
      <Header
        className="container layoutHeader"
        title={imgs.title} 
        slogan={imgs.slogan} 
        avatar={imgs.avatar}
      />
      <div className="layoutContent">
        <ImageList
          images={imgs.images} 
          isLoading={isLoading}
        />
        <Description
          description={imgs.description} 
        />
      </div>
      <Footer className="layoutFooter"/>          
    </div>  
  );
}

export default Home;
