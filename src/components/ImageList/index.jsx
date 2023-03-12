import { Row,Col } from "antd";
import ImageItem from "../ImageItem";
import styles from "./ImageList.module.css"

function ImageList({images}){
    return(
        <div className={styles.imageLayout}>
            <h1 className={styles.title}>IMAGES</h1>
            <hr className="dividerDark"/>
            <Row gutter={[32, 25]} className={styles.imageContainer}>
            {images.map(images => (
                <Col
                    key={images.id}
                    sm={{ span: 12 }}
                    lg={{ span: 8 }}
                    xl={{ span: 6 }}
                    xxl={{ span: 4 }}
                >
                    <ImageItem images={images} />
                </Col>
                ))}
            </Row>
        </div>
    )
}


export default ImageList;