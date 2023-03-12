import Header from "../components/Header"
import Footer from "../components/Footer"
import ImageList from "../components/ImageList"
import Description from "../components/Description"

function Home({content}){
    return(
        <div className="mainLayout">
            <Header
              className="container layoutHeader"
              title={content.title} 
              slogan={content.slogan} 
              avatar={content.avatar}
            />
            <div className="layoutContent">
              <ImageList
                images={content.images} 
              />
              <Description
                description={content.description} 
              />
            </div>
            <Footer className="layoutFooter"/>          
        </div>
    )
}

export default Home;
